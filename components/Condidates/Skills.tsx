import { Flex, FormLabel, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  level: string;
  created: string;
  lastUpdated: string;
}

const Skills = (Props: Props) => {
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
        {Props.name}
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
        <FormLabel fontSize="sm">Level:</FormLabel>
        <Text fontSize="sm">{Props.level}</Text>
      </Flex>
    </>
  );
};

export default Skills;
