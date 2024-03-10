import SensorData from "@/components/sensorData";
import LedControl from "@/components/ledControl";
import ConnectionGuard from "@/components/connectionGuard";

export default function Home() {
  return (
    <main className="container mx-auto px-3 md:px-4 max-w-screen-md">
      <ConnectionGuard>
        <SensorData />
        <LedControl />
      </ConnectionGuard>
    </main>
  );
}
