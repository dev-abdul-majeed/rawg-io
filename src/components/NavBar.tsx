import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
export const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Nav Bar</Text>
      <ColorModeButton />
    </HStack>
  );
};
