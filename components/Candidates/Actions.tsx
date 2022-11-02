import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillEye } from "react-icons/ai";

type Props = {
  candidateId: number | undefined;
};

const Actions = ({ candidateId }: Props) => {
  if (!candidateId) {
    return <></>;
  }

  return (
    <Flex>
      <Link href={`/dashboard/candidates/${candidateId}`}>
        <Button mx="0.1rem" bgColor="blue.900" textColor="white">
          <AiFillEye />
        </Button>
      </Link>
    </Flex>
  );
};

export default Actions;
