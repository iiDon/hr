import {
  Flex,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Accordion,
  AccordionItem,
  Input,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import EducationAccordion from "../../../components/JobForm/EducationAccordion";
import PersonalAccordion from "../../../components/JobForm/PersonalAccordion";
import { ICandidate } from "../../../sotre/useCandidates";
import useJobs from "../../../sotre/useJobs";

const Apply = () => {
  const router = useRouter();
  const { id } = router.query;
  //   get job by id
  const OpenedJobs = useJobs((state) => state.OpenedJobs);
  const job = OpenedJobs.find((job) => job.id === parseInt(id as string));
  const [education, setEducation] = React.useState<ICandidate["education"]>([]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      job: [job] as ICandidate["job"],
      skill: [] as ICandidate["skill"],
      certificate: [] as ICandidate["certificate"],
      experince: [] as ICandidate["experince"],
      language: [] as ICandidate["language"],
      education: [] as ICandidate["education"],
    },
    onSubmit: (values: ICandidate) => {
      console.log(values);
    },
  });

  if (!job) {
    return (
      <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
        <Button
          bg="blue.900"
          textColor="white"
          onClick={() => router.push("/")}
        >
          Go Back
        </Button>
      </Flex>
    );
  }
  return (
    <Flex w="100%">
      <VStack w="100%">
        <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
          <Accordion w="100%">
            <PersonalAccordion formik={formik} />
            <EducationAccordion
              education={education}
              setEducation={setEducation}
            />
          </Accordion>
          <Button type="submit">Submit</Button>
        </form>
      </VStack>
    </Flex>
  );
};

Apply.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default Apply;
