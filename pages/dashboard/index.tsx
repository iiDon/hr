import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import AllChart from "../../components/Home/AllChart";
import CandidatesChart from "../../components/Home/CandidatesChart";
import JobsChart from "../../components/Home/JobsChart";

const Home: NextPage = () => {
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
        <CandidatesChart />
      </GridItem>
    </Grid>
  );
};

export default Home;
