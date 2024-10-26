import React, { useState } from 'react';
import './index.css';
import { dataLicense } from './data';


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
      <div onClick={toggleDropdown} className="custom-dropdown-selected d-flex justify-content-between">
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

export function BuyLicensePage() {
  const [selectedOption, setSelectedOption] = useState(dataLicense[0]);
  const [isModuleChecked, setIsModuleChecked] = useState(false);
  const modulePrice = 2000000;

  const handleLicenseChange = (option) => {
    setSelectedOption(option);
  };

  const handleModuleChange = (event) => {
    setIsModuleChecked(event.target.checked);
  };

  const totalPrice = selectedOption.price + (isModuleChecked ? modulePrice : 0);

  return (
    <div className='container pt-5'>
      <h3 className="fw-bold mb-4">Mua license</h3>
      <div className="p-4 bg-white border rounded shadow-sm">
        <h4 className="mb-4 title">Thông tin phần mềm</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="licensePackage" className="form-label">Gói phần mềm</label>
            <CustomSelect
              options={dataLicense}
              value={selectedOption}
              onChange={handleLicenseChange}
            />
          </div>
          <div className="col-md-6">
            <span >Module</span>
            <div className=" mt-2 rounded border" style={{ backgroundColor: '#f7f7f7', padding: '10px' }}>
              <input type="checkbox" id="module" className="form-check-input" onChange={handleModuleChange} />
              <label className="form-check-label ms-2" htmlFor="module">Private server</label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <strong>Tổng tiền: {totalPrice.toLocaleString()} VND</strong>
        </div>
      </div>
      <div className="p-4 bg-white border rounded shadow-sm mt-4">
        <h4 className="mb-4 title">Thông tin khách hàng</h4>
        <p className='sub-title'>Thông tin khách hàng</p>
        <div className="row">
          <div className="col-md-6">
            <span >Họ và tên <span style={{ color: 'red' }}>*</span></span>
            <div className="mt-2 w-100 border">
              <input className='border-0 rounded' type="text" style={{ width: '100%', padding: '10px' }} />
            </div>
          </div>
          <div className="col-md-6">
            <span >Số điện thoại<span style={{ color: 'red' }}>*</span></span>
            <div className="mt-2 w-100 border">
              <input className='border-0 rounded' type="text" style={{ width: '100%', padding: '10px' }} />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <label className='mb-2' htmlFor="">Tỉnh / Thành phố <span style={{ color: 'red' }}>*</span></label>
            <CustomSelect
              options={dataLicense}
              value={selectedOption}
              onChange={handleLicenseChange}
            />
          </div>
          <div className="col-md-4">
            <label className='mb-2' htmlFor="">Huyện <span style={{ color: 'red' }}>*</span></label>

            <CustomSelect
              options={dataLicense}
              value={selectedOption}
              onChange={handleLicenseChange}
            />
          </div>
          <div className="col-md-4">
            <label className='mb-2' htmlFor="">Xã / phường <span style={{ color: 'red' }}>*</span></label>

            <CustomSelect
              options={dataLicense}
              value={selectedOption}
              onChange={handleLicenseChange}
            />
          </div>
        </div>


      </div>
    </div>
  );
}
