import './HeaderGroup.scss';

const HeaderGroup = ({ smHeader, header }) => {
  return (
    <div className="headerGroup">
        <h6 className="text">{smHeader}</h6>
        <h2 className='header'>{header}</h2>
    </div>
  )
}

export default HeaderGroup