import './LargeCard.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';

const LargeCard = ({ pack }) => {
    const [ vis, setVis ] = useState(false);
    const { details, name, image, price, id } = pack;
  return (
    <Link className='largeCardLink' to="/product/hjdfdhuf" onMouseEnter={() => setVis(true)} onMouseLeave={() => setVis(false)}>
        <div className='largeCard'>
            <div className="largeCardContainer">
                <h4 className="title">{name}</h4>
                <h4 className="subheader">Only at £{price}</h4>
                <div className="productContent">
                    <img src={image} alt="" className="productImg" />
                    <div className="productDetails">
                        <p className='text'>Contains 10 packs of candy</p>
                        <p className='text'>Contains 10 packs of candy</p>
                        <p className='text'>Contains 10 packs of candy</p>
                        <p className='text'>Contains 10 packs of candy</p>
                        <p className='text'>Contains 10 packs of candy</p>
                        <p className='text'>Contains 10 packs of candy</p>
                        <p className='text'>Contains 10 packs of candy</p>
                    </div>
                </div>
            </div>
            <Backdrop vis={vis}/>
        </div>
    </Link>
  )
}

export default LargeCard