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
<VStack py="5rem" px="2rem" w='100%'>
      <FormControl>
        <FormLabel>
          <Box as="span" textColor="red">
            *
          </Box>
          Job Name:
        </FormLabel>
        <Input type="text" border='1px'  borderColor='black' />
        <FormLabel>
          <Box as="span" textColor="red">
            *
          </Box>
          Job Descreiption:
        </FormLabel>
        <Textarea border='1px'  borderColor='black'/>
        <Flex>
          <Box  w="50%" pr={2}>
            <FormLabel>Type:</FormLabel>
            <Input  type="number" border='1px'  borderColor='black'/>
          </Box>
          <Box w="50%" pl={2}>
            <FormLabel>Salary:</FormLabel>
            <Input type="number" border='1px'  borderColor='black'/>
          </Box>
          <Box w="50%" pl={2}>
            <FormLabel>Status:</FormLabel>
            <Input type="number" border='1px'  borderColor='black'/>
          </Box>
        </Flex>

        <Button bgColor='blue.900' textColor='white' w='100%' mt='1rem'>Submit</Button>
      </FormControl>
    </VStack>
  );
};

export default NewJob;
