import { Grid, GridItem } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Grid
      p={4}
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(2 , 1fr)"
      gap={700}
    >
      <GridItem>2 </GridItem>
      <GridItem>3 </GridItem>
      <GridItem>4 </GridItem>
      <GridItem>5 </GridItem>
    </Grid>
  );
};

export default Home;
