import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, isActive, children }: NavItemProps) => {
  return (
    <Box px={5} py={2}>
      <Link href={href}>
        <Box color={isActive ? "#EE1D23" : "#B0B0B0"} pb={2}>
          <Text fontSize="lg">{children}</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default NavItem;
