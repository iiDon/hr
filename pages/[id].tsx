import { Flex, FormControl, FormLabel, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Certificate from "../../../components/Condidates/Certificate";
import Educations from "../../../components/Condidates/Educations";
import Experince from "../../../components/Condidates/Experince";
import PersonalInfo from "../../../components/Condidates/PersonalInfo";
import Skills from "../../../components/Condidates/Skills";
import useCondidates from "../../../sotre/useCondidates";
import { ICondidate, IEducation, IExperince } from "../sotre/useCondidates";

const Condidate = () => {
  const router = useRouter();
  const { id } = router.query;
  const condidate = useCondidates((state) =>
    state.condidates.find(
      (condidate: ICondidate) => condidate.id === Number(id)
    )
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
              name={condidate?.fullName}
              email={condidate?.email}
              phone={condidate?.phone}
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
            {condidate?.education.map((edu: IEducation, index: number) => (
              <>
                <Educations
                  key={index}
                  degree={edu.degree}
                  major={edu.major}
                  university={edu.university}
                  startDate={edu.startDate}
                  endDate={edu.endDate}
                  gpa={edu.gpa}
                  gpaOf={edu.gpaOf}
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
            {condidate?.experince.map((exp: IExperince, index: number) => (
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
            {condidate?.certificate.map((exp, index) => (
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
            {condidate?.skill.map((exp, index) => (
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

export default Condidate;
