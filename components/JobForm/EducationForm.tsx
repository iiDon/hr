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
import { IEducation } from "../../sotre/useCandidates";

interface Props {
  education: IEducation[];
  setEducation: React.Dispatch<React.SetStateAction<IEducation[]>>;
}

const EducationForm = ({ education, setEducation }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      major: "",
      degree: "",
      university: "",
      startDate: "",
      endDate: "",
      gpa: "",
      gpa_of: "",
    },
    onSubmit: (values: IEducation) => {
      setEducation([...education, values]);
      values = {
        major: "",
        degree: "",
        university: "",
        startDate: "",
        endDate: "",
        gpa: "",
        gpa_of: "",
      };
      onClose();
    },
  });

  return (
    <>
      <Button
        mt={4}
        bgColor="blue.900"
        textColor="white"
        w="100%"
        onClick={onOpen}
      >
        Add Education
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Education</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Degree</FormLabel>
                <Input
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder="Degree"
                  value={formik.values.degree}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>Major</FormLabel>
                <Input
                  type="text"
                  name="major"
                  id="major"
                  placeholder="Major"
                  value={formik.values.major}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>University</FormLabel>
                <Input
                  type="text"
                  id="university"
                  name="university"
                  placeholder="University"
                  value={formik.values.university}
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
                <FormLabel>GPA</FormLabel>
                <Input
                  type="text"
                  name="gpa"
                  id="gpa"
                  placeholder="GPA"
                  value={formik.values.gpa}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>GPA Of</FormLabel>
                <Input
                  type="text"
                  name="gpa_of"
                  id="gpa_of"
                  placeholder="GPA Of"
                  value={formik.values.gpa_of}
                  onChange={formik.handleChange}
                  required
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

      {education.map((edu, index) => (
        <VStack key={index} w="100%" mt={3}>
          <Input type="text" value={edu.degree} isDisabled />
          <Input type="text" value={edu.major} isDisabled />
          <Input type="text" value={edu.university} isDisabled />
          <Input type="text" value={edu.startDate} isDisabled />
          <Input type="text" value={edu.endDate} isDisabled />
          <Input type="text" value={`${edu.gpa}/${edu.gpa_of}`} isDisabled />

          <Button
            onClick={() => {
              const newEducation = education.filter((edu, i) => i !== index);
              setEducation(newEducation);
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

export default EducationForm;
