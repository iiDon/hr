import { Flex, Button } from "@chakra-ui/react";
import router from "next/router";
import { ReactElement } from "react";

const Error = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
        <Button
          bg="blue.900"
          textColor="white"
          onClick={() => router.push("/")}
        >
          Go Back
        </Button>
      </Flex>
    </>
  );
};

Error.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default Error;
