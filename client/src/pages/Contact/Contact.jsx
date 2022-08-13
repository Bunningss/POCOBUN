import './Contact.scss';
import { useState } from 'react';
import location from '../../img/location.png';
import phone from '../../img/phone.png';
import mail from '../../img/mail.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import FormInput from '../../components/FormInput/FormInput';
import HeaderGroup from '../../components/HeaderGroup/HeaderGroup';
import { scrollToTop } from '../../staticData';

const Contact = () => {
  scrollToTop();
  const [ error, setError ] = useState("");
  const [ response, setResponse ] = useState("");
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      required: true,
      minLength: 5,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
      minLength: 5,
    },
  ];
  const sendMessage = () => {
    // Logic goes here
  }
  return (
    <div className='contact default defaultPadding'>
        <div className="contactWrapper">
            <HeaderGroup smHeader={"get in touch"} header={"Send us a message"}/>
            <div className="contactContainer">
              <div className="contactLeft">
                <h4 className="subheader">More Information</h4>
                <div className="textGroup">
                  <img src={location} alt="Location Ping" className="icon" />
                  <p className="text">3 London Road, Essex, IG91 2GZ</p>
                </div>
                <div className="textGroup">
                  <img src={phone} alt="Telephone Icon" className="icon" />
                  <p className="text">+000-00000000</p>
                </div>
                <div className="textGroup">
                  <img src={mail} alt="Email Icon" className="icon" />
                  <p className="text">pocobun@pocobun.co.uk</p>
                </div>
                <div className="socials">
                  <a className='socialLink' href="www.google.com" target='_blank'>
                    <img src={facebook} alt="" className="icon" />
                  </a>
                  <a className='socialLink' href="www.google.com" target='_blank'>
                    <img src={instagram} alt="" className="icon" />
                  </a>
                  <a className='socialLink' href="www.google.com" target='_blank'>
                    <img src={twitter} alt="" className="icon" />
                  </a>
                </div>
              </div>
              <div className="contactRight">
                <form action="" className="contactForm">
                  <div className="inputGroup">
                    {
                      inputs.map((input) => (
                        <FormInput {...input} key={input.id}/>
                      ))
                    }
                  </div>
                  <textarea placeholder='Message' required></textarea>
                  {
                    error && <p className="redLight">Error Message</p>
                  }
                  {
                    response && <p className="greenLight">Success Message</p>
                  }
                  <PrimaryButton text={"Send Message"} onClick={sendMessage}/>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact