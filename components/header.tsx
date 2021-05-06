import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { SVG } from "../svg/svg";
import Nav from "../components/nav";
import NavItem from "../components/nav-item";

const Header = () => {
  const logo = SVG.logo;
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      h="min-content"
      w="full"
      borderWidth="thin"
      px={20}
    >
      <Box py={2}>
        <Link href="/">{logo}</Link>
      </Box>
      <Nav>
        <NavItem href="/" isActive>
          Home
        </NavItem>
        <NavItem href="#">Our Solutions</NavItem>
        <NavItem href="#">About Us</NavItem>
        <NavItem href="#">Career</NavItem>
        <NavItem href="#">Blog</NavItem>
        <Box
          as="button"
          color="brand"
          borderRadius="md"
          px={4}
          h={10}
          borderWidth="thin"
          borderColor="brand"
          w={155}
        >
          <Text fontSize="lg">Contact Us</Text>
        </Box>
      </Nav>
    </Flex>
  );
};

export default Header;
