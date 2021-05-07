import {
  Box,
  Heading,
  List,
  ListItem,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { SVG } from "../svg/svg";
import SectionHeading from "./section-heading";
import ServiceItem, { serviceItemProps } from "./service-item";

const serviceItems: serviceItemProps[] = [
  {
    name: "INFORMATION COMMUNICATION TECHNOLOGY (ICT)",
    slug:
      "An integral part of the efficacy of any IT solution lies in its underlying infrastructure",
    imageUrl: "",
  },
  {
    name: "ELECTRONIC SECURITY SERVICES (ESS)",
    slug:
      "An integral part of the efficacy of any IT solution lies in its underlying infrastructure",
    imageUrl: "",
  },
  {
    name: "PUBLIC ADDRESS SYSTEMS (PAS)",
    slug:
      "An integral part of the efficacy of any IT solution lies in its underlying infrastructure",
    imageUrl: "",
  },
  {
    name: "SAFETY SYSTEMS (SS)",
    slug:
      "An integral part of the efficacy of any IT solution lies in its underlying infrastructure",
    imageUrl: "",
  },
  {
    name: "BUILDING AND HOME AUTOMATION (BHA)",
    slug:
      "An integral part of the efficacy of any IT solution lies in its underlying infrastructure",
    imageUrl: "",
  },
  {
    name: "RENEWABLE AND ALTERNATIVE ENERGY SYSTEMS (RAE)",
    slug:
      "An integral part of the efficacy of any IT solution lies in its underlying infrastructure",
    imageUrl: "",
  },
];

const ServicesSection = () => {
  return (
    <Box display="inline-flex">
      <Box
        d="flex"
        flexDirection="column"
        bg="#33354E"
        py={10}
        pl={20}
        w="25vw"
        alignItems="start"
        justifyContent="right"
      >
        <SectionHeading title="OUR SERVICES" />
        <Heading
          fontSize="3xl"
          fontWeight="light"
          w={300}
          pt={7}
          pr={5}
          color="#FFFFFF"
        >
          We offer a wide variety of ICT and IT solution services
        </Heading>
        <Box w={310} pt={3} color="#E0E0E0">
          <Text fontSize="xs" fontWeight="light">
            Our solution services system varies depending on the areas of
            deployment and maintenance team are always on standby e.g. A
            different services for a private and public sector.
          </Text>
        </Box>
        <Box color="#FFFFFF" pt={10}>
          <Text fontSize="sm" d="inline-flex" alignItems="center">
            {SVG.rightArrow}
            <Box pl={2} fontWeight="semibold" fontSize="sm">
              All Services
            </Box>
          </Text>
        </Box>
        <List color="#CECECE" spacing={3} fontSize="xs" fontWeight="light">
          <ListItem pt={3}>Hospital and Hotels</ListItem>
          <ListItem>Public organization</ListItem>
          <ListItem>Private organization</ListItem>
        </List>
      </Box>
      <Box
        d="flex"
        flexDirection="column"
        bg="#EBEBEB"
        pr={20}
        pb={5}
        w="75vw"
        alignItems="center"
        justifyContent="center"
      >
        <Box py={10}>
          <Heading fontWeight="medium" fontSize="md" color="#A7A7A7">
            All Services
          </Heading>
        </Box>
        <SimpleGrid
          columns={3}
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          {serviceItems.map(({ name, imageUrl, slug }, index) => (
            <ServiceItem name={name} imageUrl={imageUrl} slug={slug} key={index}/>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ServicesSection;
