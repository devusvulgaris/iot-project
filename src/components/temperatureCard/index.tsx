import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";
import { getGradient } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
type Props = {
  value: number;
  bgVariant: string;
};

const TemperatureCard = ({ value, bgVariant }: Props) => (
  <Card
    // className={`bg-fuchsia-500 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-400 via-fuchsia-500 to-indigo-500`}
    className={`bg-fuchsia-500 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500`}
  >
    <CardBody className="items-center justify-center pb-0">
      {value ? (
        <>
          <FontAwesomeIcon
            icon={faTemperatureHalf}
            color="white"
            size="4x"
            className="mb-3"
          />
          <p className="text-4xl text-white">{value}°C</p>
        </>
      ) : (
        <CircularProgress
          size="lg"
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
        Temperature
      </Chip>
    </CardFooter>
  </Card>
);

export default TemperatureCard;
