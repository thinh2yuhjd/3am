import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import iconMenubar from "../../img/icon/menu.png";
import iconLogo from "../../img/logo.png";
import inconLogoLong from "../../img/logodai.png";
import iconVienam from "../../img/icon/vietnam.png";
import iconUser from "../../img/icon/user.png";
import iconDashboard from "../../img/icon/dashboard.png";
import iconLicense from "../../img/icon/cart.png";
import iconLicenseManagement from "../../img/icon/management.png";
import iconSupport from "../../img/icon/customer-service.png";
import iconInfor from "../../img/icon/information-button.png";
import iconLogout from "../../img/icon/logout.png";
import { Link } from "react-router-dom";

export function LicenseManagement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpenmenu, setisOpenmenu] = useState(false);
  const menuRef = useRef(null); // Tạo tham chiếu cho menu

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: iconDashboard, text: "Tổng quan", path: "/license/dashboard" },
    { icon: iconLicense, text: "Mua license", path: "/license/buylicense" },
    {
      icon: iconLicenseManagement,
      text: "Quản lý license",
      path: "/license/management",
    },
    { icon: iconSupport, text: "Hỗ trợ", path: "/license/support" },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (location.pathname === "/license") {
      navigate("/license/dashboard");
    }
  }, [location.pathname, navigate]);

  const toggleMenuInfo = () => {
    setisOpenmenu(!isOpenmenu);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setisOpenmenu(false); 
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="d-flex h-full">
      <div className="siderbar_page h-100 d-flex position-relative">
        <div
          className={`sub_siderbar border-end ${isCollapsed ? "collapsed" : "expanded"
            }`}
        >
          <div className={`position-fixed sidebar_main ${isCollapsed ? "collapsed" : "expanded"
            }`}>
            <div className="sidebar_header d-flex justify-content-center align-items-center">
              {!isCollapsed ? (
                <div className=" d-flex justify-content-center align-items-center" style={{ width: '240px', height: '100%' }}>
                  <img src={inconLogoLong} className="logo_license_long " alt="Logo" width='100%' height='auto' />
                </div>
              ) : (
                <div className=" d-flex justify-content-center align-items-center" style={{ width: '60px', height: '100%' }}>
                  <img src={iconLogo} className="logo_license " alt="Logo" width='100%' height='auto' />
                </div>
              )}
            </div>

            <div>
              <ul className="list-unstyled custom-ul mt-3">
                {menuItems.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <li
                      className={`custom-li ${activeIndex === index ? "active" : ""
                        }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <img
                        src={item.icon}
                        width="25px"
                        className=""
                        alt=""
                      />
                      {!isCollapsed && <span className="ms-4" >{item.text}</span>}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      <div className="content_page w-100">
        <div className=" d-flex justify-content-between align-items-center content-header" style={{ height: '64px' }} >

          <button
            className="button_menubar border-0 ms-2"
            style={{ height: '100px' }}
            onClick={toggleSidebar}
          >
            <img width="28px" src={iconMenubar} alt="Toggle Sidebar" />
          </button>
          <div className="position-relative text-end me-3 mt-3" style={{ width: '220px', height: '100%' }} ref={menuRef}>
            <button className="border-0 rounded-circle" onClick={toggleMenuInfo} style={{ width: '50px', height: '50px' }}>
              <img src={iconUser} alt="" />
            </button>
            {isOpenmenu && (
              <ul className="menu_user rounded position-absolute mt-2 border text-start" style={{ width: '220px' }}>
                <Link to='/license/my-account' className='text-decoration-none'>
                  <li className="py-2 ps-3">
                    <img src={iconInfor} alt="" className="pe-2" />
                    Thông tin người dùng
                  </li>
                </Link>
                <Link to='/login' className='text-decoration-none'>
                  <li className="py-2 ps-3">
                    <img src={iconLogout} alt="" className="pe-2" />
                    Đăng xuất
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>

        <div className="sub_content h-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
