import { Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import useJobs from "../../../sotre/useJobs";

const Apply = () => {
  const router = useRouter();
  const { id } = router.query;
  //   get job by id
  const OpenedJobs = useJobs((state) => state.OpenedJobs);
  const job = OpenedJobs.find((job) => job.id === parseInt(id as string));

  if (!job) {
    return (
      <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
        <Button
          bg="blue.900"
          textColor="white"
          onClick={() => router.push("/")}
        >
          Go Back
        </Button>
      </Flex>
    );
  }
  return <div>{job.id}</div>;
};

Apply.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default Apply;
