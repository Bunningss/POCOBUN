import './HeaderGroup.scss';

const HeaderGroup = ({ smHeader, header }) => {
  return (
    <div className="headerGroup">
      {
        smHeader && <h6 className="text">— {smHeader}</h6>
      }
        {
          header && <h2 className='header'>{header}</h2>
        }
    </div>
  )
}

export default HeaderGroup