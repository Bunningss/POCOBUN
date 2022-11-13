import "./Footer.scss";
import logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <h2>
        Developed By <span>Mahmud</span>
      </h2>
      <h6>Maintained By</h6>
      <img className="footerLogo" src={logo} alt="Briton Group" />
    </div>
  );
};

export default Footer;
