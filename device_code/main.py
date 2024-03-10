from machine import Pin, I2C, ADC
from ssd1306 import SSD1306_I2C
from time import time, sleep
import network
from umqtt.simple import MQTTClient, __version__
import secrets
import ssl
import dht

dht_pin = Pin(15, Pin.IN, Pin.PULL_UP)

sensor = dht.DHT22(dht_pin)

temperature_ad_pin = ADC(4)

soil_sensor_ad_pin = ADC(26)

led = Pin("LED", Pin.OUT)

i2c = I2C(0, scl=Pin(17), sda=Pin(16), freq=200000)

WIDTH = 128
HEIGHT = 64

oled = SSD1306_I2C(WIDTH, HEIGHT, i2c)

print("Version", __version__)


def read_dht_sensor():
    try:
        sensor.measure()

        temperature = sensor.temperature()
        humidity = sensor.humidity()

        return temperature, humidity

    except OSError as e:
        print("Error reading data from sensor", e)


def calculate_temperature():
    ad = temperature_ad_pin.read_u16()
    bits = 16
    ref_voltage = 3.3

    resolution = 2**bits - 1

    analog_output_voltage = ref_voltage * ad / resolution

    temperature = 27 - ((analog_output_voltage - 0.706) / 0.001721)

    print(f"Temperature: {temperature} C")
    return temperature


def display_temperature(value):
    oled.fill(0)
    oled.text("Temperature:", 5, 5)
    oled.text(f"{value:.2f} C", 5, 20)
    oled.show()


def display_moisture(value):
    oled.text("Moisture:", 5, 40)
    oled.text(f"{value:.2f}", 5, 50)
    oled.show()

# Soil moisture


def measure_soil_moisture():

    MAX_MOISTURE = 65535

    moisture_value = soil_sensor_ad_pin.read_u16()

    print("moisture_value", moisture_value)

    calibrated_moisture = (MAX_MOISTURE - moisture_value) / MAX_MOISTURE * 100
    # calibrated_moisture = (moisture_value * 100) / 1023;

    print(f"[DEBUG]::Moisture {calibrated_moisture:.2f}")

    display_moisture(calibrated_moisture)

    return calibrated_moisture


# WLAN connection

def connect_wlan():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(secrets.SSID, secrets.WIFI_PASSWORD)

    while wlan.isconnected() == False:
        print("Connecting...")
        sleep(1)

    print("Connection successful. Pico IP:", wlan.ifconfig()[0])


# MQTT connection
KARAPORTTI_BROKER_IP = "192.168.1.254"

client_id = "smart-garden-pico"
server = secrets.MQTT_HOST
port = secrets.MQTT_PORT
user = secrets.EMQX_USERNAME
password = secrets.EMQX_PASSWORD
ssl_params = {"server_hostname": server}


def subscribe_cb(topic, msg):
    print("New message on topic {}".format(topic.decode('utf-8')))
    print("Message", msg.decode())

    if msg.decode('utf-8') == "ON":
        led.value(1)
    else:
        led.value(0)


ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
ssl_context.verify_mode = ssl.CERT_NONE

SUBSCRIBE_LED_TOPIC = "mini-garden/led"


def connect_mqtt():
    mqtt_client = MQTTClient(client_id, server, port,
                             user, password, ssl=ssl_context)
    mqtt_client.set_callback(subscribe_cb)

    try:
        mqtt_client.connect()
        mqtt_client.subscribe(SUBSCRIBE_LED_TOPIC)
        print(f"Connected to EMQX {server}")
        return mqtt_client
    except Exception as e:
        print('Failed to connect to MQTT broker:', e)
        raise


def reconnect_mqtt():
    print('Failed to connect to MQTT broker. Reconnecting...')
    sleep(5)
    client = connect_mqtt()
    return client


def main():
    last_publish = time()
    publish_interval = 5
    
    connect_wlan()

    try:
        mqtt_client = connect_mqtt()

    except Exception:
        mqtt_client = reconnect_mqtt()

    while True:
        mqtt_client.check_msg()
        
        if time() - last_publish >= publish_interval:
            
            temperature, humidity = read_dht_sensor()

            display_temperature(temperature)

            moisture = measure_soil_moisture()

            root_topic = "mini-garden"

            temperature_topic = f"{root_topic}/temperature"
            humidity_topic = f"{root_topic}/humidity"
            moisture_topic = f"{root_topic}/moisture"

            if mqtt_client:
                mqtt_client.publish(temperature_topic,
                                f"{temperature:.2f}")
                mqtt_client.publish(humidity_topic, f"{humidity:.2f}")
                mqtt_client.publish(moisture_topic, f"{moisture:.2f}")

                print(f"Sending to MQTT app: {temperature_topic} -> {temperature}")
                print(f"Sending to MQTT app: {humidity_topic} -> {humidity}")
                print(f"Sending to MQTT app: {moisture_topic} -> {moisture}")
                last_publish = time()

        sleep(1)


if __name__ == "__main__":
    main()
