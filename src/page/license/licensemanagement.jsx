import React, { useState } from 'react';
import './index.css';
import iconMenubar from '../../img/icon/menu.png';
import iconLogo from '../../img/logo.png';
import inconLogdai from '../../img/logodai.png';
import { Link } from 'react-router-dom';
export function LicenseManagement() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className="siderbar d-flex">
                <div className={` border sub_siderbar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
                    <div className="logo">
                        {!isCollapsed ? (<img src={inconLogdai} className='logo' />) : (<img src={iconLogo} className='logo' />)}
                    </div>
                    <div className="">
                        <ul>
                            <li>
                                <img src={iconLogo} width='25px' alt="" />
                                {!isCollapsed ? (<span>Menu 1</span>) : ('')}
                            </li>
                            <li>
                                <img src={iconLogo} width='25px' alt="" />
                                {!isCollapsed ? (<span>Menu 2</span>) : ('')}
                            </li>
                            <li>
                                <img src={iconLogo} width='25px' alt="" />
                                {!isCollapsed ? (<span>Menu 3</span>) : ('')}
                            </li>
                            <li>
                                <img src={iconLogo} width='25px' alt="" />
                                {!isCollapsed ? (<span>Menu 4</span>) : ('')}
                            </li>
                            <li>
                                <img src={iconLogo} width='25px' alt="" />
                                {!isCollapsed ? (<span>Menu 5</span>) : ('')}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <button onClick={toggleSidebar}>
                        =
                    </button>
                </div>

            </div>
            <div className="content">This is content</div>
        </>
    );
}
