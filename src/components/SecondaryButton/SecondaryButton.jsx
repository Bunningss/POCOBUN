import "./SecondaryButton.scss";
import { Link } from "react-router-dom";

const SecondaryButton = ({ onClick, btnText }) => {
  return (
    <button className="secondaryBtn" onClick={onClick}>
      {btnText}
    </button>
  );
};

export default SecondaryButton;
