import './Product.scss';
import { useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import plus from '../../img/plus.png';
import minus from '../../img/minus.png';
import Feature from '../../components/Feature/Feature';
import Buystrip from '../../components/Buystrip/Buystrip';
import { useEffect } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Modal from '../../components/Modal/Modal';
import { product } from '../../staticData';

const Product = () => {
  const [ quantity, setQuantity ] = useState(1);
  const [ modalImg, setModalImg ] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity-1);
    } else {
      setQuantity(quantity+1)
    }
  }

  return (
    <>
    <div className='product default'>
      {
        modalImg && <Modal modalImg={modalImg} setModalImg={setModalImg}/>
      }
      <div className="productLeft">
        <img src={product.image[0]} alt={product.name} className="productImg" />
        <Buystrip/>
      </div>
      <div className="productRight">
        <h2 className="headerText">{product.name}</h2>
        <h3 className="headerText price">Price - {product.price}£</h3>
        <div className="features">
          <Feature/>
          <Feature/>
        </div>
        <Gallery setModalImg={setModalImg} images={product.image}/>
        <div className="quantity">
          <p>Select Quantity: </p>
          <div className="quantityWrapper">
            <img onClick={() => handleQuantity("dec")} src={minus} alt="" />
            <span>{quantity}</span>
            <img onClick={() => handleQuantity("inc")} src={plus} alt="" />
          </div>
        </div>
        <PrimaryButton text={"Add to Bag"}/>
      </div>
    </div>
{/* Information Part */}
  <div className="pr-textZone">
    <h2 className="header">Product Information</h2>
  </div>
    </>
  )
}

export default Product