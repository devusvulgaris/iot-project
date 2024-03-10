import { create } from "zustand";
import { CONNECTION_STATUS } from "@/constants";
import { type MqttClient } from "mqtt";

type GardenState = {
  client: MqttClient | null;
  connectionStatus: CONNECTION_STATUS;
  isSubscribed: boolean;
  ledIsOn: boolean;
  temperature: string;
  humidity: string;
  moisture: string;
  setClient: (client: MqttClient) => void;
  setConnectionStatus: (status: CONNECTION_STATUS) => void;
  setIsSubscribed: (isSubscribed: boolean) => void;
  setTemperature: (temperature: string) => void;
  setHumidity: (humidity: string) => void;
  setMoisture: (moisture: string) => void;
  toggleLedState: () => void;
};

const useStore = create<GardenState>((set) => ({
  client: null,
  connectionStatus: CONNECTION_STATUS.DISCONNECTED,
  isSubscribed: false,
  ledIsOn: false,
  temperature: "",
  humidity: "",
  moisture: "",
  setClient: (client) => set({ client }),
  setConnectionStatus: (connectionStatus) => set({ connectionStatus }),
  setIsSubscribed: (isSubscribed) => set({ isSubscribed }),
  setTemperature: (temperature) => set({ temperature }),
  setHumidity: (humidity) => set({ humidity }),
  setMoisture: (moisture) => set({ moisture }),
  toggleLedState: () =>
    set(({ ledIsOn }) => ({
      ledIsOn: !ledIsOn,
    })),
}));

export default useStore;
