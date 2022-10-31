import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
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

  return (
    <Flex>
      <Link href={`/admin/condidates/${condidateId}`}>
        <Button mx="0.1rem" bgColor="blue.900" textColor="white">
          <AiFillEye />
        </Button>
      </Link>
    </Flex>
  );
};

export default Actions;
