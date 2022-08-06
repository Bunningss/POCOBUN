import './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Cart = () => {
  const handleClick = () => {
    // logic to remove from cart
  }

  const handleCheckout = () => {
    // logic to start checkout process
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
          <PrimaryButton text={"Proceed to checkout"} onClick={handleCheckout}/>
      </div>
  )
}

export default Cart