import './Account.scss';
import { useState } from 'react';
import TitleGroup from '../../components/TitleGroup/TitleGroup';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Account = () => {
  const [ values, setValues ] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [ error, setError ] = useState("");
  const [ response, setResponse ] = useState("")
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  let username = "John Doe" // In a complete application we fetch username from database.
  let email = "john@gmail.com" // In a complete application we fetch email from database.
  const inputs = [
    {
      id: 1,
      label: "Name",
      inputs: {
        name: "name",
        type: "text",
        placeholder: username,
        minLength: 5,
        errorMsg: "Enter a proper name"
      }
    },
    {
      id: 2,
      label: "Email",
      inputs: {
        name: "email",
        type: "email",
        placeholder: email,
        minLength: 5,
        errorMsg: "Enter a proper email"
      }
    },
    {
      id: 3,
      label: "Password",
      inputs: {
        name: "password",
        type: "password",
        placeholder: "********",
        minLength: 8,
        errorMsg: "Enter a proper password"
      }
    },
  ];

  const handleClick = async (e) => {
    // updating info backend logic
  }
  return (
    <div className='account default defaultPadding'>
      <div className="accountTitle">
        <TitleGroup header={"Hi, John."} title={"Account Settings."}/>
      </div>
      <form className="accountContent">
        {
          inputs.map((input, index) => (
            <FormInput {...input.inputs} label={input.label} key={index} value={values[input.name]} onChange={onChange}/>
          ))
        }
        {
          error && <p className="redLight">Error Message</p>
        }
        {
          response && <p className="greenLight">Success Message</p>
        }
        <PrimaryButton text={"update"} onClick={handleClick}/>
      </form>
    </div>
  )
}

export default Account