import './AddressGroup.scss';

const AddressGroup = ({ address }) => {
  return (
    <div className='addressGroup'>
        <img className='icon' src={address.icon} alt={address.title} />
        <div className="textGroup">
            <h6 className="subheader">{address.title}</h6>
            <p className="text">{address.info}</p>
        </div>
    </div>
  )
}

export default AddressGroup