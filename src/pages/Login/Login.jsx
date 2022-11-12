import './Login.scss';
import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import HeaderGroup from '../../components/HeaderGroup/HeaderGroup';
import { scrollToTop } from '../../staticData';

const Login = () => {
  scrollToTop();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ error, setError ] = useState("");
  const [ user, setUser ] = useState(false);

  const emailInput = {
      id: 1,
      name: "email",
      errorMsg: "Enter a valid email address",
      placeholder: "Email address",
      type: 'email',
      required: true
    }
  const passInput = {
      id: 2,
      name: "password",
      errorMsg: "Enter your password",
      placeholder: "Enter Password",
      type: 'password',
      required: true
    }

  const handleStart = async (e) => {
    e.preventDefault();
    email && setUser(true)
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    // backend logic to login user
  }

//updating input values
  const emailChange = (e) => {
    setEmail(e.target.value)
  }
  const passChange = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div className='login default defaultPadding'>
      <div className="loginWrapper">
        <HeaderGroup smHeader={"Login"} header={"Sign into your account"}/>
        { !user ?
            <form action="" className="loginForm">
              {
                  <FormInput {...emailInput} onChange={emailChange}/>
              }
              <PrimaryButton text={"Continue"} onClick={handleStart}/>
            </form> :
            <form action="" className="loginForm">
              {
                  <FormInput {...passInput} onChange={passChange}/>
              }
              {
                error && <p className='redLight'>{error}</p>
              }
              <PrimaryButton text={"Continue"} onClick={handleFinish}/>
            </form>
        }
      </div>
    </div>
  )
}

export default Login