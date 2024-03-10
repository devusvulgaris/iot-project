import type { Metadata } from "next";
import Providers from "@/components/providers";
import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faPhone,
  faEnvelope,
  faMapMarker,
  faLocation,
  faLocationArrow,
  faShieldHalved,
  faHeartbeat,
  faDiamond,
  faMagicWandSparkles,
  faHandshake,
  faUsers,
  faBrain,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faDiamond, faGem);

export const metadata: Metadata = {
  title: "Smart Mini Garden | IoT Pirates",
  description: "Metropolia IoT project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
