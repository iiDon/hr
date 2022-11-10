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
import { IExperince } from "../../sotre/useCandidates";

interface Props {
  experience: IExperince[];
  setExperience: React.Dispatch<React.SetStateAction<IExperince[]>>;
}

const ExperienceForm = ({ experience, setExperience }: Props) => {
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
    onSubmit: (values: IExperince) => {
      setExperience([...experience, values]);
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
        Add Experince
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Experince</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Job Title</FormLabel>
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

      {experience.map((exp, index) => (
        <VStack key={index} w="100%" mt={3}>
          <Input type="text" value={exp.company} isDisabled />
          <Input type="text" value={exp.created} isDisabled />
          <Input type="text" value={exp.startDate} isDisabled />
          <Input type="text" value={exp.endDate} isDisabled />
          <Input type="text" value={exp.description} isDisabled />

          <Button
            onClick={() => {
              const newexperience = experience.filter((exp, i) => i !== index);
              setExperience(newexperience);
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

export default ExperienceForm;
