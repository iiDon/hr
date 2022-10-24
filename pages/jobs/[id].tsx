import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Dropdown from "../../components/New-Job/Dropdown";
import useJobs, { IJob } from "../../sotre/useJobs";

const SingleJob = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const job = useJobs((state) =>
    state.jobs.find((job) => job.id === Number(id))
  );

  if (!job) {
    return <div>Job Not Found</div>;
  }

  const updateJob = useJobs((state) => state.updateJob);

  const formik = useFormik({
    initialValues: {
      id: job.id,
      title: job?.title,
      salary: job?.salary,
      status: job?.status,
      endDate: job?.endDate,
      type: job?.type,
      description: job?.description,
    },
    onSubmit: (values: IJob) => {
      console.log(values);
      //   updateJob(values).then((res: any) => {
      //     toast({
      //       title: res.statusText || "Error",
      //       status: `${res.ok ? "success" : "error"}`,
      //       duration: 6000,
      //       isClosable: false,
      //     });
      //     router.push("/jobs");
      //   });
    },
  });

  return (
    <>
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
        {/* <FormControl isRequired>
          <Dropdown setJobState={setJobState} />
        </FormControl> */}

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
    </>
  );
};

export default SingleJob;
