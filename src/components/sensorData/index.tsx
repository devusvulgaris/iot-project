"use client";
import CircularCard from "../circularCard";
import TemperatureCard from "../temperatureCard";
import useMqttClient from "@/hooks";
import useStore from "@/store";
import { Button } from "@nextui-org/react";
import { CONNECTION_STATUS } from "@/constants";
import { getGradient } from "@/utils";
import CardSkeleton from "../cardSkeleton";

const SensorData = () => {
  const { connect } = useMqttClient();
  const { connectionStatus, isSubscribed, temperature, humidity, moisture } =
    useStore(
      ({
        connectionStatus,
        isSubscribed,
        temperature,
        humidity,
        moisture,
      }) => ({
        connectionStatus,
        isSubscribed,
        temperature,
        humidity,
        moisture,
      })
    );

  return (
    <div>
      <div className="my-5 text-center">
        <h2 className="text-4xl mb-4">Smart Mini Garden</h2>
        <p>Data about temperature, air humididty and soil moisture.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {isSubscribed ? (
          <>
            {" "}
            <TemperatureCard value={temperature} bgVariant="snowflake" />
            <CircularCard
              label="Humidity"
              value={parseFloat(humidity)}
              bgVariant="hyper"
            />
            <CircularCard
              label="Soil moisture"
              value={parseFloat(moisture)}
              bgVariant=""
            />
          </>
        ) : (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default SensorData;
