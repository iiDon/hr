import { Button, Flex, Input, TableContainer } from "@chakra-ui/react";
import React, { useState } from "react";
import Jobstable from "../components/Jobs/Jobstable";

const Jobs = () => {
  const [filter, setFilter] = useState("");
  return (
    <TableContainer py="5rem" px="2rem">
      <Jobstable />
    </TableContainer>
  );
};

export default Jobs;
