import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import OnDeleteModal from "./OnDeleteModal";
type Props = {
  jobId: number;
};

const Actions = ({ jobId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteJob = () => {
    onOpen();
    console.log("delete", jobId);
  };

  const editJob = () => {
    console.log("edit", jobId);
  };

  const viewJob = () => {
    console.log("view", jobId);
  };

  return (
    <Flex>
      <OnDeleteModal jobId={jobId} isOpen={isOpen} onClose={onClose} />
      <Button
        onClick={viewJob}
        mx="0.1rem"
        bgColor="blue.900"
        textColor="white"
      >
        <AiFillEye />
      </Button>
      <Button
        onClick={editJob}
        mx="0.1rem"
        bgColor="blue.900"
        textColor="white"
      >
        <AiFillEdit />
      </Button>
      <Button
        onClick={deleteJob}
        mx="0.1rem"
        bgColor="red.200"
        textColor="red.800"
      >
        <AiFillDelete />
      </Button>
    </Flex>
  );
};

export default Actions;
