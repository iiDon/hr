import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

const login = () => {
  // const login = useLogin((state) => state.login);
  const a = process.env.BACKEND_URL;
  console.log(a);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth/login`;
  const handleLogin = async (e: React.MouseEvent<HTMLFormElement>) => {
    setLoading(true);
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
        sameSite: "strict",
        expires: new Date(Date.now() + 60 * 60 * 24 * 7),
      });
      router.push("/admin");
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
          <Button type="submit" w="100%" isLoading={loading}>
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
