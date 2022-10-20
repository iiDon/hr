import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { hasCookie, setCookie, getCookie, deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect } from "react";
import Layout from "../../components/Layouts/Layout";
import Sidebar from "../../components/Sidebar/Sidebar";
import { isAuthenticated } from "../../helpers/auth";
const login = () => {
  // const login = useLogin((state) => state.login);
  const router = useRouter();
  const URL = "http://138.197.180.181:8353/user/auth/login";
  const handleLogin = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "sultan_alsaif@outlook.sa",
        password: "sultan@career",
      }),
    });
    const response = await request;
    const data = await response.json();
    console.log(data);

    if ((await request).status === 200) {
      setCookie("token", data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        // secure: true,
        httpOnly: false,
        sameSite: "strict",
        expires: new Date(Date.now() + 60 * 60 * 24 * 7),
      });
      router.push("/");
    }
  };

  return (
    <Flex justifyContent={"center"} alignItems={"center"} h="100vh">
      <form style={{ width: "30%" }} onSubmit={handleLogin}>
        <VStack>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button type="submit" w="100%">
            Login
          </Button>
        </VStack>
      </form>
    </Flex>
  );
};

login.getLayout = function (page: ReactElement) {
  return <>{page}</>;
};

export default login;
