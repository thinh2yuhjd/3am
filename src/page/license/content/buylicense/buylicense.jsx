import React, { useState } from "react";
import "./index.css";
import { dataLicense } from "./data";
import CustomSelect from "./customSelect";

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
    <div className="container pt-5">
      <h3 className="fw-bold mb-4">Mua license</h3>
      <div className="p-4 bg-white border rounded shadow-sm">
        <h4 className="mb-4 title">Thông tin phần mềm</h4>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="licensePackage" className="form-label">
              Gói phần mềm
            </label>
            <CustomSelect
              options={dataLicense}
              value={selectedOption}
              onChange={handleLicenseChange}
            />
          </div>
          <div className="col-md-6">
            <span>Module</span>
            <div
              className="mt-2 rounded border"
              style={{ backgroundColor: "#f7f7f7", padding: "10px" }}
            >
              <input
                type="checkbox"
                id="module"
                className="form-check-input"
                onChange={handleModuleChange}
              />
              <label className="form-check-label ms-2" htmlFor="module">
                Private server
              </label>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <strong>Tổng tiền: {totalPrice.toLocaleString()} VND</strong>
        </div>
      </div>
      <div className="p-4 bg-white border rounded shadow-sm mt-4">
        <h4 className="mb-4 title">Thông tin khách hàng</h4>
        <p className="sub-title">Thông tin khách hàng</p>
        <div className="row">
          <div className="col-md-6">
            <span className="sub-title">
              Họ và tên <span style={{ color: "red" }}>*</span>
            </span>
            <div className="mt-2 w-100 rounded">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <span className="sub-title">Số điện thoại</span>
            <div className="mt-2 w-100 rounded ">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <span className="sub-title">
              Thành phố / Tỉnh<span style={{ color: "red" }}>*</span>
            </span>
            <div className="mt-2 w-100 rounded ">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <span className="sub-title">
              Huyện<span style={{ color: "red" }}>*</span>
            </span>
            <div className="mt-2 w-100 rounded ">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
          <div className="col-md-4">
            <span className="sub-title">
              Phường / Xã<span style={{ color: "red" }}>*</span>
            </span>
            <div className="mt-2 w-100 rounded ">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <span className="sub-title">
              Địa chỉ<span style={{ color: "red" }}>*</span>
            </span>
            <div className="mt-2 w-100 rounded ">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 ">
            <span className="sub-title">
              Mã số thuế<span style={{ color: "red" }}>*</span>
            </span>
            <br />
            <small>
              Trong trường hợp cần xuất hóa đơn, vui lòng thực hiện giao dịch
              qua{" "}
              <a
                href="#"
                className="text-decoration-none"
                style={{ color: "rgb(0, 128, 192)" }}
              >
                Fanpage
              </a>{" "}
              để được tư vấn hỗ trợ xuất hóa đơn nháp hoặc phát hình chính thức.
            </small>
            <div className="mt-2 w-100 rounded ">
              <input
                className="border rounded custom-input"
                type="text"
                style={{ width: "100%", padding: "10px" }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
