import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { linkBar } from "../../staticData";
import logo from "../../img/logo wt.png";
import bag from "../../img/shoppingBag.png";
import Hamburger from "../Hamburger/Hamburger";
import ListItem from "../ListItem/ListItem";
import NavHover from "../NavHover/NavHover";

const Navbar = ({ active, setActive }) => {
  const [vis, setVis] = useState(false);
  return (
    <div className="nav">
      <div className="navContainer">
        <Link className="logoContainer" to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <ul className="navList">
          {linkBar.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="bagWrapper" onClick={() => setVis(!vis)}>
          <img src={bag} alt="" className="bag" />
          <NavHover visible={vis} />
        </div>
      </div>
      <Hamburger active={active} setActive={setActive} />
    </div>
  );
};

export default Navbar;
