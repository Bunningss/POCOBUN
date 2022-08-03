import './Section.scss';
import Card from '../Card/Card'
import HeaderGroup from '../HeaderGroup/HeaderGroup';

const Section = ({smHeader, header, section }) => {
  return (
    <div className="section">
      {
        smHeader && 
        <HeaderGroup smHeader={smHeader} header={header}/>
      }
        <div className="cardContainer">
          {
            section?.map((item) => (
              <Card key={item.id} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default Section