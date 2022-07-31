import './Error404.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const Error404 = () => {
  return (
    <div className='err404 default'>
      <h2>404!</h2>
      <h3>the page you are looking for could not be found</h3>
    </div>
  )
}

export default Error404