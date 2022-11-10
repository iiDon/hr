import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Input,
  Spinner,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import usecandidates from "../../sotre/useCandidates";
import Actions from "./Actions";
import Pagination from "../Jobs/Pagination";
const CandidatesTable = () => {
  const candidates = usecandidates((state) => state.candidates);
  const fetchcandidates = usecandidates((state) => state.fetchcandidates);
  const isFetched = usecandidates((state) => state.isFetched);
  candidates && console.log(candidates);

  const [currentPage, setCurrentPage] = useState(1);
  const candidatesPerPage = 10;
  const lastPostIndex = currentPage * candidatesPerPage;
  const firstPostIndex = lastPostIndex - candidatesPerPage;
  const currentcandidates = candidates?.slice(firstPostIndex, lastPostIndex);
  const header = ["Name", "Education", "Email", "Phone", "Actions"];
  const [filterd, setFilterd] = useState("");

  useEffect(() => {
    if (!isFetched) {
      fetchcandidates();
    }
  }, []);
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

  return (
    <>
      <Flex justifyContent="space-between">
        <Input
          w={"40%"}
          mb={2}
          borderColor="blue.900"
          outline="2px"
          onChange={(e) => {
            setFilterd(e.target.value);
          }}
          placeholder="Search..."
          size="md"
          type="text"
        />
      </Flex>
      <Table size="lg">
        <Thead>
          <Tr bgColor="gray.100">
            {header.map((item) => {
              return handleHeader(item);
            })}
          </Tr>
        </Thead>
        <Tbody>
          {currentcandidates
            ?.filter((candidate) =>
              candidate.fullName?.toLowerCase().includes(filterd.toLowerCase())
            )
            .map((candidate) => (
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
          <Pagination
            totalJobs={candidates?.length}
            jobsPerPage={candidatesPerPage}
            setCurrentPage={setCurrentPage}
          />
      </Table>
    </>
  );
};

export default CandidatesTable;
