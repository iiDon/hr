import { Flex, FormLabel, Text } from "@chakra-ui/react";

interface Props {
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  created: string;
  lastUpdated: string;
}

const Experince = (Props: Props) => {
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
        {Props.title}
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
        <FormLabel fontSize="sm">Company:</FormLabel>
        <Text fontSize="sm">{Props.company}</Text>
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
        <FormLabel fontSize="sm">Description:</FormLabel>
        <Text fontSize="sm">{Props.description}</Text>
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
    </>
  );
};

export default Experince;
