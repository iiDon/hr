import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import useAuth from "../../sotre/useAuth";

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
      <form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <VStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              isRequired
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
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
