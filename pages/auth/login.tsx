import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Boolean | string>(false);
  const router = useRouter();
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/login`;
  const handleLogin = async (values: { email: string; password: string }) => {
    setLoading(true);
    const request = fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });
    const response = await request;
    const data = await response.json();
    setLoading(false);


    if ((await request).status === 200) {
      setCookie("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "strict",
        expires: new Date(Date.now() + 60 * 60 * 24 * 7),
      });
      router.push("/admin");
    }
    if ((await request).status === 400) {
      console.log((await request).statusText);
      setError((await request).statusText);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <Flex justifyContent={"center"} alignItems={"center"} h="100vh">
      <form style={{ width: "30%" }} onSubmit={formik.handleSubmit}>
        <VStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values?.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values?.password}
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
