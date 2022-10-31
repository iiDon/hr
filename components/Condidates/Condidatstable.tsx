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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useCondidates from "../../sotre/useCondidates";
import Actions from "../Condidates/Actions";
import Pagination from "../Jobs/Pagination";
const CondidatesTable = () => {
  const condidates = useCondidates((state) => state.condidates);
  const fetchCondidates = useCondidates((state) => state.fetchCondidates);
  const isFetched = useCondidates((state) => state.isFetched);
  condidates && console.log(condidates);

  const [currentPage, setCurrentPage] = useState(1);
  const CondidatesPerPage = 10;
  const lastPostIndex = currentPage * CondidatesPerPage;
  const firstPostIndex = lastPostIndex - CondidatesPerPage;
  const currentCondidates = condidates?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    if (!isFetched) {
      fetchCondidates();
    }
  }, []);

  const header = ["Name", "Education", "Email", "Phone", "Actions"];
  const [filterd, setFilterd] = useState("");

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
          mb={2}
          borderColor="blue.900"
          outline="px"
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
          {currentCondidates
            ?.filter((condidate) =>
              condidate.fullName?.toLowerCase().includes(filterd.toLowerCase())
            )
            .map((condidate) => (
              <Tr key={condidate.id} textColor="blue.900">
                <Td border="1px">{condidate.fullName}</Td>
                <Td textAlign="center" border="1px">
                  {condidate.education[0].major}
                </Td>
                <Td textAlign="center" border="1px">
                  {condidate.email}
                </Td>
                <Td textAlign="center" border="1px">
                  {condidate.phone}
                </Td>
                <Td textAlign="center" border="1px">
                  <Actions condidateId={condidate.id} />
                </Td>
              </Tr>
            ))}
        </Tbody>
        <Pagination
          totalJobs={condidates?.length}
          jobsPerPage={CondidatesPerPage}
          setCurrentPage={setCurrentPage}
        />
      </Table>
    </>
  );
};

export default CondidatesTable;
