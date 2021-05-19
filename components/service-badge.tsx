import { Box, Text } from "@chakra-ui/react";

export interface ServiceBadgeProp {
  badge: string;
}

const ServiceBadge = ({ badge }: ServiceBadgeProp) => {
  return (
    <Box bgColor="#202231" py={5} color="#EA4747" px={20}>
      <Text fontSize="xl" fontWeight="medium" textAlign="center">
        {badge}
      </Text>
    </Box>
  );
};

export default ServiceBadge;
