import "./Wishlist.scss";
import TitleGroup from "../../components/TitleGroup/TitleGroup";
import CartItem from "../../components/CartItem/CartItem";
import { cartData } from "../../staticData";
import { scrollToTop } from "../../staticData";

const Wishlist = () => {
  scrollToTop();
  const handleClick = () => {
    // logic to remove from wishlist
  };

  return (
    <div className="wishlist default defaultPadding">
      <div className="wishlistWrapper">
        <TitleGroup header={"Favourite items"} title={"Items that you love."} />
        {cartData.map((data) => (
          <CartItem handleClick={handleClick} item={data} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
