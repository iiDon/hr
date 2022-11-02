import { Flex, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useJobs from "../../../sotre/useJobs";

const Job = () => {
  const router = useRouter();
  const { id } = router.query;
  //   get job by id
  const OpenedJobs = useJobs((state) => state.OpenedJobs);
  const job = OpenedJobs.find((job) => job.id === parseInt(id as string));

  if (!job) {
    return (
      <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
        <Button
          bg="blue.900"
          textColor="white"
          onClick={() => router.push("/")}
        >
          Go Back
        </Button>
      </Flex>
    );
  }

  return (
    <>
      <Flex
        m="auto"
        w="95%"
        justifyContent="center"
        alignItems="center"
        bg="gray.50"
        rounded="md"
        _hover={{ shadow: "md", transition: "all 0.2s ease-in-out" }}
        p={3}
      >
        <VStack>
          <Flex justifyContent="space-between" pb={4}>
            <Text as="b">{job.title}</Text>
            <Text>{job.type}</Text>
          </Flex>
          <Text>{job.description}</Text>
          <Text py={4} borderBottom={"1px"}>
            End Date: {job.endDate}
          </Text>
          <Link href={`${job.id}/apply`}>
            <Button mt={2} bg="blue.900" textColor="white" w="100%">
              Apply
            </Button>
          </Link>
        </VStack>
      </Flex>
    </>
  );
};

Job.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default Job;
