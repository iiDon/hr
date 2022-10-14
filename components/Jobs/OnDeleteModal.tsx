import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Alert, AlertIcon, Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

type Props = {
  jobId: number;
  isOpen: boolean;
  onClose: () => void;
};

const OnDeleteModal = ({ jobId, isOpen, onClose }: Props) => {
  const toast = useToast();
  const deleteJob = () => {
    console.log("deleted", jobId);
    onClose();
    toast({
      title: "Job Deleted.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="white">
          <ModalHeader textColor="red.700">
            <Alert status="error">
              <AlertIcon />
              Are You sure you want to delete this position? It will be deleted
              forever
            </Alert>
          </ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={deleteJob} bgColor="red.200" color="red.700">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OnDeleteModal;
