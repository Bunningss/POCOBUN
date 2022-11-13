import "./Details.scss";
import HeaderGroup from "../HeaderGroup/HeaderGroup";
import Rating from "../Rating/Rating";

const Details = ({ c }) => {
  return (
    <div className="productInfo">
      {c.title && <HeaderGroup smHeader={c.title} />}
      <p className="text">{c.info}</p>
      {c.rating && <Rating rating={c.rating} />}
    </div>
  );
};

export default Details;
