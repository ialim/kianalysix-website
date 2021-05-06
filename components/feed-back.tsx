import { Box } from "@chakra-ui/react";
import FeedBackItem from "./feed-back-item";
import SectionHeading from "./section-heading";

const feedBacks = [
  {
    name: "Jack Daniels",
    role: "CEO, MTN",
    imageUrl: "https://bit.ly/kent-c-dodds",
    comment:
      "We appreciate the great work Ki Analysix. They provide the best services, very secure and affordable services We appreciate the great work Ki-Analysix. They provide the best services, very secure and affordable services",
  },
  {
    name: "Amaka Shetima",
    role: "CEO, Sterling Bank",
    imageUrl: "https://avatars.githubusercontent.com/u/53586167?v=4",
    comment:
      "We appreciate the great work Ki Analysix. They provide the best services, very secure and affordable services We appreciate the great work Ki-Analysix. They provide the best services, very secure and affordable services",
  },
  {
    name: "Segun Adebayo",
    role: "Founder, ChakraUI",
    imageUrl: "https://avatars.githubusercontent.com/u/6916170?v=4",
    comment:
      "We appreciate the great work Ki Analysix. They provide the best services, very secure and affordable services We appreciate the great work Ki-Analysix. They provide the best services, very secure and affordable services",
  },
];

const FeedBack = () => {
  return (
    <Box backgroundColor="#262739" px={20}>
      <Box py={10}>
        <SectionHeading title="OUR CLIENTS AND WHAT THEY SAY ABOUT US" />
        <Box d="flex" justifyContent="space-evenly" pt={10}>
            {feedBacks.map(({name, role, imageUrl, comment}, index) => (
                <FeedBackItem name={name} role={role} imageUrl={imageUrl} comment={comment} key={index}/>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FeedBack;
