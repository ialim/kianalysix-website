import { Box, Divider, Heading, Text } from "@chakra-ui/react";

export interface serviceHeadingProp {
  heading: string;
}

const ServiceHeading = ({ heading }: serviceHeadingProp) => {
  return (
    <Box>
      <Heading
        color="#EA4747"
        textAlign="center"
        fontWeight="medium"
        fontSize="md"
      >
        <Box d='flex' alignItems="center" flexDirection="column">
          <Text>{heading}</Text>
          <Divider borderWidth="thin" borderColor="brand" mt={1} w={10}/>
        </Box>
      </Heading>
    </Box>
  );
};

export default ServiceHeading;
