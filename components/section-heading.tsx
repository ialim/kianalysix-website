import { Box, Divider, Heading, Text } from "@chakra-ui/react";

interface SectionHeadingProp {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProp) => {
  const underline = title.slice(0, 3);
  const words = title.slice(3); 
  const isSpace = title[3] === " ";
  return (
    <Box>
      <Heading
        color="#FFFFFF"
        textAlign="center"
        fontWeight="bold"
        fontSize="md"
      >
        <Text d="inline-flex">
          <Box as="span" w="max-content" pr={isSpace ? 1 : 0}>
            <Text pb={1}>{underline}</Text>
            <Divider borderWidth="thin" borderColor="brand" />
          </Box>{" "}
          {words}
        </Text>
      </Heading>
    </Box>
  );
};

export default SectionHeading;
