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
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import useJobs, { IJob } from "../../sotre/useJobs";
import Actions from "./Actions";
const Jobstable = () => {
  const { jobs, fetchJobs } = useJobs((state) => state);

  useEffect(() => {
    if (jobs.length === 0) {
      fetchJobs();
    }
  }, []);

  const header = ["Title", "Condidates", "Date", "Created At", "Actions"];
  const [filterd, setFilterd] = useState("");
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

  // console.log(jobs[0]?.condidate[0]);

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
        <Link href="/new-job">
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
          {jobs
            ?.filter((job) =>
              job.title?.toLowerCase().includes(filterd.toLowerCase())
            )
            .map((job: IJob) => {
              return (
                <Tr key={job.id} textColor="blue.900">
                  <Td border="1px">{job.title}</Td>
                  <Td textAlign="center" border="1px">
                    {job.condidate}
                  </Td>
                  <Td textAlign="center" border="1px">
                    {job.status}
                  </Td>
                  <Td textAlign="center" border="1px">
                    {job.created?.substring(0, 10)}
                  </Td>
                  <Td textAlign="center" border="1px">
                    <Actions jobId={job.id} />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </>
  );
};

export default Jobstable;
