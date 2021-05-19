import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import Link from "next/link";

const QuickLinks = ({ Links, Header }) => {
  return (
    <Box py={7} >
      <Heading fontSize="lg" pb={3} color="#FFFFFF">
        {Header}
      </Heading>
      <List spacing={3} color="#CECECE">
        {Links.map((link, index) => (
          <Link href="#" key={index}>
            <ListItem >
              <Text d="inline-flex">{link.icon ? link.icon : ""}<Box as="span" pl={link.icon ? 3 : 0}>{link.name}</Box></Text>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default QuickLinks;
