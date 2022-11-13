import "./Home.scss";
import { sectionData, sliderData, packages, gridData } from "../../staticData";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";
import LargeCard from "../../components/LargeCard/LargeCard";
import HeaderGroup from "../../components/HeaderGroup/HeaderGroup";
import Grid from "../../components/Grid/Grid";
import { scrollToTop } from "../../staticData";

const Home = () => {
  scrollToTop();
  // **Section displays maximum 5 products
  return (
    <div className="home default">
      <Slider items={sliderData} />
      <Grid items={gridData} />
      <Section
        smHeader={"new collection"}
        header={"Featured Products"}
        section={sectionData}
      />
      <Section
        smHeader={"new collection"}
        header={"Hot Deals"}
        section={sectionData}
      />
      <div className="pastaPacks">
        <HeaderGroup
          header={"Package Deals"}
          smHeader={"gift pack collection"}
        />
        <div className="pastaPackWrapper">
          {packages.map((pack) => (
            <LargeCard pack={pack} key={pack.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
