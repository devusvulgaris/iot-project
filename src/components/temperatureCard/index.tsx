import React from "react";
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

import CardSkeleton from "@/components/cardSkeleton";
import useStore from "@/store";
import { CONNECTION_STATUS } from "@/constants";
import { getGradient } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
type Props = {
  value: number;
  bgVariant: string;
};

const TemperatureCard = ({ value, bgVariant }: Props) => {
  const { connectionStatus } = useStore(({ connectionStatus }) => ({
    connectionStatus,
  }));

  if (connectionStatus !== CONNECTION_STATUS.CONNECTED) {
    return <CardSkeleton />;
  }
  const backroundVariant = getGradient(bgVariant);

  return (
    <Card className={`bg-fuchsia-500 bg-gradient-to-br ${backroundVariant}`}>
      <CardBody className="items-center">
        <FontAwesomeIcon
          icon={faTemperatureHalf}
          color="white"
          size="4x"
          className="mb-3 mt-4"
        />
        <p className="text-4xl text-white">{value}°C</p>
      </CardBody>
      <CardFooter className="justify-center items-center">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          Temperature
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default TemperatureCard;
