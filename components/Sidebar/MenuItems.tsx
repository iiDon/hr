import { Box, Flex, ListItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineHome,
  AiFillFolderAdd,
  AiFillFolderOpen,
  AiFillFileUnknown,
} from "react-icons/ai";
const MenuItems = () => {
  const [menu, setMenu] = useState([
    {
      name: "Home",
      icon: <AiOutlineHome />,
      link: "/",
      isActive: true,
    },

    {
      name: "Jobs",
      icon: <AiFillFolderOpen />,
      link: "/jobs",
      isActive: false,
    },
    {
      name: "Post a new job",
      icon: <AiFillFolderAdd />,
      link: "/new-job",
      isActive: false,
    },
    {
      name: "All condidates",
      icon: <AiFillFileUnknown />,
      link: "/condidates",
      isActive: false,
    },
  ]);

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
            onClick={() => active(item.name)}
            _hover={{
              transition: "all 0.2s ease-in-out",
              bg: item.isActive ? "" : "blue.300",
              textColor: "white",
            }}
            cursor="pointer"
            p={4}
            bg={item.isActive ? "blue.700" : ""}
            my={3}
            rounded={9}
            textColor="white"
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
