import React, { useState, useEffect } from 'react';
import imgLeft from '../../img/img-left-page-login.png';
import logo from '../../img/logo.png';
import iconUser from '../../img/icon/user.png';
import iconPass from '../../img/icon/padlock.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import './index.css';

export function Login() {
    const [isEmail, setIsEmail] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Kiểm tra xem người dùng đã đăng nhập chưa
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            navigate("/license");
        }

        // Kiểm tra xem có lưu thông tin đăng nhập không
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPassword = localStorage.getItem('savedPassword');
        if (savedEmail) setIsEmail(savedEmail);
        if (savedPassword) setIsPassword(savedPassword);
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sanitizedEmail = DOMPurify.sanitize(isEmail);
        const sanitizedPassword = DOMPurify.sanitize(isPassword);

        try {
            const response = await axios.post("http://192.168.1.36:8086/api/Account/Login", {
                email: sanitizedEmail,
                password: sanitizedPassword,
            });

            if (response.data.isSuccess) {
                // Lưu thông tin người dùng nếu chọn ghi nhớ
                localStorage.setItem('userInfo', JSON.stringify(response.data.user));
                localStorage.setItem('savedEmail', sanitizedEmail);
                localStorage.setItem('savedPassword', sanitizedPassword); // Lưu mật khẩu nếu cần
                if (rememberMe) {
                    localStorage.setItem('userInfo', JSON.stringify(response.data.user));
                    localStorage.setItem('savedEmail', sanitizedEmail);
                    localStorage.setItem('savedPassword', sanitizedPassword); // Lưu mật khẩu nếu cần
                }
                navigate("/license");
            } else {
                setErrorMessage("Tài khoản chưa được đăng ký!");
            }
        } catch (error) {
            console.error(error);
            setErrorMessage('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.');
        }
    };

    return (
        <div className='container-fluid vh-100 overflow-hidden'>
            <div className="row h-100">
                <div className="col-left col-md-6 d-none d-md-flex justify-content-center align-items-center pe-0 h-100">
                    <img
                        src={imgLeft}
                        alt="Background"
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center h-100">
                    <div className="content text-center">
                        <img src={logo} alt="Logo" className="mb-3" />
                        <h4 className="mb-3 fs-36">Đăng nhập</h4>
                        <p className="mb-3 fs-18 text-secondary-light">Chào mừng trở lại! Vui lòng nhập thông tin</p>
                        {errorMessage && <p className="text-danger">{errorMessage}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconUser} alt="Tên đăng nhập" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Tên đăng nhập"
                                    value={isEmail}
                                    onChange={(e) => setIsEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconPass} alt="Mật khẩu" />
                                <input
                                    type="password"
                                    className="border-0 account w-100"
                                    placeholder="Mật khẩu"
                                    value={isPassword}
                                    onChange={(e) => setIsPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <input
                                        type="checkbox"
                                        id="check"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <label htmlFor="check" className="ms-2">Ghi nhớ đăng nhập</label>
                                </div>
                                <Link to="/forgot-password">
                                    Quên mật khẩu?
                                </Link>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Đăng nhập
                            </button>
                            <p className="mt-3">
                                Bạn chưa có tài khoản?
                                <Link to="/register">
                                    <span className='ps-1'>Đăng ký</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}