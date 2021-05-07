import { Box, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}

const NavItem = ({ href, isActive, children }: NavItemProps) => {
  return (
    <Box px={5} py={2} role="group">
      <Box
        color={isActive ? "#EE1D23" : "#B0B0B0"}
        pb={2}
        _groupHover={{ color: "#EE1D23", transition: "all 1s ease" }}
      >
        <Link href={href}>
          <a>{children}</a>
        </Link>
        {isActive ? <Divider borderWidth="thin" borderColor="brand" /> : ""}
        {!isActive ? (
          <Divider
            opacity={0}
            borderWidth="thin"
            borderColor="brand"
            _groupHover={{
              opacity: "100%",
              transition: "all 2s ease",
            }}
          />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default NavItem;
