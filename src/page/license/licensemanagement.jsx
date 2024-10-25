import React, { useState } from 'react';
import './index.css';
import { Outlet } from 'react-router-dom';

import iconMenubar from '../../img/icon/menu.png';
import iconLogo from '../../img/logo.png';
import inconLogdai from '../../img/logodai.png';
import iconVienam from '../../img/icon/vietnam.png'
import iconUser from '../../img/icon/user.png';
import iconDashboard from '../../img/icon/dashboard.png';
import iconLicense from '../../img/icon/cart.png';
import iconLicenseManagement from '../../img/icon/management.png';
import iconSupport from '../../img/icon/customer-service.png';




import { Link } from 'react-router-dom';
export function LicenseManagement() {

    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { icon: iconDashboard, text: 'Tổng quan', path: '/license/dashboard' },
        { icon: iconLicense, text: 'Mua license', path: '/license/buylicense' },
        { icon: iconLicenseManagement, text: 'Quản lý license', path: '/license/management' },
        { icon: iconSupport, text: 'Hỗ trợ', path: '/license/support' }
    ];

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className="d-flex h-full">

                <div className="siderbar_page h-100 d-flex ">
                    <div className={` sub_siderbar border-end ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                        <div className="sidebar_header border-bottom ">
                            {!isCollapsed ? (<img src={inconLogdai} className='logo' />) : (<img src={iconLogo} className='logo' />)}
                        </div>
                        <div className="">
                            <ul className="list-unstyled custom-ul">
                                {menuItems.map((item, index) => (
                                    <Link to={item.path}>
                                        <li key={index} className={`custom-li ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
                                            <img src={item.icon} width="25px" className="me-4" alt="" />
                                            {!isCollapsed && <span>{item.text}</span>}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content_page w-100">
                    <div className="d-flex justify-content-between align-items-center w-100 content_header border-bottom">

                        <div className="">
                            <button className='button_menubar border-0 ms-2' onClick={toggleSidebar}>
                                <img width='28px' src={iconMenubar} alt="" />
                            </button>
                        </div>
                        <div className="d-flex me-4 gap-2">
                            <div className="">
                                <button className='button_menubar border-0'>
                                    <img width='32px' src={iconVienam} alt="" />
                                </button>
                            </div>
                            <div className="">
                                <button className='button_menubar border-0'>
                                    <img width='32px' src={iconUser} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="sub_content h-100">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
}
