import './Rating.scss';
import Review from '../Rate/Rate';
import HeaderGroup from '../HeaderGroup/HeaderGroup';

const reviewNum = [1,2,3,4,5]

const Rating = ({rating}) => {
    const onclick = () => {
        // backend logic to update rating
    }
  return (
    <div className='rate'>
        <h6 className='rating'><span>{rating}</span>/5</h6>
        <div className="rev">
            <HeaderGroup smHeader={"Leave a review"} header={"Rate this product"}/>
            <div className="reviewGroup">
                {
                    reviewNum.map((r, index) => (
                        <Review r={r} key={index} handleClick={onclick}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Rating