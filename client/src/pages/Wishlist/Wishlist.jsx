import './Wishlist.scss';
import TitleGroup from '../../components/TitleGroup/TitleGroup';
import CartItem from '../../components/CartItem/CartItem';

const Wishlist = () => {
    const handleClick = () => {
        // logic to remove from wishlist
    }
  return (
    <div className='wishlist default defaultPadding'>
        <div className="wishlistWrapper">
          <TitleGroup header={"Favourite items"} title={"Items that you love."}/>
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