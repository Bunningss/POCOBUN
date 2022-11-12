import './Modal.scss';
import close from '../../img/multiply.png';

const Modal = ({ modalImg, setModalImg }) => {
    const handleClick = (e) => {
        if (e.target.className !== "modalImg") {
            setModalImg('')
        }
    }
  return (
    <div className='modal default' onClick={handleClick}>
        <img src={modalImg} alt="" className="modalImg" />
        <img src={close} alt="" className="icon" />
    </div>
  )
}

export default Modal