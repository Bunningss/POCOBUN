import './Search.scss';
import { useLocation } from 'react-router-dom';
import { sectionData } from '../../staticData';
import HeaderGroup from '../../components/HeaderGroup/HeaderGroup';
import Card from '../../components/Card/Card';
import { scrollToTop } from '../../staticData';

const Search = () => {
  scrollToTop();
    const searched = useLocation()?.pathname?.split('/')[2]?.split("%20")?.join(" ");
    // Fetch items from databases based on input by user and display them 
  return (
    <div className='search default defaultPadding'>
        <HeaderGroup smHeader={"Search results for"} header={`"${searched}"`}/>
        <div className="searchResults">
          {
            sectionData.map((data, index) => (
              <Card item={data} key={index}/>
            ))
          }
        </div>
    </div>
  )
}

export default Search