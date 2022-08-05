import HeaderGroup from '../HeaderGroup/HeaderGroup';
import Rating from '../Rating/Rating';
import './Details.scss';

const Details = ({ c }) => {
  return (
    <div className='productInfo'>
        <HeaderGroup smHeader={c.title}/>
        <p className='text'>{c.info}</p>
        {
          c.rating && <Rating rating={c.rating}/>
        }
    </div>
  )
}

export default Details