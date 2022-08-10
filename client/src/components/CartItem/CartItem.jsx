import './CartItem.scss';
import WarningButton from '../WarningButton/WarningButton';

const CartItem = ({ handleClick, item }) => {
  return (
    <div className='cartItem'>
        <div className="imageContainer">
            <img src={item.img} alt='' />
        </div>
        <div className="textZone">
            <h6 className='text'>{item.name}</h6>
            <p className='text quantity'>Quantity - {item.quantity}</p>
            <p className='text price'>Price - {item.price}£</p>
            <WarningButton text={"Remove"} onClick={handleClick}/>
        </div>
    </div>
  )
}

export default CartItem