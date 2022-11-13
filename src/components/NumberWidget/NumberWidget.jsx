import "./NumberWidget.scss";

const NumberWidget = () => {
  const quantity = 3; // Number of products in shopping cart.
  return <span className="widget">{quantity}</span>;
};

export default NumberWidget;
