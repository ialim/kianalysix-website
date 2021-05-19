import ServiceBadge, {
  ServiceBadgeProp,
} from "../../../components/service-badge";
import ServiceContainer from "../../../components/service-container";
import ServiceContentContainer from "../../../components/service-content-container";
import ServiceContentItem, {
  serviceContentItemProp,
} from "../../../components/service-content-item";
import ServiceExcerpt, {
  serviceExcerptProp,
} from "../../../components/service-excerpt";
import ServiceHeading, {
  serviceHeadingProp,
} from "../../../components/service-heading";
import ServiceHeroImage, {
  serviceHeroImageProps,
} from "../../../components/service-hero";
import Page from "../../../layout/page";

interface servicePageProps
  extends serviceHeroImageProps,
    ServiceBadgeProp,
    serviceExcerptProp,
    serviceHeadingProp {
  content: serviceContentItemProp[];
}

const index = ({
  bgImage,
  title,
  subtitle,
  heading,
  excerpt,
  badge,
  content = [],
}: servicePageProps) => {
  return (
    <Page>
      <ServiceHeroImage title={title} bgImage={bgImage} subtitle={subtitle} />
      <ServiceBadge badge={badge} />
      <ServiceContainer>
        <ServiceExcerpt excerpt={excerpt} />
        <ServiceContentContainer>
          <ServiceHeading heading={heading} />
          {content.map(({head, imageUrl, content, reverse}, index) => (
            <ServiceContentItem head={head} imageUrl={imageUrl} content={content} key={index} reverse={reverse}/>
          ))}
        </ServiceContentContainer>
      </ServiceContainer>
    </Page>
  );
};

export default index;
