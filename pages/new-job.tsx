import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import Dropdown from "../components/New-Job/Dropdown";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";

const NewJob = () => {
  const router = useRouter();
  const [jobState, setJobState] = useState("Public");
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      startDate: new Date().toISOString().split("T")[0],
      endDate: new Date().toISOString().split("T")[0],
      salary: "",
      type: "",
      state: jobState,
    },
    onSubmit: (values) => {
      values.state = jobState;
      router.push("/jobs");
      toast({
        title: "Job Added",
        status: "success",
        duration: 6000,
        isClosable: false,
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack py="5rem" px="2rem" w="100%">
        <FormControl isRequired>
          <FormLabel htmlFor="title">Job Title:</FormLabel>
          <Input
            name="title"
            id="title"
            type="text"
            border="1px"
            borderColor="black"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <FormErrorMessage>Please Enter Title</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="description">Job Description:</FormLabel>
          <Textarea
            border="1px"
            borderColor="black"
            onChange={formik.handleChange}
            // value={formik.values.description}
          />
          <FormErrorMessage>Please Enter Description</FormErrorMessage>
        </FormControl>
        <Flex w="100%">
          <FormControl pr="1rem" isRequired>
            <FormLabel htmlFor="startDate">Start Date:</FormLabel>
            <Input
              min={new Date().toISOString().split("T")[0]}
              // disabled={checkDate(formik.values.endDate)}
              name="startDate"
              id="startDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.startDate}
              border="1px"
              borderColor="black"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="endDate">End Date:</FormLabel>
            <Input
              min={new Date().toISOString().split("T")[0]}
              type="date"
              name="endDate"
              id="endDate"
              onChange={formik.handleChange}
              value={formik.values.endDate}
              border="1px"
              borderColor="black"
            />
          </FormControl>
        </Flex>
        <Flex w="100%">
          <FormControl pr="1rem">
            <FormLabel>Type:</FormLabel>
            <Input type="number" border="1px" borderColor="black" />
          </FormControl>
          <FormControl>
            <FormLabel>Salary:</FormLabel>
            <Input
              type="number"
              border="1px"
              borderColor="black"
              id="salary"
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
            />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <Dropdown setJobState={setJobState} />
        </FormControl>

        <Button
          type="submit"
          bgColor="blue.900"
          textColor="white"
          w="100%"
          mt="1rem"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default NewJob;
