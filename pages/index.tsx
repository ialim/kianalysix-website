import FeaturedProjects from "../components/featured-projects";
import FeedBack from "../components/feed-back";
import LatestNewsBlog from "../components/latest-news-blog";
import ServicesSection from "../components/services-section";
import Page from "../layout/page";


const IndexPage = () => {
  return (
    <Page>
      <ServicesSection />
      <FeaturedProjects/>
      <LatestNewsBlog />
      <FeedBack/>
    </Page>
  );
};

export default IndexPage;
