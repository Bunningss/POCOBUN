import "./BackToTop.scss";
import arrow from "../../img/arrow-org.png";
import { useWindowScrollPositions } from "../../staticData";

const BackToTop = () => {
  const { scrollX, scrollY } = useWindowScrollPositions();

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <img
      src={arrow}
      onClick={handleClick}
      alt=""
      className={scrollY > 1000 ? "iconToTop slideUp" : "iconToTop"}
    />
  );
};

export default BackToTop;
