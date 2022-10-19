import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar/Sidebar";
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <Grid
      templateAreas={`"nav header"
                      "nav main"
                    "nav main"`}
      // gridTemplateRows="auto 1fr"
      gridTemplateColumns="280px 1fr"
    >
      <GridItem
        gridArea="header"
        bg="white"
        p={4}
        bgColor="blue.900"
        textColor="white"
      >
        <Topbar />
      </GridItem>
      <GridItem
        borderRight="2px"
        w="100%"
        h="100vh"
        bg="gray.50"
        area={"nav"}
        position="sticky"
        bgColor="blue.900"
      >
        <Sidebar />
      </GridItem>
      <GridItem bg="gray.100" area={"main"} overflow="auto" h="90vh">
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
