import './TitleGroup.scss';

const TitleGroup = ({header, title}) => {
  return (
    <div className='titleGroup'>
        <h2 className="header">{header}</h2>
        <h4 className="title">{title}</h4>
    </div>
  )
}

export default TitleGroup