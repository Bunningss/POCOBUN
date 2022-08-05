import './Newsletter.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import FormInput from '../FormInput/FormInput'
import { useState } from 'react';
import { useEffect } from 'react';
import Terms from '../Terms/Terms';
import HeaderGroup from '../HeaderGroup/HeaderGroup';

const Newsletter = () => {
  const [ error, setError ] = useState('');
  const [ res, setRes ] = useState('');
  const [ values, setValues ] = useState({
    name: "",
    email: ""
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMsg: "Enter your full name",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email Address",
      errorMsg: "Enter a valid email address",
      required: true
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onClick = async (e) => {
      e.preventDefault();
    try {
      const res = await publicRequest.post("/news", values)
      setRes(res.data.msg)
    } catch (err) {
      setError(err.response.data.msg)
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
      setRes("");
    }, 10000);
  }, [error || res])

  return (
    <div className='newsletter'>
        <div className="wrapper">
          <HeaderGroup header={"subscribe to our newsletter"} smHeader={"newsletter"}/>
            <form action="" onSubmit={onClick} className="newsForm">
              {
                inputs.map((input) => (
                  <FormInput {...input} key={input.id} onChange={onChange} value={values[input.name]} />
                ))
              }
                <PrimaryButton text={"Subscribe"}/>
                {
                  error && <p className='redLight'>{error}</p>
                }
                {
                  res && <p className='greenLight'>{res}</p>
                }
                <Terms/>
            </form>
        </div>
    </div>
  )
}

export default Newsletter