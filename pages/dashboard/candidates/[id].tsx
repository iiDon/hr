import { Flex, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Certificate from "../../../components/Candidates/Certificate";
import Educations from "../../../components/Candidates/Educations";
import Experince from "../../../components/Candidates/Experince";
import Languages from "../../../components/Candidates/Languages";
import PersonalInfo from "../../../components/Candidates/PersonalInfo";
import Skills from "../../../components/Candidates/Skills";
import useCandidates from "../../../sotre/useCandidates";

const Candidate = () => {
  const router = useRouter();
  const { id } = router.query;
  const candidate = useCandidates((state) =>
    state.candidates.find((candidate) => candidate.id === Number(id))
  );
  console.log(candidate?.education[0]);
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
              textAlign="center"
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
              textAlign="center"
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

          {/* Experiences */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
              textAlign="center"
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
        </Flex>

        <Flex justifyContent="space-between" w="100%">
          {/* Certificate */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
              textAlign="center"
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

          {/* SKills */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
              textAlign="center"
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

          {/* Languages */}
          <FormControl m={2} bgColor="white" rounded={5}>
            <FormLabel
              bgColor="blue.900"
              textColor="white"
              roundedTop={5}
              p={3}
              w="100%"
              textAlign="center"
            >
              Languages
            </FormLabel>
            {candidate?.skill.map((exp, index) => (
              <>
                <Languages
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

        <Flex justifyContent="space-between" w="100%"></Flex>
      </VStack>
    </>
  );
};

export default Candidate;
