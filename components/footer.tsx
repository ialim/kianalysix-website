import {
  Box,
  Text,
  Stack,
  StackDivider,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { SVG } from "../svg/svg";
import QuickLinks from "./quick-links";

const LinkSections = [
  {
    Header: "Solutions",
    Links: [
      { icon: null, name: "Information Communication Technology" },
      { icon: null, name: "Electronic Security Solutions" },
      { icon: null, name: "Public address system" },
      { icon: null, name: "Building and Home Automation Systems" },
      { icon: null, name: "Safety Systems" },
      { icon: null, name: "Renewable and alternative power system" },
    ],
  },
  {
    Header: "Blogs & Community",
    Links: [
      { icon: SVG.twitter, name: "@ki-analysix" },
      { icon: SVG.facebook, name: "Ki-analysix" },
      { icon: SVG.instagram, name: "@ki-analysix" },
      { icon: SVG.linkedIn, name: "Ki-analysix" },
      { icon: SVG.googlePlus, name: "kianalysix@gmail.com" },
      { icon: SVG.youtube, name: "kianalysix@gmail.com" },
      { icon: SVG.slack, name: "kianalysix@gmail.com" },
    ],
  },
  {
    Header: "Support",
    Links: [
      { icon: null, name: "Help care" },
      { icon: null, name: "Community forum" },
      { icon: null, name: "Enterprise support" },
      { icon: null, name: "Download & install" },
      { icon: null, name: "Genuine software" },
    ],
  },
];

const Footer = () => {
  const home = SVG.home;
  return (
    <Box backgroundColor="black" px={20}>
      <Box color="#CECECE" py={5}>
        <Box d="inline-flex">
          {home}{" "}
          <Box as="span" fontSize="md" pl={2}>
            Home
          </Box>
        </Box>
      </Box>
      <Box color="#CECECE" py={3}>
        <Stack
          direction={["column", "row"]}
          spacing="10px"
          divider={<StackDivider borderColor="#707070" />}
          borderTopWidth="thin"
          borderBottomWidth="thin"
          borderColor="#707070"
          d="flex"
          justify="space-between"
        >
          <QuickLinks
            Header={LinkSections[0].Header}
            Links={LinkSections[0].Links}
          />
          <QuickLinks
            Header={LinkSections[1].Header}
            Links={LinkSections[1].Links}
          />
          <QuickLinks
            Header={LinkSections[2].Header}
            Links={LinkSections[2].Links}
          />
          <Box py={10} w={230}>
            <Heading fontSize="lg" pb={3} color="#FFFFFF">
              <Text d="inline-flex">
                {SVG.phone}{" "}
                <Box as="span" pl={3}>
                  Get in touch
                </Box>
              </Text>
            </Heading>
            <List spacing={3}>
              <ListItem>+254 111 012 800</ListItem>
              <ListItem>+254 722 208 862</ListItem>
              <ListItem>+254 731 305 468</ListItem>
            </List>
            <Heading fontSize="lg" pt={7} color="#FFFFFF">
              <Text d="inline-flex">
                {SVG.mail}{" "}
                <Box as="span" pl={3}>
                  General Enquiries:
                </Box>
              </Text>
            </Heading>
            <Text>enquiries@Ki-analysix.com</Text>
            <Heading fontSize="lg" pt={7} color="#FFFFFF">
              <Text d="inline-flex">
                {SVG.mail}{" "}
                <Box as="span" pl={3}>
                  Sales Enquiries:
                </Box>
              </Text>
            </Heading>
            <Text>sales@Ki-analysix.com</Text>
          </Box>
        </Stack>
      </Box>
      <Box
        color="#707070"
        pb={3}
        textAlign="center"
        borderBottomWidth="thin"
        borderColor="#707070"
      >
        <Text fontSize="sm">
          Copyright © 2020 Ki-analysix, Inc. | Privacy Policy | Terms of Use |
          Trust & Safety | Trademark
        </Text>
      </Box>
      <Box color="#CECECE" py={5}>
        <Text fontSize="sm" d="inline-flex">
          {SVG.globe}
          <Box as="span" pl={2}>
            Change region <Text d="inline-flex">{SVG.dropDown}</Text>
          </Box>
        </Text>
      </Box>
    </Box>
  );
};
export default Footer;
