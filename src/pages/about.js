import Head from "next/head";
import {
  AboutSection,
} from "../components/containers";
import { Layout2 } from "../components/layout";
import { SectionHeading } from "../components/utils";

const about = () => {
  return (
    <Layout2>
      <Head>
        <title>About - Zack Heilman</title>
      </Head>

      {/* Start About Section */}
      <section className="about-section pt-24 lg:pt-28 xl:pt-32">
        <div className="container mx-auto">
          <SectionHeading title="About Me" watermark="About" animated={false} />
          <AboutSection />
        </div>
      </section>
      {/* End About Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout2>
  );
};

export default about;
