import './LargeCard.scss';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Backdrop from '../Backdrop/Backdrop';
import { useState } from 'react';

const LargeCard = ({ pack }) => {
    const [ vis, setVis ] = useState(false);
    const { details, name, image, price, id } = pack;
  return (
    <Link className='largeCardLink' to="/product/hjdfdhuf" onMouseEnter={() => setVis(true)} onMouseLeave={() => setVis(false)}>
        <div className='largeCard'>
            <div className="largeCardContainer">
                <h4 className="productTitle">{name}</h4>
                <h4 className="productPrice">Only at {price}£</h4>
                <div className="productContent">
                    <img src={image} alt="" className="productImg" />
                    <div className="productDetails">
                        <h4>Contains 10 packs of candy</h4>
                        <h4>Contains 10 packs of coffee</h4>
                        <h4>Contains 10 packs of milk</h4>
                        <h4>Contains 10 packs of sugar</h4>
                        <h4>Contains 10 packs of oat milk</h4>
                        <h4>Contains 10 cans of energy drink</h4>
                        <h4>Contains 10 packs of chips</h4>
                    </div>
                </div>
            </div>
            <PrimaryButton text={"what's in the pack"}/>
            <Backdrop vis={vis}/>
        </div>
    </Link>
  )
}

export default LargeCard