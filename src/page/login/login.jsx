import React from 'react';
import imgLeft from '../../img/img-left-page-login.png';
import logo from '../../img/logo.png';
import iconUser from '../../img/icon/user.png';
import iconPass from '../../img/icon/padlock.png';
import './index.css';
import { GoogleLogin } from '@react-oauth/google';

const clientId = "402693424713-vmjdp7vrg54377818e91sb58hndm09em.apps.googleusercontent.com";

export function Login() {
    const handleGoogleLoginSuccess = (credentialResponse) => {
        console.log("Login Success: ", credentialResponse);
        // Xử lý logic đăng nhập thành công ở đây
        // Ví dụ: Gửi thông tin đăng nhập đến server hoặc lưu token vào local storage
    };

    const handleGoogleLoginFailure = (error) => {
        console.error("Login Failed: ", error);
        // Xử lý logic đăng nhập thất bại ở đây
    };

    return (
        
        <div className='container-fluid vh-100'>
            <div className="row h-100">
                <div className="col-left col-md-6 d-none d-md-flex justify-content-center align-items-center pe-0">
                    <img
                        src={imgLeft}
                        alt="Background"
                        className="img-fluid h-100 w-100" 
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div className="content text-center"> 
                        <img src={logo} alt="Logo" className="mb-3" />
                        <h4 className="mb-3 fs-36">Đăng nhập</h4>
                        <p className="mb-3 fs-18 text-secondary-light">Chào mừng trở lại! Vui lòng nhập thông tin</p>
                        <form>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconUser} alt="Tên đăng nhập" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Tên đăng nhập"
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconPass} alt="Mật khẩu" />
                                <input
                                    type="password"
                                    className="border-0 account w-100"
                                    placeholder="Mật khẩu"
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <input type="checkbox" id="check" />
                                    <label htmlFor="check" className="ms-2">Ghi nhớ đăng nhập</label>
                                </div>
                                <a href="#" className="text-decoration-none">Quên mật khẩu?</a>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
                            <p className="mt-3">
                                Bạn chưa có tài khoản? <a href="#" className="text-decoration-none">Đăng ký</a>
                            </p>
                        </form>

                        {/* Thêm nút đăng nhập bằng Google */}
                        <div className="mt-3">
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginFailure}
                                logoAlignment="left"
                                className="btn btn-light w-100"
                                // Thêm các tùy chọn khác nếu cần thiết
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
