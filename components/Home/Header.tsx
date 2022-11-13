import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Flex w="100%" h={40} bg="blue.900">
      <Link href="/">
        <Text
          cursor="pointer"
          as="b"
          m="auto"
          color="white"
          textAlign="center"
          textColor="white"
          fontSize="2xl"
        >
          The official SRU Website for jobs apply
        </Text>
      </Link>
    </Flex>
  );
};

export default Header;
