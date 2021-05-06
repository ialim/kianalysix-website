import { Box, Image, Stack, Text } from "@chakra-ui/react";
import FeaturedProjectItem, {
  featuredProjectProps,
} from "./featured-project-item";
import SectionHeading from "./section-heading";

const featuredProjects: featuredProjectProps[] = [
  {
    name: "The Accor",
    solution: "Network Surveilance System",
    imageUrl:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Regency",
    solution: "Structured Cabling",
    imageUrl:
      "https://images.unsplash.com/photo-1581209633491-c7f83fdaf01a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Nigerian Army Core HQ Abalti",
    solution: "Network AV Solution",
    imageUrl:
      "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
];

const FeaturedProjects = () => {
  return (
    <Box backgroundColor="#262739" px={20}>
      <Box py={10}>
        <SectionHeading title="FEATURED PROJECTS" />
        <Stack
          direction={["column", "row"]}
          spacing={10}
          py={10}
          alignItems="center"
          justifyContent="center"
        >
          {featuredProjects.map(({ name, solution, imageUrl }, index) => (
            <FeaturedProjectItem
              key={index}
              name={name}
              solution={solution}
              imageUrl={imageUrl}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default FeaturedProjects;
