import { Box, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

interface Props {
  formik: any;
}

const PersonalForm = (Props: Props) => {
  return (
    <>
      {/* personal information form */}
      <Box w="100%">
        <VStack w="100%" spacing="4">
          <FormControl id="fullName" isRequired>
            <FormLabel>Full Name</FormLabel>
            <Input
              type="text"
              placeholder="Full Name"
              value={Props.formik.values.fullName}
              onChange={Props.formik.handleChange}
              onBlur={Props.formik.handleBlur}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              value={Props.formik.values.email}
              onChange={Props.formik.handleChange}
              onBlur={Props.formik.handleBlur}
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone</FormLabel>
            <Input
              type="text"
              placeholder="Phone"
              value={Props.formik.values.phone}
              onChange={Props.formik.handleChange}
              onBlur={Props.formik.handleBlur}
            />
          </FormControl>
        </VStack>
      </Box>
    </>
  );
};

export default PersonalForm;
