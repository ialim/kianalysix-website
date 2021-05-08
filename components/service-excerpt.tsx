import { Box, Text } from "@chakra-ui/react";

export interface serviceExcerptProp {
  excerpt: string;
}

const ServiceExcerpt = ({ excerpt }: serviceExcerptProp) => {
  return (
    <Box w="40vw" py={10} color="#707070">
      <Text fontSize="md" fontWeight="normal" textAlign="center">
        {excerpt}
      </Text>
    </Box>
  );
};

export default ServiceExcerpt;
