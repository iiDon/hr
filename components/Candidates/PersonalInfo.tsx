import { FormLabel, Flex, Text } from "@chakra-ui/react";

interface Props {
  name?: string;
  email?: string;
  phone?: string;
}
const PersonalInfo = ({ name, email, phone }: Props) => {
  return (
    <>
      <Flex
        _hover={{ bgColor: "gray.100" }}
        px={4}
        py={1}
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="space-between"
      >
        <FormLabel fontSize="sm">Full Name</FormLabel>
        <Text fontSize="sm">{name}</Text>
      </Flex>
      <Flex
        _hover={{ bgColor: "gray.100" }}
        px={4}
        py={1}
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="space-between"
      >
        <FormLabel fontSize="sm">Email</FormLabel>
        <Text fontSize="sm">{email}</Text>
      </Flex>
      <Flex
        _hover={{ bgColor: "gray.100" }}
        px={4}
        py={1}
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="space-between"
      >
        <FormLabel fontSize="sm">Phone</FormLabel>
        <Text fontSize="sm">{phone}</Text>
      </Flex>
    </>
  );
};

export default PersonalInfo;
