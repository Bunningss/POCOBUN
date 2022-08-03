import Slider from '../../components/Slider/Slider';
import './Home.scss';
import { sliderData, pastaPacks } from '../../staticData';
import { bannerData, productsData } from '../../staticData';
import Section from '../../components/Section/Section';
import Banner from '../../components/Banner/Banner';
import LargeCard from '../../components/LargeCard/LargeCard';
import HeaderGroup from '../../components/HeaderGroup/HeaderGroup';

const Home = () => {

  return (
    <div className='home default'>
          <Slider items={sliderData}/>
          {
            bannerData.map((item) => (
              <Banner item={item} key={item.id}/>
            ))
          }
          <Section smHeader={"— new collection"} header={"Featured Products"} section={productsData}/>
          <Section smHeader={"— new collection"} header={"Hot Deals"} section={productsData}/>
          <div className="pastaPacks">
            <HeaderGroup header={"Package Deals"} smHeader={"— gift pack collection"}/>
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