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
import { ISkill } from "../../sotre/useCandidates";

interface Props {
  skill: ISkill[];
  setSkill: React.Dispatch<React.SetStateAction<ISkill[]>>;
}

const SkillsForm = ({ skill, setSkill }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      level: "",
    },
    onSubmit: (values: ISkill) => {
      setSkill([...skill, values]);
      values = {
        name: "",
        level: "",
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
        Add Skill
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Skills</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={formik.handleSubmit}>
            <ModalBody pb={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Skill Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  required
                />
                <FormLabel>Level</FormLabel>
                <Input
                  type="text"
                  id="level"
                  name="level"
                  placeholder="Skill Level"
                  value={formik.values.level}
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

      {skill.map((skil, index) => (
        <VStack key={index} w="100%" mt={3}>
          <Input type="text" value={skil.name} isDisabled />
          <Input type="text" value={skil.level} isDisabled />

          <Button
            onClick={() => {
              const newSkill = skill.filter((sk, i) => i !== index);
              setSkill(newSkill);
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

export default SkillsForm;
