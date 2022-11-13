import { Flex, Button, VStack, Accordion, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import Header from "../../../components/Home/Header";
import CertificatesForm from "../../../components/JobForm/CertificatesForm";
import EducationAccordion from "../../../components/JobForm/EducationForm";
import ExperienceForm from "../../../components/JobForm/ExperienceForm";
import LanguagesForm from "../../../components/JobForm/LanguageForm";
import PersonalAccordion from "../../../components/JobForm/PersonalForm";
import SkillsForm from "../../../components/JobForm/SkillsForm";
import useCandidates, { ICandidate } from "../../../sotre/useCandidates";
import useJobs from "../../../sotre/useJobs";

const Apply = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = React.useState(false);
  //   get job by id
  const OpenedJobs = useJobs((state) => state.OpenedJobs);
  const apply = useCandidates((state) => state.apply);
  const toast = useToast();
  const job = OpenedJobs.find((job) => job.id === parseInt(id as string));

  const [education, setEducation] = React.useState<ICandidate["education"]>([]);
  const [experience, setExperience] = React.useState<ICandidate["experince"]>(
    []
  );
  const [skill, setSkill] = React.useState<ICandidate["skill"]>([]);
  const [language, setLanguage] = React.useState<ICandidate["language"]>([]);
  const [certificate, setCertificate] = React.useState<
    ICandidate["certificate"]
  >([]);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      job: [{ id: 101 }],
      skill: [] as ICandidate["skill"],
      certificate: [] as ICandidate["certificate"],
      experince: [] as ICandidate["experince"],
      language: [] as ICandidate["language"],
      education: [] as ICandidate["education"],
    },
    onSubmit: async (values: ICandidate) => {
      setLoading(true);
      if (education.length === 0) {
        toast({
          title: "Some Info Is Not Complete.",
          description: "Please make sure you fill all info.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
      } else {
        values.skill = skill;
        values.certificate = certificate;
        values.job = [{ id: Number(id) }];

        values.language = language;
        values.education = education;
        const res = await apply(values);

        toast({
          title: res.statusText || "Error",
          status: `${res.ok ? "success" : "error"}`,
          duration: 6000,
          isClosable: false,
        });

        if (res.ok) {
          router.push("/");
        }

        setLoading(false);
      }
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
    <>
      <Header />
      <Flex bg="gray.50" m={4} p={4} rounded="md">
        <VStack w="100%">
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <PersonalAccordion formik={formik} />
            <EducationAccordion
              education={education}
              setEducation={setEducation}
            />
            <ExperienceForm
              experience={experience}
              setExperience={setExperience}
            />
            <CertificatesForm
              certificate={certificate}
              setCertificate={setCertificate}
            />
            <SkillsForm skill={skill} setSkill={setSkill} />
            <LanguagesForm language={language} setLanguage={setLanguage} />
            <Button
              type="submit"
              display="block"
              m="auto"
              bgColor="blue.900"
              textColor="white"
              w="100%"
              mt={4}
              isLoading={loading}
            >
              Submit
            </Button>
          </form>
        </VStack>
      </Flex>
    </>
  );
};

Apply.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default Apply;
