import { Button, Flex } from "@chakra-ui/react";

interface IPagination {
  totalJobs: number;
  jobsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}


const Pagination = ({
  totalJobs,
  jobsPerPage,
  setCurrentPage,
}: IPagination) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pages.push(i);
  }

  return (
    <Flex justifyContent="center">
      {pages.map((page) => {
        return (
          <Button
            m={3}
            bgColor="blue.900"
            textColor="white"
            p={2}
            textAlign="center"
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page}
          </Button>
        );
      })}
    </Flex>
  );
};

export default Pagination;
