import { TableContainer } from "@chakra-ui/react";
import React from "react";
import CandidatesTable from "../../../components/Candidates/Candidatstable";

const Candidates = () => {
  return (
    <TableContainer py="5rem" px="2rem">
      <CandidatesTable />
    </TableContainer>
  );
};

export default Candidates;
