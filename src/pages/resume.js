import Head from "next/head";
import { ResumeSection } from "../components/containers";
import { Layout2 } from "../components/layout";
import { SectionHeading } from "../components/utils";

const resume = () => {
  return (
    <Layout2>
      <Head>
        <title>Resume - Zack Heilman</title>
      </Head>

      {/* Start Resume Section */}
      <section
        name="section-resume"
        className="resume-section pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="container mx-auto">
          <SectionHeading
            title="Experience"
            animated={false}
          />
          <ResumeSection />
        </div>
      </section>
      {/* End Resume Section */}

      <span className="block pb-24 lg:pb-28 xl:pb-32"></span>
    </Layout2>
  );
};

export default resume;
