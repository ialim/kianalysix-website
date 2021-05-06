import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import { SVG } from "../svg/svg";

interface feedBackComment{
    name: string;
    role: string;
    comment: string;
    imageUrl?: string;
}

const FeedBackItem = ({name, role, comment, imageUrl}:feedBackComment) => {
  return (
    <Box bg="#2E3047" p={8} rounded="md" color="#FFFFFF">
      <Box pb={5} d="flex" justifyContent="space-between">
        <Box d="inline-flex">
          <Avatar name={name} src={imageUrl} />
          <Box pl={3}>
            <Heading fontWeight="medium" fontSize="medium">
              {name}
            </Heading>
            <Text pt={3} fontSize="x-small" color="#CECECE">
              {role}
            </Text>
          </Box>
        </Box>
        {SVG.comment}
      </Box>
      <Box maxW={300}>
        {comment}
      </Box>
    </Box>
  );
};

export default FeedBackItem;
