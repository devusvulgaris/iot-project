"use client";

import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import { getGradient } from "@/utils";

type Props = {
  moisture: number;
};

const CircularCard = ({ label, value, bgVariant }: Props) => {
  return (
    <Card
      className={`bg-fuchsia-500 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 min-h-52`}
    >
      <CardBody className="justify-center items-center pb-0">
        {value ? (
          <CircularProgress
            value={value}
            showValueLabel
            strokeWidth={3}
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-white",
            }}
          />
        ) : (
          <CircularProgress
            classNames={{
              indicator: "stroke-white",
              track: "stroke-white/10",
            }}
          />
        )}
      </CardBody>
      <CardFooter className="justify-center items-center">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          {label}
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default CircularCard;
