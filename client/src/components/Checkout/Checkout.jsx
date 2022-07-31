import './Checkout.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Checkout = () => {
  return (
    <div className='checkout'>
        <div className="checkoutContent">
          <h6>Total - 50£</h6>
        </div>
        <div className="checkoutBtn">
          <PrimaryButton text={"Proceed to checkout"}/>
        </div>
    </div>
  )
}

export default Checkout