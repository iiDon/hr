import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { IEducation } from "../../sotre/useCandidates";

interface Props {
  education: IEducation[];
  setEducation: (education: IEducation[]) => void;
}

const EducationAccordion = (Props: Props) => {
  const [educationForm, setEducationForm] = useState<number>(1);

  const NumberofEducation = (): any => {
    const forms = [];
    for (let i = 0; i < educationForm; i++) {
      forms.push(
        <AccordionPanel pb={4} key={i} border="2px" m={2}>
          <form onSubmit={() => console.log("first")}>
            <FormControl>
              <FormLabel>Major:</FormLabel>
              <Input type="text" isRequired />
            </FormControl>

            <FormControl>
              <FormLabel>Degree:</FormLabel>
              <Input type="text" isRequired />
            </FormControl>

            <FormControl>
              <FormLabel>University:</FormLabel>
              <Input type="text" isRequired />
            </FormControl>

            <FormControl>
              <FormLabel>Start Date:</FormLabel>
              <Input type="date" isRequired />
            </FormControl>

            <FormControl>
              <FormLabel>End Date:</FormLabel>
              <Input type="date" isRequired />
            </FormControl>

            <FormControl>
              <FormLabel>GPA:</FormLabel>
              <Input type="text" isRequired />
            </FormControl>

            <FormControl>
              <FormLabel>GPA OF:</FormLabel>
              <Input type="text" isRequired />
            </FormControl>
            {i === educationForm - 1 && (
              <Button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setEducationForm(educationForm + 1);
                }}
              >
                Add
              </Button>
            )}
          </form>
          {i > 0 && (
            <Button onClick={() => setEducationForm(educationForm - 1)}>
              Remove
            </Button>
          )}
        </AccordionPanel>
      );
    }
    return forms;
  };

  return (
    <>
      <AccordionItem>
        <Text>
          <AccordionButton bg="blue.900" textColor="white">
            <Box flex="1" textAlign="left">
              Education
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        {NumberofEducation()}
      </AccordionItem>
    </>
  );
};

export default EducationAccordion;
