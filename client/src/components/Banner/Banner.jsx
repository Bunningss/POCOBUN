import './Banner.scss';
import { Link } from 'react-router-dom';

const Banner = ({ item }) => {
  return (
    <div className='banner'>
      <Link to={item.href}>
        <img src={item.img} alt="Banner Image" />
      </Link>
    </div>
  )
}

export default Banner