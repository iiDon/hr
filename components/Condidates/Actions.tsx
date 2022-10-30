import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillEye } from "react-icons/ai";
type Props = {
  condidateId: number | undefined;
};

const Actions = ({ condidateId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  if (!condidateId) {
    return <></>;
  }

  const viewCondidate = () => {
    console.log("view", condidateId);
  };

  return (
    <Flex>
      <Button
        onClick={viewCondidate}
        mx="0.1rem"
        bgColor="blue.900"
        textColor="white"
      >
        <AiFillEye />
      </Button>
    </Flex>
  );
};

export default Actions;
