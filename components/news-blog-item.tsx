import { Box, Heading, Image, Text } from "@chakra-ui/react";

export interface newsBlogProps {
  type: string;
  title: string;
  imageUrl?: string;
  slug: string;
  date: string;
}

const NewsBlogItem = ({ type, title, imageUrl, slug, date }: newsBlogProps) => {
  return (
    <Box maxW={280} bgColor="#31354D">
      <Box borderWidth="thin" rounded="md" height="200px" width="280px">
        <Image
          boxSize="inherit"
          src={imageUrl}
          alt="hero image"
          fallbackSrc="https://via.placeholder.com/150"
          objectFit="cover"
        />
      </Box>
      <Box p={7}>
        <Text color="#848488" fontSize="sm">
          {type.toUpperCase()}
        </Text>
        <Heading color="#FFFFFF" fontWeight="medium" fontSize="lg" py={2}>
          {title}
        </Heading>
        <Box color="#DADBDD" py={2} fontSize="sm">
          {slug}
        </Box>
        <Text color="#9191AA" fontSize="x-small" pt={3}>
          {date}
        </Text>
      </Box>
    </Box>
  );
};

export default NewsBlogItem;
