import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import { Element as Section } from "react-scroll";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  PortfoliosSection,
  ResumeSection,
} from "../components/containers";
import { Layout } from "../components/layout";
import { SectionHeading } from "../components/utils";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Zack Heilman</title>
      </Head>

      {/* Start Hero Section */}
      <Section name="section-home">
        <HeroSection typed={false} />
      </Section>
      {/* End Hero Section */}

      {/* Start Resume Section */}
      <Section
        name="section-resume"
        className="resume-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <ResumeSection />
        </div>
      </Section>
      {/* End Resume Section */}

      {/* Start Portfolios Section */}
        <Section
          name="section-portfolios"
          className="portfolios-section pt-24 lg:pt-28 xl:pt-32"
        >
          <div className="container mx-auto">
            <PortfoliosSection />
          </div>
        </Section>
      {/* End Portfolios Section */}

      {/* Start Contact Section */}
      <Section
        name="section-contact"
        className="contact-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <ContactSection />
        </div>
      </Section>
      {/* End Contact Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout>
  );
};

export default index;