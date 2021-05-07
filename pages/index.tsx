import AboutUs from "../components/about-us";
import FeaturedProjects from "../components/featured-projects";
import FeedBack from "../components/feed-back";
import HeroImage from "../components/hero-image";
import LatestNewsBlog from "../components/latest-news-blog";
import ServicesSection from "../components/services-section";
import Page from "../layout/page";


const IndexPage = () => {
  return (
    <Page>
      <HeroImage />
      <AboutUs />
      <ServicesSection />
      <FeaturedProjects/>
      <LatestNewsBlog />
      <FeedBack/>
    </Page>
  );
};

export default IndexPage;
