"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Badge,
  Button,
  Chip,
} from "@nextui-org/react";
import NextLink from "next/link";
import useStore from "@/store";
import useMqttClient from "@/hooks";
import { CONNECTION_STATUS } from "@/constants";
import { getChipColor, getGradient } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Header = (props: Props) => {
  const connectionStatus = useStore((store) => store.connectionStatus);
  const { connect, disconnect } = useMqttClient();

  return (
    <Navbar>
      <NavbarBrand>
        <NextLink href="/" className="flex items-center">
          <FontAwesomeIcon
            icon={faLeaf}
            className="mr-2 text-fuchsia-500"
            size="2x"
          />
          Smart Mini Garden
        </NextLink>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link as={NextLink} href="/" color="foreground">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link as={NextLink} href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Chip variant="dot" color={getChipColor(connectionStatus)}>
          {connectionStatus}
        </Chip>
        {connectionStatus === CONNECTION_STATUS.DISCONNECTED ? (
          <Button
            onClick={connect}
            className="bg-gradient-to-r text-white font-semibold from-rose-400 via-fuchsia-500 to-indigo-500"
          >
            Connect
          </Button>
        ) : (
          <Button onClick={disconnect} color="danger" variant="flat">
            Disconnect
          </Button>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
