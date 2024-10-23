import React from 'react';
import imgLeft from '../../img/img-left-page-login.png';
import logo from '../../img/logo.png';
import iconUser from '../../img/icon/user.png';
import iconPass from '../../img/icon/padlock.png';
import { GoogleLogin } from '@react-oauth/google';



import './index.css';
import { Link } from 'react-router-dom';


export function Login() {
    // const handleLoginSuccess = (credentialResponse) => {
    //     console.log('Login Success:', credentialResponse);
    // };

    // const handleLoginError = () => {
    //     console.log('Login Failed');
    // };
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
                                Bạn chưa có tài khoản?
                                <Link to="/register">
                                <span className='ps-1'>
                                Đăng ký
                                </span>
                                </Link>
                            </p>
                        </form>
                        {/* <GoogleLogin
                            onSuccess={handleLoginSuccess}
                            onError={handleLoginError}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
