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
import Dropdown from "../../../components/New-Job/Dropdown";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import useJobs, { IJob } from "../../../sotre/useJobs";
const NewJob = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [jobState, setJobState] = useState("draft");
  const addJob = useJobs((state) => state.addJob);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      id: undefined,
      title: "",
      salary: undefined,
      status: jobState,
      endDate: undefined,
      type: undefined,
      description: "",
    },
    onSubmit: async (values: IJob) => {
      setLoading(true);
      values.status = jobState;
      const res = await addJob(values);
      setLoading(false);

      toast({
        title: res.statusText || "Error",
        status: `${res.ok ? "success" : "error"}`,
        duration: 6000,
        isClosable: false,
      });

      if (res.ok) {
        router.push("/dashboard/jobs");
      }
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
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <FormErrorMessage>Please Enter Description</FormErrorMessage>
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="endDate">End Date:</FormLabel>
          <Input
            min={new Date().toISOString().split("T")[0]}
            type="date"
            name="endDate"
            id="endDate"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            border="1px"
            borderColor="black"
          />
        </FormControl>
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
              value={formik.values.salary?.toString()}
            />
          </FormControl>
        </Flex>
        <FormControl isRequired>
          <Dropdown setJobState={setJobState} />
        </FormControl>

        <Button
          isLoading={loading}
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
