import './CartItem.scss';
import WarningButton from '../WarningButton/WarningButton';
import demo from '../../img/products/watche (1).png';

const CartItem = ({ item }) => {
  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={demo} alt='' />
        </div>
        <div className="textZone">
            <h6>smart watch</h6>
            <p>Quantity - 10</p>
            <p>Price - 40£</p>
            <WarningButton text={"Remove"}/>
        </div>
    </div>
  )
}

export default CartItem