import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Flex,
  Input,
  Box,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useJobs, { IJob } from "../../sotre/useJobs";
import Actions from "./Actions";
import Pagination from "./Pagination";
const Jobstable = () => {
  const jobs = useJobs((state) => state.jobs);
  const fetchJobs = useJobs((state) => state.fetchJobs);
  const isFetched = useJobs((state) => state.isFetched);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  const lastPostIndex = currentPage * jobsPerPage;
  const firstPostIndex = lastPostIndex - jobsPerPage;
  const currentJobs = jobs?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    console.log(jobs);
    console.log(isFetched);

    if (!isFetched) {
      fetchJobs();
    }
  }, []);

  const header = ["Title", "Condidates", "Status", "Close At", "Actions"];
  const [filterd, setFilterd] = useState("");

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
        roundedTopLeft={item === "Title" ? "lg" : ""}
        key={item}
        border="1px"
        bgColor="blue.900"
        textColor="white"
        textAlign={item !== "Title" ? "center" : "left"}
      >
        {item}
      </Th>
    );
  };

  return (
    <>
      <Flex justifyContent="space-between">
        <Input
          w={"40%"}
          borderColor="blue.900"
          outline="px"
          onChange={(e) => {
            setFilterd(e.target.value);
          }}
          placeholder="Search..."
          size="md"
          type="text"
        />
        <Link href="/admin/jobs/new-job">
          <Button
            mb="2rem"
            bgColor="blue.900"
            textColor="white"
            _hover={{ bgColor: "blue.700" }}
          >
            Post a new job
          </Button>
        </Link>
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
          {currentJobs
            ?.filter((job) =>
              job.title?.toLowerCase().includes(filterd.toLowerCase())
            )
            .map((job: IJob) => {
              return (
                <Tr key={job.id} textColor="blue.900">
                  <Td border="1px">{job.title}</Td>
                  <Td textAlign="center" border="1px">
                    {job.condidate?.length}
                  </Td>
                  <Td textAlign="center" border="1px">
                    <Box
                      as="span"
                      textColor="white"
                      bgColor={
                        job.status === "draft"
                          ? "gray.500"
                          : job.status === "open"
                          ? "green.500"
                          : "red.500"
                      }
                      p={2}
                      rounded={5}
                    >
                      {job.status}
                    </Box>
                  </Td>
                  <Td textAlign="center" border="1px">
                    {job.endDate?.substring(0, 10)}
                  </Td>
                  <Td textAlign="center" border="1px">
                    <Actions jobId={job.id!} />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
      <Pagination
        totalJobs={jobs?.length}
        jobsPerPage={jobsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Jobstable;
