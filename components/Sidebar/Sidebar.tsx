import { Image, List, VStack } from "@chakra-ui/react";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  return (
    <VStack w="100%" spacing={14}>
      <Image mt={4} w="13rem" src="/logo.png" alt="Sulaiman ALrajhi Logo" />
      <List w="100%" textAlign="left" fontSize="lg" px={6}>
        <MenuItems />
      </List>
    </VStack>
  );
};

export default Sidebar;
