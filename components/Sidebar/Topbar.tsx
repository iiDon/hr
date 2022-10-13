import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillNotification } from "react-icons/ai";
const Topbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text>Hello Mohammed</Text>
      <Text> HR System Dashboard</Text>
      <Button
        bgColor="blue.900"
        _hover={{ bgColor: "white", textColor: "blue.900" }}
      >
        <AiFillNotification />
      </Button>
    </Flex>
  );
};

export default Topbar;
