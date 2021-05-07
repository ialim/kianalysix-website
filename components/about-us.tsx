import {
  Box,
  Center,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Image,
} from "@chakra-ui/react";
import SectionHeading from "./section-heading";

const AboutUs = () => {
  return (
    <Box bg="#202231" px={20}>
      <Box d="flex" justifyContent="center" alignItems="center" py={10}>
        <Box w="35vw">
          <Wrap spacing={5}>
            <WrapItem>
              <Center w="15vw" h="287px" bg="#33354E">
                <Image
                  boxSize="inherit"
                  src="/images/security-cctv-camera-office-building_117856-884.png"
                  alt="hero image"
                  fallbackSrc="https://via.placeholder.com/150"
                  objectFit="cover"
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="15vw" h="287px" bg="#33354E" mt={5}>
                <Image
                  boxSize="inherit"
                  src="/images/group-young-business-people-working-office_158595-5221.png"
                  alt="hero image"
                  fallbackSrc="https://via.placeholder.com/150"
                  objectFit="cover"
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="15vw" h="287px" bg="#33354E">
                <Image
                  boxSize="inherit"
                  src="/images/group-young-business-people-working-office_158595-5217.png"
                  alt="hero image"
                  fallbackSrc="https://via.placeholder.com/150"
                  objectFit="cover"
                />
              </Center>
            </WrapItem>
            <WrapItem>
              <Center w="15vw" h="287px" bg="#33354E" mt={5}>
                <Image
                  boxSize="inherit"
                  src="/images/engineer-inspection-fire-extinguisher-fire-hose_34936-1340.png"
                  alt="hero image"
                  fallbackSrc="https://via.placeholder.com/150"
                  objectFit="cover"
                />
              </Center>
            </WrapItem>
          </Wrap>
        </Box>

        <Box width="40vw">
          <Box
            px={10}
            d="flex"
            justifyContent="right"
            flexDirection="column"
            alignItems="start"
            w={500}
          >
            <SectionHeading title="ABOUT OUR COMPANY" />
            <Heading
              fontSize="3xl"
              fontWeight="light"
              pt={7}
              pr={5}
              color="#FFFFFF"
            >
              Leading the way in designing and managing different solution
              services
            </Heading>
            <Box pt={3} color="#E0E0E0">
              <Text fontSize="sm" fontWeight="light">
                KI Analysix Systems is an IT firm that specialize in design,
                deployment & management of IT solutions while gathering useful
                data for analysis across different economic sectors to help
                private and public organizations make informed decisions.
              </Text>
            </Box>

            <Box pt={3} color="#E0E0E0">
              <Text fontSize="sm" fontWeight="light">
                Our portfolio includes a variety of solutions that focuses on
                operational efficiency, enhanced user experience and customer
                satisfaction. We seek and maintain strategic partnership with
                global ICT firms and standard organizations in order to meet
                clients expectations. We pride ourselves in delivering quality
                and in time services, through iterative testing, continuous
                inspection and customer feedback. Together with our global
                partners, we are sure to meet our clients' most pressing needs.
              </Text>
            </Box>

            <Box
              as="button"
              color="brand"
              borderRadius="md"
              mt={7}
              px={4}
              h={10}
              borderWidth="thin"
              borderColor="brand"
              w={120}
            >
              <Text fontSize="sm">Learn More</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
