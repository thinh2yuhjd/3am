import React, { useState } from 'react';
import imgLeft from '../../img/img-left-page-login.png';
import logo from '../../img/logo.png';
import iconMail from '../../img/icon/ic-mail.png';
import { Link } from 'react-router-dom';

export function ForgotPassPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setError('');
            // Xử lý reset mật khẩu ở đây, ví dụ như gửi yêu cầu tới backend
            console.log("Email hợp lệ:", email);
        } else {
            setError('Vui lòng nhập đúng định dạng email.');
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
                        <h4 className="mb-3 fs-36">Quên mật khẩu</h4>
                        <p className="mb-3 fs-18 text-secondary-light">
                            Chúng tôi sẽ gửi mật khẩu mới vào hòm thư email của bạn!
                        </p>
                        <form onSubmit={validateEmail}>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconMail} alt="mail" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <p className="text-danger">{error}</p>}
                            <button type="submit" className="btn btn-primary w-100">Reset password</button>
                            <p className="mt-3">
                                Đã nhớ mật khẩu
                                <Link to="/login">
                                    <span className='ps-1'>Đăng nhập</span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
