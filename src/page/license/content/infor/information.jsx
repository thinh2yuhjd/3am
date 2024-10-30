import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export function InformationPage() {

    const [isChecked, setisChecked] = useState(false);
    const handdleChecked = (event) => {
        setisChecked(event.target.checked);
    }

    return (
        <div className='container pt-5'>
            <h3 className="mb-4" style={{ fontWeight: '600' }}>
                Tài khoản của tôi</h3>
            <div className="p-4 bg-white border rounded shadow-sm mb-4">
                <div className="border-bottom mb-4">
                    <h4 className="mb-2 title">Thông tin người dùng</h4>
                </div>
                <div className="row mb-4">
                    <div className="col-md-4">
                        <span className="sub-title">
                            Email <span style={{ color: "red" }}>*</span>
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <span className="sub-title">
                            Tên hiển thị
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <span className="sub-title">
                            Link hỗ trợ facebook
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
                        <span className="sub-title">

                            Link hỗ trợ Telegram
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="d-flex">
                        <input
                            type="checkbox"
                            id="changpass"
                            className="form-check-input"
                            onChange={handdleChecked}
                        />
                        <label className="form-check-label ms-2" htmlFor="changpass">
                            Đổi mật khẩu
                        </label>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <span className="sub-title">
                            Mật khẩu mới
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                disabled={!isChecked}
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <span className="sub-title">
                            Nhập lại mật khẩu mới
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                disabled={!isChecked}
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <span className="sub-title">


                            Số điện thoại
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <span className="sub-title">


                            Địa chỉ <span style={{ color: 'red' }}>*</span>
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-12">
                        <span className="sub-title">


                            Mã số thuế (nếu cần xuất hóa đơn) <span style={{ color: 'red' }}>*</span>
                        </span>
                        <div className="mt-2 w-100 rounded">
                            <input
                                className="border rounded custom-input"
                                type="text"
                                style={{ width: "100%", padding: "10px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-end ">
                <button className="custom-button rounded border-0 me-3" type='submit'>Cập nhật</button>
                <Link to="/license/dashboard">
                    <button className="custom-button rounded border-0">Hủy bỏ</button>
                </Link>
            </div>
        </div>
    )
}
