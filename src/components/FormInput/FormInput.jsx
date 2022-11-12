import './FormInput.scss';
import { useState } from 'react';

const FormInput = ( props ) => {
  const [ focused, setFocused ] = useState(false);
  const { label, id, onChange, inputRef, errorMsg, ...others } = props;

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div>
      <label className='inputLabel text'>{label}</label>
      <input ref={inputRef} className='formInput' {...others} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <span className='error'>{errorMsg}</span>
    </div>

  )
}

export default FormInput