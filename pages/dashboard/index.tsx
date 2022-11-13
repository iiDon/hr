import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import AllChart from "../../components/Home/AllChartCandidate";
import AllChartJobs from "../../components/Home/AllChartJobs";
import CandidatesChart from "../../components/Home/CandidatesChart";
import JobsChart from "../../components/Home/JobsChart";
import useCandidates from "../../sotre/useCandidates";
import useJobs from "../../sotre/useJobs";

const Home: NextPage = () => {
  const { isFetched: jobsFeched, fetchJobs } = useJobs((state) => state);
  const { isFetched: candidateFetched, fetchcandidates } = useCandidates(
    (state) => state
  );

  React.useEffect(() => {
    if (!jobsFeched) {
      fetchJobs();
    }
    if (!candidateFetched) {
      fetchcandidates();
    }
  }, []);


  return (
    <Grid
      p={4}
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2 , 1fr)"
      gap={5}
      w="100%"
      h="100%"
    >
      <GridItem bg="white" p={2} rounded={"md"}>
        <CandidatesChart />
      </GridItem>
      <GridItem bg="white" p={2} rounded={"md"}>
        <JobsChart />
      </GridItem>
      <GridItem bg="white" p={2} rounded={"md"}>
        <AllChart />
      </GridItem>
      <GridItem bg="white" p={2} rounded={"md"}>
        <AllChartJobs />
      </GridItem>
    </Grid>
  );
};

export default Home;
