import DropdownItem from '../DropdownItem/DropdownItem';
import './Dropdown.scss';

const Dropdown = ({ details }) => {
  return (
    <div className='dropdown'>
      {
        details.map((detail) => (
          <DropdownItem key={detail.id} detail={detail}/>
        ))
      }
    </div>
  )
}

export default Dropdown