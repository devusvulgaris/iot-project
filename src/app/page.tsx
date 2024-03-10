import Image from "next/image";
import ChartsBlock from "@/components/chartsBlock";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <ChartsBlock />
    </main>
  );
}
