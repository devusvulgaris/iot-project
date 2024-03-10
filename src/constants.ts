export const CLIENT_ID = "smart-garden";
export const ROOT_TOPIC = "mini-garden";

export enum TOPICS {
  TEMPERATURE = `${ROOT_TOPIC}/temperature`,
  HUMIDITY = `${ROOT_TOPIC}/humidity`,
  MOISTURE = `${ROOT_TOPIC}/moisture`,
  LED = `${ROOT_TOPIC}/led`,
}

export enum CONNECTION_STATUS {
  CONNECTED = "connected",
  CONNECTING = "connecting",
  RECONNECTING = "reconnecting",
  DISCONNECTED = "disconnected",
}

export enum LED_MESSAGE {
  ON = "ON",
  OFF = "OFF",
}
