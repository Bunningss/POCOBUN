import "./Disclaimer.scss";

const Disclaimer = () => {
  return (
    <div className="disclaimer">
      <p>&copy; POCOBUN STORE LTD. 2021-2022. ALL RIGHTS RESERVED.</p>
      <p>
        POCOBUN and the POCOBUN STORE logo are registered trademarks of POCOBUN
        STORE LTD.
      </p>
      <p>
        POCOBUN STORE LTD. Registered office:{" "}
        <span>3 London Road, Essex, IG91 2GZ.</span>
      </p>
      <p>
        POCOBUN STORE LTD. a company incorporated in NORWAY under company
        number: <span>123456789</span>
      </p>
      <p>VAT Number: GB1234567890</p>
      <p>
        <a href="https://pocobun.herokuapp.com/" target="_blank">
          POCOBUN.COM
        </a>{" "}
        Online Website is owned and provided by POCOBUN GROUP LTD.
      </p>
      <p>-Any reproduction of the contents is strictly prohibited.</p>
    </div>
  );
};

export default Disclaimer;
