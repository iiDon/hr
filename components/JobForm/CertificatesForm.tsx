import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { ICertificate } from "../../sotre/useCandidates";

interface Props {
  certificate: ICertificate[];
  setCertificate: React.Dispatch<React.SetStateAction<ICertificate[]>>;
}

const CertificatesForm = ({ certificate, setCertificate }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      company: "",
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    },
    onSubmit: (values: ICertificate) => {
      setCertificate([...certificate, values]);
      values = {
        company: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      };
      onClose();
    },
  });

  return (
    <>
      <Button
        display="block"
        mt={4}
        bgColor="blue.900"
        textColor="white"
        onClick={onOpen}
        w="100%"
      >
        Add Certificate
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Certificate</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Job Title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>Company</FormLabel>
                <Input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company"
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="date"
                  name="startDate"
                  id="startDate"
                  placeholder="Start Date"
                  value={formik.values.startDate}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>End Date</FormLabel>
                <Input
                  type="date"
                  name="endDate"
                  id="endDate"
                  placeholder="End Date"
                  value={formik.values.endDate}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      {certificate.map((cer, index) => (
        <VStack key={index} w="100%" mt={3}>
          <Input type="text" value={cer.company} isDisabled />
          <Input type="text" value={cer.created} isDisabled />
          <Input type="text" value={cer.startDate} isDisabled />
          <Input type="text" value={cer.endDate} isDisabled />
          <Input type="text" value={cer.description} isDisabled />

          <Button
            onClick={() => {
              const newCertificate = certificate.filter(
                (cer, i) => i !== index
              );
              setCertificate(newCertificate);
            }}
            bgColor="red.600"
            textColor="white"
            mt={2}
            w="100%"
          >
            Remove
          </Button>
        </VStack>
      ))}
    </>
  );
};

export default CertificatesForm;
