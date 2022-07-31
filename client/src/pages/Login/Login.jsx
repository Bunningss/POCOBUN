import './Login.scss';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { useState, useRef } from 'react';

const Login = () => {
  const emailRef = useRef();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const [ user, setUser ] = useState(false);

  const emailInput = [
    {
      id: 1,
      name: "email",
      errorMsg: "Enter a valid email address",
      placeholder: "Email address",
      type: 'email',
      required: true
    }
  ];
  const passInput = [
    {
      id: 1,
      name: "password",
      errorMsg: "Enter your password",
      placeholder: "Enter Password",
      type: 'password',
      required: true
    }
  ];

  const handleStart = async (e) => {
    e.preventDefault();
    email && setUser(true)
  };

  const handleFinish = async (e) => {
    e.preventDefault();
  }

  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className='login default'>
      <div className="loginWrapper">
        <h2 className="header">Welcome to POCOBUN</h2>
        { !user ?
            <form action="" className="loginForm">
              {
                emailInput.map((input) => (
                  <FormInput {...input} key={input.id} inputRef={emailRef} onChange={emailChange}/>
                ))
              }
              <PrimaryButton text={"Continue"} onClick={handleStart}/>
            </form> :
            <form action="" className="loginForm">
              {
                passInput.map((input) => (
                  <FormInput {...input} key={input.id} onChange={passChange}/>
                ))
              }
              <PrimaryButton text={"Continue"} onClick={handleFinish}/>
              {
                error ? <p className='redLight'>{error}</p> : null
              }
            </form>
        }
      </div>
    </div>
  )
}

export default Login