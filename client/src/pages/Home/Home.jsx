import Slider from '../../components/Slider/Slider';
import './Home.scss';
import { sliderData, pastaPacks } from '../../staticData';
import { bannerData, productsData } from '../../staticData';
import Section from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import LargeCard from '../../components/LargeCard/LargeCard';

const Home = () => {

  return (
    <div className='home default'>
          <Slider items={sliderData}/>
          {
            bannerData.map((item) => (
              <Banner item={item} key={item.id}/>
            ))
          }
          <Section header={"Featured Products"} section={productsData}/>
          <Section header={"Hot Deals"} section={productsData}/>
          <div className="pastaPacks">
            <h2 className="sectionHeader">Package Deals</h2>
            <div className="pastaPackWrapper">
              {
                pastaPacks.map((pack) => (
                  <LargeCard pack={pack} key={pack.id}/>
                ))
              }
            </div>
          </div>
    </div>
  )
}

export default Home