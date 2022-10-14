import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const NewJob = () => {
  return (
    <VStack py="5rem" px="2rem" border="2px">
      <FormControl>
        <FormLabel>
          <Box as="span" textColor="red">
            *
          </Box>
          Job Name:
        </FormLabel>
        <Input type="text" />
        <FormLabel>
          <Box as="span" textColor="red">
            *
          </Box>
          Job Descreiption:
        </FormLabel>
        <Textarea />
        <Flex>
          <Box w="50%">
            <FormLabel>Salary:</FormLabel>
            <Input type="number" />
          </Box>
          <Box w="50%">
            <FormLabel>Salary:</FormLabel>
            <Input type="number" />
          </Box>
        </Flex>

        <Button>Submit</Button>
      </FormControl>
    </VStack>
  );
};

export default NewJob;
