import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link"

export interface serviceItemProps {
  name: string;
  slug: string;
  imageUrl: string;
  path: string
}

const ServiceItem = ({ name, slug, imageUrl, path }: serviceItemProps) => {
  return (
    <Box>
      <Box rounded="md" w={200} h={150}>
        <Image
          src={imageUrl}
          alt={name}
          fallbackSrc="https://via.placeholder.com/150"
          objectFit="cover"
          boxSize="inherit"
          rounded="inherit"
        />
      </Box>
      <Box w={200} py={3}>
        <Heading fontWeight="semibold" fontSize="xs">
          {name.toLocaleUpperCase()}
        </Heading>
        <Text py={2} color="#666262" fontWeight="normal" fontSize="xs">
          {slug}
        </Text>
        <Box as="button" color="#EE1D23" fontSize="sm" fontWeight="bold">
          <Link href={path}>
          <a>Learn more</a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceItem;
