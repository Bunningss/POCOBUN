import './Heart.scss';
import heart from '../../img/heart.png';

const Heart = () => {
  return (
    <div className='heart'>
        <img src={heart} alt="" className="icon" />
    </div>
  )
}

export default Heart