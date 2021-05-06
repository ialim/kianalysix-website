import { Box, Flex } from "@chakra-ui/react";

const Nav = ({ children }) => {
  return (
    <Flex h='min-content' py='5' justify='space-evenly' >
      {children}
    </Flex>
  );
};

export default Nav;
