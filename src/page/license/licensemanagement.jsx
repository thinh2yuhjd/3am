import React, { useEffect, useState } from "react";
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

import { Link } from "react-router-dom";

export function LicenseManagement() {
  const [activeIndex, setActiveIndex] = useState(0);
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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (location.pathname === "/license") {
      navigate("/license/dashboard");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="d-flex h-full">
      <div className="siderbar_page h-100 d-flex ">
        <div
          className={`sub_siderbar border-end ${isCollapsed ? "collapsed" : "expanded"
            }`}
        >
          <div className={`position-fixed sidebar_main ${isCollapsed ? "collapsed" : "expanded"
            }`}>
            <div className="sidebar_header border-bottom d-flex justify-content-center align-items-center">
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
              <ul className="list-unstyled custom-ul">
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
        <div className="bg-white position-fixed d-flex justify-content-between align-items-center w-100 content_header border-bottom">
          <button
            className="button_menubar border-0 ms-2"
            onClick={toggleSidebar}
          >
            <img width="28px" src={iconMenubar} alt="Toggle Sidebar" />
          </button>
          {/* <div className="d-flex me-4 gap-2">
                        <button className='button_menubar border-0'>
                            <img width='32px' src={iconVienam} alt="Vietnam" />
                        </button>
                        <button className='button_menubar border-0'>
                            <img width='32px' src={iconUser} alt="User" />
                        </button>
                    </div> */}
        </div>
        <div className="sub_content h-100 mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
