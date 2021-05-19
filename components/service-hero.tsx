import { Box, Heading, Text } from "@chakra-ui/react";

export interface serviceHeroImageProps {
  bgImage: string;
  title: string;
  subtitle: string;
}

const ServiceHeroImage = ({
  bgImage,
  title,
  subtitle,
}: serviceHeroImageProps) => {
  return (
    <Box
      backgroundImage={`url(${bgImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      bgSize="cover"
      h={400}
    >
      <Box bgColor="#000000" opacity="64%" boxSize="inherit" py={10} px={20}>
        <Heading
          fontSize="3xl"
          fontWeight="semibold"
          pt={20}
          pr={5}
          color="#FFFFFF"
          lineHeight={1.5}
        >
          {title}
        </Heading>
        <Box w={450} py={5} color="#FFFFFF">
          <Text fontSize="md" fontWeight="normal">
            {subtitle}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceHeroImage;
