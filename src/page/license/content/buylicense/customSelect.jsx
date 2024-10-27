import React, { useState } from 'react';
import iconUp from '../../../../img/icon/arrowhead-up.png';
import iconDown from '../../../../img/icon/arrowhead-down.png';

function CustomSelect({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div onClick={toggleDropdown} className="custom-dropdown-selected border d-flex justify-content-between">
        {value?.name || 'Chọn gói phần mềm'}
        <div>
          <img src={isOpen ? iconDown : iconUp} alt="Toggle Dropdown" />
        </div>
      </div>
      {isOpen && (
        <div className="custom-dropdown-options">
          {options.map((option, index) => (
            <div key={index} onClick={() => handleOptionClick(option)} className="custom-dropdown-option">
              {option.name} (vĩnh viễn)
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
