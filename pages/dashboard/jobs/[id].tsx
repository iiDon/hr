import {
  Flex,
  Input,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import Actions from "../../../components/Candidates/Actions";
import Pagination from "../../../components/Jobs/Pagination";
import useCandidates from "../../../sotre/useCandidates";
import userJobs from "../../../sotre/useJobs";

const ViewJob = () => {
  const router = useRouter();
  const { id } = router.query;

  // const jobs = userJobs((state) => state.jobs);
  // const job = jobs.find((job) => job.id === parseInt(id as string));
  const fetchcandidates = useCandidates((state) => state.fetchcandidates);
  const isFetched = useCandidates((state) => state.isFetched);
  const candidates = useCandidates((state) => state.candidates);
  const [filtered, setFiltered] = React.useState(candidates);
  const header = ["Name", "Education", "Email", "Phone", "Actions"];

  // get candidates for this job

  React.useEffect(() => {
    if (!isFetched) {
      fetchcandidates();
      setFiltered(
        candidates.filter((candidate) =>
          candidate.job.find((job) => job.id === parseInt(id as string))
        )
      );
    }

    setFiltered(
      candidates.filter((candidate) =>
        candidate.job.find((job) => job.id === parseInt(id as string))
      )
    );
  }, []);

  // // Header of the table
  const handleHeader = (item: string): JSX.Element => {
    return (
      <Th
        w={"auto"}
        roundedTopRight={item === "Actions" ? "lg" : ""}
        roundedTopLeft={item === "Name" ? "lg" : ""}
        key={item}
        border="1px"
        bgColor="blue.900"
        textColor="white"
        textAlign={item !== "Name" ? "center" : "left"}
      >
        {item}
      </Th>
    );
  };

  if (!isFetched) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.700"
        size="xl"
      />
    );
  }

  filtered && console.log(filtered);

  if (!id) {
    return <div>Sorry No Job</div>;
  }

  return (
    <TableContainer py="5rem" px="2rem">
      <Flex justifyContent="space-between"></Flex>
      <Table size="lg">
        <Thead>
          <Tr bgColor="gray.100">
            {header.map((item) => {
              return handleHeader(item);
            })}
          </Tr>
        </Thead>
        <Tbody>
          {filtered?.map((candidate) => (
            <Tr key={candidate.id} textColor="blue.900">
              <Td border="1px">{candidate.fullName}</Td>
              <Td textAlign="center" border="1px">
                {candidate.education[0].major}
              </Td>
              <Td textAlign="center" border="1px">
                {candidate.email}
              </Td>
              <Td textAlign="center" border="1px">
                {candidate.phone}
              </Td>
              <Td textAlign="center" border="1px">
                <Actions candidateId={candidate.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ViewJob;
