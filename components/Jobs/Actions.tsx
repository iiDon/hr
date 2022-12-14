import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import OnDeleteModal from "./OnDeleteModal";
type Props = {
  jobId: number | undefined;
};

const Actions = ({ jobId }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const deleteJob = () => {
    onOpen();
  };

  const editJob = () => {
    router.push(`/dashboard/jobs/edit/${jobId}`);
  };

  const viewJob = () => {
    console.log("view", jobId);
  };

  return (
    <Flex>
      <OnDeleteModal jobId={jobId} isOpen={isOpen} onClose={onClose} />
      <Link href={`/dashboard/jobs/${jobId}`}>
        <Button
          onClick={viewJob}
          mx="0.1rem"
          bgColor="blue.900"
          textColor="white"
        >
          <AiFillEye />
        </Button>
      </Link>
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
