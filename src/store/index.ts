import { create } from "zustand";
import { CONNECTION_STATUS } from "@/constants";

const useStore = create((set) => ({
  connectionStatus: CONNECTION_STATUS.DISCONNECTED,
  temperature: "",
  humidity: "",
  moisture: "",
  setConnectionStatus: (connectionStatus: CONNECTION_STATUS) =>
    set({ connectionStatus }),
  setTemperature: (temperature) => set({ temperature }),
  setHumidity: (humidity) => set({ humidity }),
  setMoisture: (moisture) => set({ moisture }),
}));

export default useStore;
