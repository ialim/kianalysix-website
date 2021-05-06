import { Box, Image, Text } from "@chakra-ui/react";

export interface featuredProjectProps {
  name: string;
  solution: string;
  imageUrl?: string;
}

const FeaturedProjectItem = ({
  name,
  solution,
  imageUrl,
}: featuredProjectProps) => {
  return (
    <Box bg="#262739" height="80px" rounded="lg" h={350} w={330}>
      <Box
        boxSize="inherit"
        opacity={0}
        position="absolute"
        d="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        fontSize="larger"
        color="#262739"
        _hover={{ opacity: "100%", transition: "all 2s ease" }}
      >
        <Text color="#ee1d23" fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Box pb={7}>{solution}</Box>
        <Box
          as="button"
          color="brand"
          borderRadius="md"
          px={4}
          h={10}
          borderWidth="thin"
          borderColor="brand"
          w={155}
          _hover={{ bgColor: "#ee1d23", borderColor: "#fff", color: "#fff" }}
        >
          <Text fontSize="lg">Explore</Text>
        </Box>
      </Box>
      <Image
        rounded="inherit"
        boxSize="inherit"
        src={imageUrl}
        alt={name}
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/300"
        _hover={{
          bg: "#ee1d23",
          opacity: "20%",
          transition: "all 2s ease",
        }}
      />
    </Box>
  );
};

export default FeaturedProjectItem;
