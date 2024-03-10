"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
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

const Header = () => {
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
          <span className="hidden sm:flex">Smart Mini Garden</span>
        </NextLink>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex">
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
        <div className="hidden md:flex">
          {connectionStatus === CONNECTION_STATUS.DISCONNECTED ? (
            <Button
              onClick={connect}
              className={`bg-gradient-to-br text-white font-semibold ${getGradient(
                "sublime"
              )}`}
            >
              Connect
            </Button>
          ) : (
            <Button onClick={disconnect} color="danger" variant="flat">
              Disconnect
            </Button>
          )}
        </div>
      </NavbarContent>
      <NavbarMenuToggle className="sm:hidden" />
      <NavbarMenu>
        <p className="font-semibold text-center text-2xl">Smart Mini Garden</p>
        <NavbarMenuItem>
          <Link as={NextLink} href="/" color="foreground">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarItem>
          <Link as={NextLink} href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        {connectionStatus === CONNECTION_STATUS.DISCONNECTED ? (
          <Button
            onClick={connect}
            className={`bg-gradient-to-br text-white font-semibold ${getGradient(
              "sublime"
            )}`}
          >
            Connect
          </Button>
        ) : (
          <Button onClick={disconnect} color="danger" variant="flat">
            Disconnect
          </Button>
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
