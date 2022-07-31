import './Orders.scss';
import { Link } from 'react-router-dom';
import Order from '../../components/Order/Order';
import arrow from '../../img/arrow.png';

const Orders = () => {
  return (
    <div className='orders default'>
      <div className="ordersWrapper">
        <Link to='/myaccount' className="linkSection">
          <h6 className='accountLink'>Account Settings</h6>
          <img src={arrow} alt="" className="icon" />
        </Link>
        <h2 className="header">Products you've ordered.</h2>
        <p className="orderInfo">Only purchases from the last 18 months will be shown here.</p>
        <div className="ordersContent">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  )
}

export default Orders