import { Flex, ListItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiFillFolderAdd,
  AiFillFolderOpen,
  AiFillFileUnknown,
} from "react-icons/ai";
import { deleteCookie } from "cookies-next";
import router from "next/router";
const MenuItems = () => {
  const [menu, setMenu] = useState([
    {
      name: "Home",
      icon: <AiOutlineHome />,
      link: "/admin",
      isActive: true,
    },

    {
      name: "Jobs",
      icon: <AiFillFolderOpen />,
      link: "/admin/jobs",
      isActive: false,
    },
    {
      name: "Post a new job",
      icon: <AiFillFolderAdd />,
      link: "/admin/jobs/new-job",
      isActive: false,
    },
    {
      name: "All Candidates",
      icon: <AiFillFileUnknown />,
      link: "/admin/candidates",
      isActive: false,
    },
    {
      name: "Logout",
      icon: <AiFillFileUnknown />,
      link: "/auth/login",
      isActive: false,
      gap: true,
      onClick: () => logout(),
    },
  ]);

  const logout = async () => {
    deleteCookie("token");
    router.push("/auth/login");
  };

  const active = (name: string): any => {
    const newMenu = menu.map((item) => {
      if (item.name === name) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }
      return item;
    });
    setMenu(newMenu);
  };

  return (
    <>
      {menu.map((item) => (
        <Link href={item.link} key={item.name}>
          <ListItem
            _hover={{
              transition: "all 0.2s ease-in-out",
              bg: item.isActive ? "" : "blue.300",
              textColor: "white",
            }}
            cursor="pointer"
            p={4}
            bg={item.isActive ? "blue.700" : ""}
            my={3}
            mt={item.gap ? 200 : 0}
            rounded={9}
            textColor="white"
            onClick={item.onClick ? item.onClick : () => active(item.name)}
          >
            <Flex alignItems="center">
              {item.icon}
              <Text ml="1rem">{item.name}</Text>
            </Flex>
          </ListItem>
        </Link>
      ))}
    </>
  );
};

export default MenuItems;
