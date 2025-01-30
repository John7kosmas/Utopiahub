
import RoadMapSlider from "../src/components/GM1";
import SectionDivider from "../src/components/SectionDivider";
// import WaterHero from "../src/components/WaterHero";
import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr:false,
});

const Index5 = () => {
  return (
    <Layout pageTitle={"GAMING LIBRARY 1"}>
      <RoadMapSlider />
      {/* !Section RoadMap */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      </Layout>
  );
};
export default Index5;
