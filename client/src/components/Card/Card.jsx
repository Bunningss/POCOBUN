import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item?._id}`}>
        <div className="wrapper">
          <div className="textZone">
            <p className='text'>{item?.tag}</p>
            <h4 className='title'>{item?.name}</h4>
            <p className='text'>Price - {item?.price}£</p>
          </div>
          <img src={item?.image[0]} alt="" className="cardImg" />
        </div>
      </Link>
    </div>
  )
}

export default Card