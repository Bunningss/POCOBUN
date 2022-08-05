import './Wishlist.scss';
import HeaderGroup from '../../components/HeaderGroup/HeaderGroup';
import CartItem from '../../components/CartItem/CartItem';

const Wishlist = () => {
    const handleClick = () => {
        // logic to remove from wishlist
    }
  return (
    <div className='wishlist default defaultPadding'>
        <div className="wishlistWrapper">
          <h2 className="header">Favourite Items</h2>
          <h4 className="title">Items that you love.</h4>
            <CartItem handleClick={handleClick}/>
            <CartItem handleClick={handleClick}/>
            <CartItem handleClick={handleClick}/>
            <CartItem handleClick={handleClick}/>
            <CartItem handleClick={handleClick}/>
        </div>
    </div>
  )
}

export default Wishlist