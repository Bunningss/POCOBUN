import "./Rate.scss";

const Rate = ({ r, handleClick }) => {
  return (
    <h6 onClick={handleClick} className="rateNumber subheader">
      {r}
    </h6>
  );
};

export default Rate;
