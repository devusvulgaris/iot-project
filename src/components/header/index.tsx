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
import { getChipColor } from "@/utils";

type Props = {};

const Header = (props: Props) => {
  const connectionStatus = useStore((store) => store.connectionStatus);
  const { connect, disconnect } = useMqttClient();

  return (
    <Navbar>
      <NavbarBrand>
        <NextLink href="/">Smart Mini Garden</NextLink>
      </NavbarBrand>
      <NavbarContent justify="center">
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
          <Button onClick={connect} className="bg-fuchsia-500">
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
