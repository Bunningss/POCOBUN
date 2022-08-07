import './Card.scss';
import { Link } from 'react-router-dom';
import Heart from '../Heart/Heart';
import Review from '../Review/Review';

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item?._id}`}>
        <div className="wrapper">
          <div className="textZone">
            <p className='text'>{item?.tag}</p>
            <h4 className='title'>{item?.name}</h4>
            <div className="priceGroup">
              <p className="text oldPrice">20.99</p>
              <p className='text price'>£{item?.price}</p>
            </div>
          </div>
          <img src={item?.image[0]} alt="" className="cardImg" />
        </div>
      </Link>
      <Heart/>
      <Review/>
    </div>
  )
}

export default Card