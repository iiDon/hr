import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillNotification } from "react-icons/ai";
import useAuth from "../sotre/useAuth";
const Topbar = () => {
  const user = useAuth((state) => state.user);
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text>Hello {user?.email}</Text>
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
