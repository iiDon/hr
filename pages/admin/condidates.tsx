import { TableContainer } from "@chakra-ui/react";
import React from "react";
import CondidatesTable from "../../components/Condidates/Condidatstable";

const condidates = () => {
  return (
    <TableContainer py="5rem" px="2rem">
      <CondidatesTable />
    </TableContainer>
  );
};

export default condidates;
