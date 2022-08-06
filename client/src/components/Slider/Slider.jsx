import './Slider.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = ({ items }) => {
  const [ index, setIndex ] = useState(0);

  const nextSlide = () => {
    setIndex(index+1)
    if (index >= items.length - 1) {
      setIndex(0)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 5000)
  }, [index])

  return (
    <div className='slider'>
      <div className="wrapper">
        <img src={items[index]} alt="" className="sliderImg" />
      </div>
    </div>
  )
}

export default Slider