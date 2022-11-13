import "./Category.scss";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { handleClick, item } = props;
  return (
    <Link to={item.href} onClick={handleClick}>
      <div className="category">
        <img src={item.img} alt="" />
        <p className="text">{item.name}</p>
      </div>
    </Link>
  );
};

export default Category;
