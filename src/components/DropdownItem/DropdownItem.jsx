import "./DropdownItem.scss";
import { useState } from "react";
import plus from "../../img/plus-dropdown.png";
import minus from "../../img/minus-dropdown.png";
import Details from "../Details/Details";

const DropdownItem = ({ detail }) => {
  const { header, content } = detail;
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="dropdownItem">
      <div
        className={dropdown ? "dropdownHeader vis" : "dropdownHeader"}
        onClick={() => setDropdown(!dropdown)}
      >
        <h4 className="title">{header}</h4>
        <img src={!dropdown ? plus : minus} alt="" className="icon" />
      </div>
      <div className={dropdown ? "dropdownDetails vis" : "dropdownDetails"}>
        {content.map((c, index) => (
          <Details c={c} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DropdownItem;
