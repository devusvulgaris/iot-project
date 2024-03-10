import { CONNECTION_STATUS } from "./constants";

export const getGradient = (variant: string) => {
  switch (variant) {
    case "powder":
      return "from-violet-200 to-pink-200";
    case "holly":
      return "from-blue-200 to-cyan-200";
    case "nemesia":
      return "bfrom-emerald-200 to-cyan-400";
    case "snowflake":
      return "from-fuchsia-500 to-cyan-500";
    case "candy":
      return "from-fuchsia-500 to-pink-500";
    case "hibiscus":
      return "from-purple-500 to-purple-900";
    case "hyper":
      return "from-pink-500 via-red-500 to-yellow-500";
    case "sublime":
      return "from-rose-400 via-fuchsia-500 to-indigo-500";
    default:
      return "from-amber-200 to-yellow-500";
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
