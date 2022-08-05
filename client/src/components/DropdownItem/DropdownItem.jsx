import './DropdownItem.scss';
import plus from '../../img/plus-dropdown.png';
import minus from '../../img/minus-dropdown.png';
import { useState } from 'react';
import Details from '../Details/Details';

const DropdownItem = ({ detail }) => {
    const { header, content } = detail;
    const [ dropdown, setDropdown ] = useState(false)
  return (
    <div className='dropdownItem'>
        <div className={dropdown ? "dropdownHeader vis" : "dropdownHeader"} onClick={() => setDropdown(!dropdown)}>
            <h4 className="title">{header}</h4>
            <img src={!dropdown ? plus : minus} alt="" className="icon" />
        </div>
        <div className={dropdown ? "dropdownDetails vis" : "dropdownDetails"}>
            {
                content.map((c) => (
                    <Details c={c} key={c.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default DropdownItem