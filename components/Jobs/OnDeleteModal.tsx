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
import useJobs from "../../sotre/useJobs";

type Props = {
  jobId: number | undefined;
  isOpen: boolean;
  onClose: () => void;
};

const OnDeleteModal = ({ jobId, isOpen, onClose }: Props) => {
  const deleteJob = useJobs((state) => state.deleteJob);
  const fetchJobs = useJobs((state) => state.fetchJobs);

  const toast = useToast();
  const deleteAJob = () => {
    onClose();
    deleteJob(jobId!).then((res: { statusText: any; ok: boolean }) => {
      toast({
        title: res.statusText || "Error",
        status: `${res.ok ? "success" : "error"}`,
        duration: 3000,
        isClosable: true,
      });
    });

    fetchJobs();
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
            <Button onClick={deleteAJob} bgColor="red.200" color="red.700">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OnDeleteModal;
