import './CartItem.scss';
import WarningButton from '../WarningButton/WarningButton';
import demo from '../../img/products/watche - 1.webp';

const CartItem = () => {
  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={demo} alt='' />
        </div>
        <div className="textZone">
            <h6 className='text'>smart watch</h6>
            <p className='text'>Quantity - 10</p>
            <p className='text'>Price - 40£</p>
            <WarningButton text={"Remove"}/>
        </div>
    </div>
  )
}

export default CartItem