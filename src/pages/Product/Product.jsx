import "./Product.scss";
import { useState } from "react";
import plus from "../../img/plus.png";
import minus from "../../img/minus.png";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Feature from "../../components/Feature/Feature";
import Buystrip from "../../components/Buystrip/Buystrip";
import Gallery from "../../components/Gallery/Gallery";
import Modal from "../../components/Modal/Modal";
import Dropdown from "../../components/Dropdown/Dropdown";
import HeaderGroup from "../../components/HeaderGroup/HeaderGroup";
import { product, scrollToTop } from "../../staticData";

const Product = () => {
  scrollToTop();
  const [quantity, setQuantity] = useState(1);
  const [modalImg, setModalImg] = useState("");

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <div className="product default">
        {modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg} />}
        <div className="productLeft">
          <img
            src={product.image[0]}
            alt={product.name}
            className="productImg"
          />
          <Buystrip />
        </div>
        <div className="productRight">
          <h2 className="header">{product.name}</h2>
          <div className="priceGroup">
            <h3 className="subheader">£19.99</h3>
            <h3 className="title">£{product.price}</h3>
          </div>
          <div className="features">
            <Feature />
            <Feature />
          </div>
          <Gallery setModalImg={setModalImg} images={product.image} />
          <div className="quantity">
            <p className="text">Select Quantity: </p>
            <div className="quantityWrapper">
              <img onClick={() => handleQuantity("dec")} src={minus} alt="" />
              <span className="text">{quantity}</span>
              <img onClick={() => handleQuantity("inc")} src={plus} alt="" />
            </div>
          </div>
          <PrimaryButton text={"Add to Bag"} />
        </div>
      </div>
      {/* Information Part */}
      <div className="pr-textZone">
        <HeaderGroup smHeader={"details"} header={"product Information"} />
        <Dropdown details={product.details} />
      </div>
    </>
  );
};

export default Product;
