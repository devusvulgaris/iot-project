import { CONNECTION_STATUS } from "./constants";

export const getGradient = (variant: string) => {
  switch (variant) {
    case "powder":
      return "bg-gradient-to-br from-violet-200 to-pink-200";
    case "holly":
      return "bg-gradient-to-br from-blue-200 to-cyan-200";
    case "nemesia":
      return "bg-gradient-to-br from-emerald-200 to-cyan-400";
    case "snowflake":
      return "bg-gradient-to-br from-fuchsia-500 to-cyan-500";
    case "candy":
      return "bg-gradient-to-br from-fuchsia-500 to-pink-500";
    case "hibiscus":
      return "bg-gradient-to-br from-purple-500 to-purple-900";
    case "hyper":
      return "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500";
    case "sublime":
      return "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500";
    default:
      return "bg-gradient-to-br from-amber-200 to-yellow-500";
  }
};

export const getChipColor = (status: CONNECTION_STATUS) => {
  switch (status) {
    case CONNECTION_STATUS.DISCONNECTED:
      return "danger";
    case CONNECTION_STATUS.CONNECTING:
    case CONNECTION_STATUS.RECONNECTING:
      return "warning";
    case CONNECTION_STATUS.CONNECTED:
      return "success";
    default:
      return;
  }
};
