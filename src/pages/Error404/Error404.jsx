import "./Error404.scss";
import { scrollToTop } from "../../staticData";

const Error404 = () => {
  scrollToTop();
  return (
    <div className="err404 default">
      <h2>404!</h2>
      <h3>the page you are looking for could not be found</h3>
    </div>
  );
};

export default Error404;
