import './Backdrop.scss';

const Backdrop = ({ vis }) => {
  return (
    <div className={vis ? 'backdrop visible' : 'backdrop'}>
        <div className="backdropCircle">
            <h6>Find out more!</h6>
        </div>
    </div>
  )
}

export default Backdrop