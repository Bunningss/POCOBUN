import "./OrderItem.scss";
import demo from "../../img/products/watche - 1.webp";

const OrderItem = () => {
  return (
    <div className="orderItem">
      <div className="orderItemImg">
        <img src={demo} alt="" />
      </div>
      <div className="orderItemInfo">
        <h6 className="text">Smart Watch</h6>
        <h6 className="text">Quantity: 10</h6>
      </div>
      <div className="orderDeliveryInfo">
        <h6 className="text">Delivery Date: 31 July 2022</h6>
        <h6 className="text">Contact Email: john@gmail.com</h6>
      </div>
    </div>
  );
};

export default OrderItem;
