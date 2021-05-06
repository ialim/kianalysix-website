import { Box } from "@chakra-ui/react";
import NewsBlogItem, { newsBlogProps } from "./news-blog-item";
import SectionHeading from "./section-heading";

const latestNewsAndBlogs: newsBlogProps[] = [
  {
    type: "News",
    title: "Digital technologies offer new ways to create business models",
    slug: "Combining more than 25 years of experience with vast knowledge...",
    date: "25 September, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    type: "News",
    title: "Digital technologies offer new ways to create business models",
    slug: "Combining more than 25 years of experience with vast knowledge...",
    date: "25 September, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
  {
    type: "News",
    title: "Digital technologies offer new ways to create business models",
    slug: "Combining more than 25 years of experience with vast knowledge...",
    date: "25 September, 2020",
    imageUrl:
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
  },
];

const LatestNewsBlog = () => {
  return (
    <Box backgroundColor="#202231" px={20}>
      <Box py={10}>
        <SectionHeading title="LATEST NEWS & BLOGS" />
        <Box d="flex" justifyContent="space-evenly" pt={10}>
          {latestNewsAndBlogs.map(
            ({ title, type, imageUrl, slug, date }, index) => (
              <NewsBlogItem
                title={title}
                type={type}
                imageUrl={imageUrl}
                slug={slug}
                date={date}
                key={index}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default LatestNewsBlog;
