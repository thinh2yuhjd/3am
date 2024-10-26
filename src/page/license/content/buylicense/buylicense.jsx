import React, { useState } from 'react';
import './index.css';
import { dataLicense } from './data'; // Adjust the import path
// import { dataAddress } from '../data/dataAddress'; // Adjust the import path
import CustomSelect from './customSelect';

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
            <span>Module</span>
            <div className="mt-2 rounded border" style={{ backgroundColor: '#f7f7f7', padding: '10px' }}>
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
            <label className='mb-2' htmlFor="city">Tỉnh / Thành phố <span style={{ color: 'red' }}>*</span></label>

          </div>
          <div className="col-md-4">
            <label className='mb-2' htmlFor="district">Huyện <span style={{ color: 'red' }}>*</span></label>

          </div>
          <div className="col-md-4">
            <label className='mb-2' htmlFor="ward">Xã / phường <span style={{ color: 'red' }}>*</span></label>

          </div>
        </div>
      </div>
    </div>
  );
}
