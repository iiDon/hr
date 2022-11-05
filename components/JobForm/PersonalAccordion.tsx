import {
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";

interface Props {
  formik: ReturnType<typeof useFormik>;
}

const PersonalAccordion = (Props: Props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            Personal Information
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <FormControl>
          <FormLabel htmlFor="fullName">Full Name:</FormLabel>
          <Input
            isRequired
            type="text"
            id="fullName"
            name="fullName"
            onChange={Props.formik.handleChange}
            value={Props.formik.values.fullName}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input
            isRequired
            type="email"
            id="email"
            name="email"
            onChange={Props.formik.handleChange}
            value={Props.formik.values.email}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Phone:</FormLabel>
          <Input
            isRequired
            type="number"
            id="phone"
            name="phone"
            onChange={Props.formik.handleChange}
            value={Props.formik.values.phone}
          />
        </FormControl>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default PersonalAccordion;
