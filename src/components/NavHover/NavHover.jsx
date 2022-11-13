import "./NavHover.scss";
import { Link } from "react-router-dom";
import NumberWidget from "../NumberWidget/NumberWidget";

const NavHover = ({ visible }) => {
  return (
    <div className={visible ? "navHover visible" : "navHover"}>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign Up</Link>
      <Link to="/myorders">My orders</Link>
      <Link to="/wishlist">Wishlist</Link>
      <div className="sbagWrapper">
        <Link to="/Cart">Shopping Bag</Link>
        <NumberWidget />
      </div>
    </div>
  );
};

export default NavHover;
