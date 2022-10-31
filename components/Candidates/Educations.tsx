import { Flex, FormLabel, Text } from "@chakra-ui/react";

interface Props {
  degree?: string;
  major?: string;
  university?: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  gpaOf?: string;
}

const Educations = (Props: Props) => {
  return (
    <>
      <FormLabel
        w="100%"
        px={4}
        py={2}
        borderBottom="2px"
        borderColor="gray.200"
        textAlign="center"
        fontSize="lg"
      >
        {Props.major}
      </FormLabel>
      <Flex
        _hover={{ bgColor: "gray.100" }}
        px={4}
        py={1}
        alignItems="center"
        borderBottom="1px"
        borderColor="gray.200"
        justifyContent="space-between"
      >
        <FormLabel fontSize="sm">Degree:</FormLabel>
        <Text fontSize="sm">{Props.degree}</Text>
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
        <FormLabel fontSize="sm">University:</FormLabel>
        <Text fontSize="sm">{Props.university}</Text>
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
        <FormLabel fontSize="sm">Start Date:</FormLabel>
        <Text fontSize="sm">{Props.startDate}</Text>
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
        <FormLabel fontSize="sm">End Date:</FormLabel>
        <Text fontSize="sm">{Props.endDate}</Text>
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
        <FormLabel fontSize="sm">School:</FormLabel>
        <Text fontSize="sm">{Props.university}</Text>
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
        <FormLabel fontSize="sm">School:</FormLabel>
        <Text fontSize="sm">{Props.university}</Text>
      </Flex>
    </>
  );
};

export default Educations;
