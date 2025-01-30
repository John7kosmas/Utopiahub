
import RoadMapSlider from "../src/components/GM2";
import SectionDivider from "../src/components/SectionDivider";
// import WaterHero from "../src/components/WaterHero";
import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr:false,
});

const Index4 = () => {
  return (
    <Layout pageTitle={"GAMING LIBRARY 3"}>
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      </Layout>
  );
};
export default Index4;
