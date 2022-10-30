import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Flex,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IJob } from "../../../../hr/sotre/useJobs";
import useJobs from "../../../../sotre/useJobs";

const SingleJob = () => {
  const router = useRouter();
  const { id } = router.query;

  const updateJob = useJobs((state) => state.updateJob);

  const fetchJobs = useJobs((state) => state.fetchJobs);

  const toast = useToast();

  const job = useJobs((state) =>
    state.jobs.find((job) => job.id === Number(id))
  );






  const formik = useFormik({
    initialValues: {
      id: job!.id,
      title: job!.title,
      salary: job!.salary,
      status: job!.status,
      endDate: job!.endDate,
      type: job!.type,
      description: job!.description,
    },
    onSubmit: (values) => {
      console.log(values);






      updateJob(values).then(async (res: { statusText: any; ok: boolean }) => {
        toast({
          title: (await res?.statusText) || "Error",
          status: `${res.ok ? "success" : "error"}`,
          duration: 6000,
          isClosable: false,
        });
        fetchJobs();
        router.push("/admin/jobs");
      });









    },
  });





  return (
    <>
      <VStack py="5rem" px="2rem" w="100%">
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel htmlFor="title">Job Title:</FormLabel>
            <Input
              name="title"
              id="title"
              type="text"
              border="1px"
              borderColor="black"
              onChange={formik.handleChange}
              value={formik.values?.title}
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
              value={formik.values?.description}
            />
            <FormErrorMessage>Please Enter Description</FormErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="endDate">End Date:</FormLabel>
            <Input
              type="date"
              name="endDate"
              id="endDate"
              value={formik.values?.endDate}
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
          <Button
            type="submit"
            bgColor="blue.900"
            textColor="white"
            w="100%"
            isLoading={formik.isSubmitting}
            mt="1rem"
          >
            Submit
          </Button>
        </form>
        {/* <FormControl isRequired>
          <Dropdown setJobState={setJobState} />
        </FormControl> */}
      </VStack>
    </>
  );
};

export default SingleJob;
