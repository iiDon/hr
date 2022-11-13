import { Flex, Button, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import Header from "../../../components/Home/Header";
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
      <Header />
      <Flex
        m="auto"
        w="95%"
        justifyContent="center"
        alignItems="center"
        bg="gray.50"
        rounded="md"
        p={3}
      >
        <VStack w="100%">
          <Flex justifyContent="space-between" pb={4} w="100%">
            <Text as="b">{job.title}</Text>
            {job.type && (
              <Text bg="gray.200" p={1} rounded="md">
                {job.type}
              </Text>
            )}
          </Flex>
          <VStack w="100%" bgColor="white" p={4} border={12}>
            {job.description!.split("\n").map(function (item, index) {
              return (
                <Text textAlign="left" w="100%" key={index}>
                  {item}
                  <br />
                </Text>
              );
            })}
          </VStack>
          <Text
            textAlign="left"
            w="100%"
            bgColor="white"
            p={4}
            border={12}
            py={4}
          >
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
