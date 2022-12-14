import { Flex, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Certificate from "../components/Candidates/Certificate";
import Educations from "../components/Candidates/Educations";
import Experince from "../components/Candidates/Experince";
import PersonalInfo from "../components/Candidates/PersonalInfo";
import Skills from "../components/Candidates/Skills";
import usecandidates from "../sotre/useCandidates";

const Candidate = () => {
  const router = useRouter();
  const { id } = router.query;
  const candidate = usecandidates((state) =>
    state.candidates.find((candidate) => candidate.id === Number(id))
  );

  return (
    <>
      <VStack p={4}>
        <Flex justifyContent="space-between" w="100%">
          {/* Personal Info */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
            >
              Personal Information
            </FormLabel>
            <PersonalInfo
              name={candidate?.fullName}
              email={candidate?.email}
              phone={candidate?.phone}
            />
          </FormControl>

          {/* Education */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
            >
              Education
            </FormLabel>
            {candidate?.education.map((edu, index) => (
              <>
                <Educations
                  key={index}
                  degree={edu.degree}
                  major={edu.major}
                  university={edu.university}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                  gpa={edu.gpa}
                  gpa_of={edu.gpa_of}
                />
              </>
            ))}
          </FormControl>
        </Flex>

        <Flex justifyContent="space-between" w="100%">
          {/* Experiences */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
            >
              Experiences
            </FormLabel>
            {candidate?.experince.map((exp, index) => (
              <>
                <Experince
                  key={index}
                  company={exp.company}
                  title={exp.title}
                  description={exp.description}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  created={exp.created}
                  lastUpdated={exp.lastUpdated}
                />
              </>
            ))}
          </FormControl>

          {/* Certificate */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
            >
              Certificates
            </FormLabel>
            {candidate?.certificate.map((exp, index) => (
              <>
                <Certificate
                  key={index}
                  company={exp.company}
                  title={exp.title}
                  description={exp.description}
                  startDate={exp.startDate}
                  endDate={exp.endDate}
                  created={exp.created}
                  lastUpdated={exp.lastUpdated}
                />
              </>
            ))}
          </FormControl>
        </Flex>

        <Flex justifyContent="space-between">
          {/* SKills */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
            >
              Skills
            </FormLabel>
            {candidate?.skill.map((exp, index) => (
              <>
                <Skills
                  key={index}
                  name={exp.name}
                  level={exp.level}
                  created={exp.created}
                  lastUpdated={exp.lastUpdated}
                />
              </>
            ))}
          </FormControl>
        </Flex>
      </VStack>
    </>
  );
};

export default Candidate;
