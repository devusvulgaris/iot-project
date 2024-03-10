import NextImage from "next/image";
import { Image } from "@nextui-org/react";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between max-w-screen-md mx-auto px-3 md:px-4">
      <section className="text-center">
        <h2 className="text-4xl mb-4">About the project</h2>
        <p className="mb-4">
          Using Smart Mini Garden is a great way to make sure plant grows in
          optimal conditions.
        </p>
        <div className="relative width-full mb-5">
          <Image
            as={NextImage}
            width={500}
            height={400}
            src="/smart-mini-garden.jpg"
            alt="About smart mini garden"
          />
        </div>
      </section>
    </main>
  );
}
