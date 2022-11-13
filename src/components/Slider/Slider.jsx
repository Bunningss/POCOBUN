import "./Slider.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryButton from "../SecondaryButton/SecondaryButton";

const Slider = ({ items }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index + 1);
    if (index >= items.length - 1) {
      setIndex(0);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [index]);

  const handleClick = () => {
    navigate("/store");
  };

  return (
    <div className="slider-fs">
      <div className="slider-col">
        <h1 className="tagline">
          This Summer <br />
          Live for <span>Fashion</span>
        </h1>
        <SecondaryButton btnText={"shop now"} onClick={handleClick} />
      </div>
      <div
        className="slider-col"
        style={{ backgroundImage: `url(${items[index]})` }}
      ></div>
    </div>
  );
};

export default Slider;
