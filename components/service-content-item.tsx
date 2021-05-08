import { Box, Heading, Image, Text } from "@chakra-ui/react";

export interface serviceContentItemProp {
  reverse: boolean;
  head: string;
  content: string;
  imageUrl: string;
}

const ServiceContentItem = ({
  reverse,
  head,
  content,
  imageUrl,
}: serviceContentItemProp) => {
  return (
    <Box
      d="flex"
      justifyContent="space-around"
      my={10}
      w="50vw"
      flexDirection={reverse ? "row-reverse" : "row"}
    >
      <Box w={300} rounded="md">
        <Image
          boxSize="inherit"
          objectFit="cover"
          src={imageUrl}
          alt={head}
          rounded="inherit"
        />
      </Box>
      <Box
        w={400}
        d="flex"
        justifyContent="space-between"
        alignItems="start"
        flexDirection="column"
      >
        <Heading fontSize="xl" fontWeight="medium" mb={2} color="#000000">
          {head}
        </Heading>
        <Text fontWeight="normal" fontSize="xs" color="#707070">
          {content}
        </Text>
      </Box>
    </Box>
  );
};

export default ServiceContentItem;
