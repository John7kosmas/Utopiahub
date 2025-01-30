
import Contact from "../src/components/Contact";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import SectionDivider from "../src/components/SectionDivider";
// import WaterHero from "../src/components/WaterHero";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});

const Index4 = () => {
  return (
    <Layout pageTitle={"Home #1"}>
      <WaterHero />
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Collection Section */}
      <Faq />
      {/* !Section FAQ */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section RoadMap */}
      <News />
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index4;