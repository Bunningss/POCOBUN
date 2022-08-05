import CartItem from '../../components/CartItem/CartItem';
import './Cart.scss';
import Checkout from '../../components/Checkout/Checkout';

const Cart = () => {
  const handleClick = () => {
    // logic to remove from cart
  }
  return (
      <div className='cart default defaultPadding'>
          <h2 className="header">Review your bag.</h2>
          <h4 className="title">Free delivery and free returns.</h4>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
      </div>
  )
}

export default Cart