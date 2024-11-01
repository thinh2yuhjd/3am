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
import iconSidebar from "../../img/icon/down-arrow-sidebar.png"

import { Link } from "react-router-dom";

export function LicenseManagement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpenmenu, setisOpenmenu] = useState(false);
  const [isopenSidebar, setisopenSidebar] = useState(false);
  const menuRef = useRef(null);

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

  const handleOpen = () => {
    setisopenSidebar(!isopenSidebar)
  }

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
    <div className=''>
      <div className="header-main d-flex border">
        <div className={`header-sidebar ${isopenSidebar ? 'collaps' : 'expends'} d-flex position-relative`}>
          <div className={`border sidebar-sub ${isopenSidebar ? 'collaps' : 'expends'}`}>icon</div>
          <button className='position-absolute icon-sub' onClick={handleOpen}><img src={iconSidebar} alt="" /></button>
        </div>
        
        <div className="header-content text-end w-100 d-flex justify-content-end">
          <div className="position-relative text-end" style={{ width: '220px', height: '100%' }} ref={menuRef}>
            <button className="border-0 rounded-circle mt-1 me-2" onClick={toggleMenuInfo} style={{ width: '50px',lineHeight:'50px' }}>
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

      </div>




      <div className="content_page w-100">
        {/* <div>
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
            </div> */}

        {/* <div className="sub_content h-100">
          <Outlet />
        </div> */}
      </div>
    </div>
  );
}
