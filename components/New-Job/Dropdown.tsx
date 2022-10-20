import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
interface DropdownProps {
  setJobState: (value: string) => void;
}

const Dropdown = ({ setJobState }: DropdownProps) => {
  const menu = ["open", "draft"];
  const [placeholder, setPlaceholder] = useState("draft");

  const handleMenu = (item: string) => {
    setJobState(item);
    setPlaceholder(item);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          w="100%"
          border="1px"
          borderColor="black"
        >
          {placeholder}
        </MenuButton>
        <MenuList w="100%">
          {menu.map((item) => (
            <MenuItem onClick={() => handleMenu(item)} key={item}>
              {item}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default Dropdown;
