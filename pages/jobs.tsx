import { TableContainer } from "@chakra-ui/react";
import Jobstable from "../components/Jobs/Jobstable";

const Jobs = () => {
  return (
    <TableContainer py="5rem" px="2rem">
      <Jobstable />
    </TableContainer>
  );
};

export default Jobs;
