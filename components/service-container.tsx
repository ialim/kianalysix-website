import { Box } from "@chakra-ui/react";

const ServiceContainer = ({ children }) => {
  return (
    <Box
      d="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      bgColor="#ffffff"
      px={30}
    >
      {children}
    </Box>
  );
};

export default ServiceContainer;
