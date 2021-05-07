import { Box, Center, Heading, Text } from "@chakra-ui/react";

const HeroImage = () => {
  return (
    <Box
      backgroundImage="url('/images/home-hero.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      h={682}
      py={10}
    >
      <Center textAlign="center" flexDirection="column" pt={20}>
        <Heading
          fontSize="3xl"
          fontWeight="semibold"
          pt={7}
          pr={5}
          color="#FFFFFF"
          lineHeight={1.5}
          w={493} 
        >
          We offer and manage the best IT and ICT solutions
        </Heading>
        <Box w={450} py={10} color="#FFFFFF">
          <Text fontSize="md" fontWeight="normal">
            We lead by qualitative information and well researched data. Let's
            offer you value by managing the IT and ICT of your organization
          </Text>
        </Box>
        <Box
          as="button"
          color="#FFFFFF"
          bgColor="brand"
          borderRadius="md"
          mt={10}
          px={4}
          h={10}
          borderWidth="thin"
          borderColor="brand"
          w={300}
        >
          <Text fontSize="sm">Tour through our solutions </Text>
        </Box>
      </Center>
    </Box>
  );
};

export default HeroImage;
