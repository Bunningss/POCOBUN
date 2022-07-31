import './Order.scss';
import OrderItem from '../OrderItem/OrderItem';

const Order = () => {
  return (
    <div className='order'>
        <div className="orderInfo">
            <h6>Order Date: 28 July 2022</h6>
            <h6>Total Price: 200£</h6>
        </div>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
    </div>
  )
}

export default Order