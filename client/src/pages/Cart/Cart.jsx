import CartItem from '../../components/CartItem/CartItem';
import './Cart.scss';
import Checkout from '../../components/Checkout/Checkout';

const Cart = () => {
  return (
      <div className='cart default defaultPadding'>
          <h2 className="header">Review your bag.</h2>
          <h4 className="title">Free delivery and free returns.</h4>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <Checkout/>
      </div>
  )
}

export default Cart