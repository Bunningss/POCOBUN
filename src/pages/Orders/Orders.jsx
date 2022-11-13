import "./Orders.scss";
import { Link } from "react-router-dom";
import Order from "../../components/Order/Order";
import arrow from "../../img/arrow.png";
import TitleGroup from "../../components/TitleGroup/TitleGroup";
import { scrollToTop } from "../../staticData";

const Orders = () => {
  scrollToTop();
  return (
    <div className="orders default defaultPadding">
      <div className="ordersWrapper">
        <Link to="/myaccount" className="linkSection">
          <h6 className="accountLink">Account Settings</h6>
          <img src={arrow} alt="" className="icon" />
        </Link>
        <TitleGroup
          header={"Products you've ordered"}
          title={"Products purchased in the last 18 months will be shown here."}
        />
        <div className="ordersContent">
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Orders;
