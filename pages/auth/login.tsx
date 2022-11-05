import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import useAuth from "../../sotre/useAuth";
// https://sr.edu.sa/site/wp-content/themes/sru-wp/video/video.mp4

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { logIn, isLoggedIn, error } = useAuth((state) => state);

  useEffect(() => {
    if (!isLoggedIn) {
      console.log(isLoggedIn);
      router.push("/auth/login");
    }
    if (isLoggedIn) {
      console.log(isLoggedIn);

      router.push("/dashboard");
    }
  }, [isLoggedIn]);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    await logIn(email, password);
    setLoading(false);
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      await handleLogin(values.email, values.password);
    },
  });

  return (
    <Flex justifyContent={"center"} alignItems={"center"} h="100vh">
      <Box
        position="absolute"
        objectFit="cover"
        width="100%"
        controls={false}
        height="100%"
        zIndex={-1}
        as="video"
        src="https://sr.edu.sa/site/wp-content/themes/sru-wp/video/video.mp4"
        opacity={1}
        autoPlay
        loop
        muted
        playsInline
        filter="brightness(40%)"
      />
      <form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <VStack>
          <Image src="/logo.png" />
          <FormControl>
            <FormLabel textColor="white">Email</FormLabel>
            <Input
              textColor="white"
              isRequired
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel textColor="white">Password</FormLabel>
            <Input
              textColor="white"
              isRequired
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {!error ? null : <Text textColor="red">{error.toString()}</Text>}
          </FormControl>

          <Button type="submit" w="100%" isLoading={loading}>
            Login
          </Button>
        </VStack>
      </form>
    </Flex>
  );
};

Login.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default Login;
