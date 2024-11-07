import React, { useState } from 'react'
import imgLeft from '../../img/img-left-page-login.png';
import logo from '../../img/logo.png';
import iconUser from '../../img/icon/user.png';
import iconPass from '../../img/icon/padlock.png';
import iconName from '../../img/icon/card.png';
import iconFacebook from '../../img/icon/facebook.png';
import { Link } from 'react-router-dom';
import { Login } from '../login/login';
import axios from 'axios';
export function Register() {

    const [FullName, setFullName] = useState('')
    const [Password, setPassword] = useState('')
    const [isConfirmPassword, setisConfirmPassword] = useState('')
    const [Email, setEmail] = useState('')
    const [AccountFacebook, setAccountFacebook] = useState('')
    const [LinkFacebook, setLinkFacebook] = useState('')

    const [isMessage, setisMessage] = useState('')

    const validateForm = () => {
        if (!FullName || !Email || !Password || !AccountFacebook || !LinkFacebook) {
            setisMessage('Vui lòng điền tất cả các trường.');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(Email)) {
            setisMessage('Email không hợp lệ.');
            return false;
        }
        if (Password.length < 6) {
            setisMessage('Mật khẩu phải có ít nhất 6 ký tự.');
            return false;
        }
        if (Password !== isConfirmPassword) {
            setisMessage('Mật khẩu không khớp.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        try {
            const reponse = await axios
                .post("http://192.168.1.36:8086/api/Account/Register", {
                    FullName,
                    Password,
                    Email,
                    AccountFacebook,
                    LinkFacebook
                })
            setisMessage(reponse.data.message)
            navigator("/login")
        }
        catch (e) {
            console.log(e);
        }
    }


    const [isChecked, setisChecked] = useState(false);
    const handleChecked = (event) => {
        setisChecked(event.target.checked)
    }

    return (
        <div className='container-fluid vh-100 overflow-hidden'>
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
                        <h4 className="mb-3 fs-36">Đăng ký</h4>
                        <p className="mb-3 fs-18 text-secondary-light">Đăng ký tài khoản! Vui lòng nhập thông tin</p>

                        {isMessage && <p style={{ color: 'red' }}>{isMessage}</p>}

                        <form onSubmit={handleSubmit}>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconUser} alt="Tên đăng nhập" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Tên đăng nhập"
                                    value={Email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconPass} alt="Mật khẩu" />
                                <input
                                    type="password"
                                    className="border-0 account w-100"
                                    placeholder="Mật khẩu"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconPass} alt="Nhập lại mật khẩu" />
                                <input
                                    type="password"
                                    className="border-0 account w-100"
                                    placeholder="Nhập lại mật khẩu"
                                    value={isConfirmPassword}
                                    onChange={(e) => setisConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconName} alt="Họ tên" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Họ tên"
                                    value={FullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconFacebook} alt="Tên tài khoản facebook" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Tên tài khoản facebook"
                                    value={AccountFacebook}
                                    onChange={(e) => setAccountFacebook(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="border mb-3 h-56 ps-2 d-flex align-items-center rounded-3">
                                <img className="me-2" src={iconFacebook} alt="Facebook URL" />
                                <input
                                    type="text"
                                    className="border-0 account w-100"
                                    placeholder="Facebook URL"
                                    value={LinkFacebook}
                                    onChange={(e) => setLinkFacebook(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <input type="checkbox" id="check" checked={isChecked} onChange={handleChecked} />
                                <label htmlFor="check" className="ms-2">Việc tạo tài khoản đồng nghĩa với việc bạn đồng ý với các Điều khoản & Điều kiện và Chính sách quyền riêng tư của chúng tôi</label>
                            </div>

                            <button disabled={!isChecked} type="submit" className={`${isChecked ? 'btn btn-primary w-100' : 'btn btn-light w-100'} `}>Đăng ký</button>

                            <p className="mt-3">
                                Bạn đã có tài khoản?
                                <Link to="/login">
                                    <span className='ps-1'>
                                        Đăng nhập
                                    </span>
                                </Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
