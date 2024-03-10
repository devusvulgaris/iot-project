"use client";

import { Button } from "@nextui-org/react";
import { getGradient } from "@/utils";
import useStore from "@/store";
import useMqttClient from "@/hooks";
import { TOPICS, LED_MESSAGE } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const LedControlsection = () => {
  const { publish } = useMqttClient();

  const { ledIsOn, toggleLedState, connectionStatus } = useStore(
    ({ ledIsOn, toggleLedState, connectionStatus }) => ({
      ledIsOn,
      toggleLedState,
      connectionStatus,
    })
  );

  const handleClick = () => {
    toggleLedState();

    publish({
      topic: TOPICS.LED,
      message: ledIsOn ? LED_MESSAGE.OFF : LED_MESSAGE.ON,
    });
  };

  return (
    <div className="my-5 text-center">
      <h2 className="text-4xl mb-4">Led control section</h2>
      <p className="mb-5">
        Control state of Pico&apos;s LED. This functionality toggles state of
        Pico&apos;s built-in LED.
      </p>

      <div className={ledIsOn ? "text-yellow-300" : "text-cyan-200"}>
        <FontAwesomeIcon icon={ledIsOn ? faSun : faMoon} size="4x" />
      </div>

      <Button
        aria-label="Led state button"
        onClick={handleClick}
        color="primary"
        className={`bg-gradient-to-br font-semibold ${getGradient(
          "sublime"
        )} text-white mt-5`}
      >
        {`Swith ${ledIsOn ? "off" : "on"}`}
      </Button>
    </div>
  );
};

export default LedControlsection;
