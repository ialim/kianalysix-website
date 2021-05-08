import { Box, Text } from "@chakra-ui/react";

const ServiceContentContainer = ({ children }) => {
  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      w="50vw"
      mb={10}
    >
      {children}
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
    </Box>
  );
};

export default ServiceContentContainer;
