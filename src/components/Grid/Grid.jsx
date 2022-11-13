import "./Grid.scss";
import { Link } from "react-router-dom";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Grid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((item, index) => (
        <Link className="gridImgContainer" to={item.href} key={index}>
          <div
            className="gridImg"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
          <div className="gridText">
            <h4 className="header">{item.tagline}</h4>
            <h2 className="subheader">{item.text}</h2>
            <SecondaryButton btnText={"Shop Now"} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
