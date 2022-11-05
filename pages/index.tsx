import { Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactElement, useEffect } from "react";
import useJobs from "../sotre/useJobs";

const Home = () => {
  const { OpenedJobs, fetchOpenedJobs, isFetchedOpenedJobs } = useJobs(
    (state) => state
  );

  useEffect(() => {
    if (!isFetchedOpenedJobs) {
      fetchOpenedJobs();
    }
  }, []);

  return (
    <Flex m="auto" w="95%" justifyContent="center" alignItems="center">
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        w="100%"
        gap={6}
        p={4}
      >
        {OpenedJobs?.map((job) => (
          <GridItem
            key={job.id}
            w="100%"
            bg="gray.50"
            rounded="md"
            _hover={{ shadow: "md", transition: "all 0.2s ease-in-out" }}
            p={3}
          >
            <Flex justifyContent="space-between" pb={4}>
              <Text as="b">{job.title}</Text>

              {job.type && (
                <Text bg="gray.200" p={1} rounded="md">
                  {job.type}
                </Text>
              )}
            </Flex>
            <Text>{job.description?.substring(0, 50) + "..."}</Text>
            <Text py={4} borderBottom={"1px"}>
              End Date: {job.endDate}
            </Text>
            <Link href={`jobs/${job.id}`}>
              <Button mt={2} bg="blue.900" textColor="white" w="100%">
                More
              </Button>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};
export default Home;
