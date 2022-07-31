import './Account.scss';

const Account = () => {
  return (
    <div className='account default'>
      <div className="accountWrapper">
        <h2 className="header">Hi, John.</h2>
        <h2 className="header">Account Settings</h2>
        <div className="accountSettings">
          <div className="container">
            <div className="title">Shipping</div>
            <div className="information">Shipping Address</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account