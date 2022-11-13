import "./Dropdown.scss";
import DropdownItem from "../DropdownItem/DropdownItem";

const Dropdown = ({ details }) => {
  return (
    <div className="dropdown">
      {details.map((detail) => (
        <DropdownItem key={detail.id} detail={detail} />
      ))}
    </div>
  );
};

export default Dropdown;
