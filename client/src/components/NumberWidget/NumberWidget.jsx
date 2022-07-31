import { useSelector } from 'react-redux';
import './NumberWidget.scss';

const NumberWidget = () => {
  const quantity = 3
  return (
    <span className='widget'>{quantity}</span>
  )
}

export default NumberWidget