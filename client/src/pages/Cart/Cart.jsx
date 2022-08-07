import './Cart.scss';
import CartItem from '../../components/CartItem/CartItem';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import TitleGroup from '../../components/TitleGroup/TitleGroup';

const Cart = () => {
  const handleClick = () => {
    // logic to remove from cart
  }

  const handleCheckout = () => {
    // logic to start checkout process
  }
  
  return (
      <div className='cart default defaultPadding'>
        <TitleGroup header={"Review your bag"} title={"Free delivery and free returns."}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <CartItem handleClick={handleClick}/>
          <div className="checkout">
            <PrimaryButton text={"Proceed to checkout"} onClick={handleCheckout}/>
          </div>
      </div>
  )
}

export default Cart