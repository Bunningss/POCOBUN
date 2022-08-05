import './Review.scss';

const Review = ({r, handleClick}) => {
  return (
    <h6 onClick={handleClick} className="reviewNumber subheader">{r}</h6>
  )
}

export default Review