import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import iconMenubar from "../../img/icon/menu.png";
import iconLogo from "../../img/logo.png";
import iconLogoLong from "../../img/logodai.png";
import iconVienam from "../../img/icon/vietnam.png";
import iconUser from "../../img/icon/user.png";
import iconDashboard from "../../img/icon/dashboard.png";
import iconLicense from "../../img/icon/cart.png";
import iconLicenseManagement from "../../img/icon/management.png";
import iconSupport from "../../img/icon/customer-service.png";
import iconInfor from "../../img/icon/information-button.png";
import iconLogout from "../../img/icon/logout.png";
import iconSidebar from "../../img/icon/down-arrow-sidebar.png";
import iconUpSidebar from "../../img/icon/up-arrow-sidebar.png";
import iconOpen from "../../img/icon/menus.png";
import iconClose from "../../img/icon/close.png";
import { Link } from "react-router-dom";

export function LicenseManagement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpenmenu, setisOpenmenu] = useState(false);
  const [isopenSidebar, setisopenSidebar] = useState(false);
  const [isOpenSiderbarMB, setisOpenSidebarMB] = useState(false);

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
    setisopenSidebar(!isopenSidebar);
  };

  useEffect(() => {
    if (location.pathname === "/license") {
      navigate("/license/dashboard");
    }
  }, [location.pathname, navigate]);

  const toggleMenuInfo = () => {
    setisOpenmenu(!isOpenmenu);
  };

  //clickOutsite
  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setisOpenmenu(false);
  //     setisOpenSidebarMB(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("pointerdown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("pointerdown", handleClickOutside);
  //   };
  // }, []);

  const handleOpenSidebarMB = () => {
    setisOpenSidebarMB(!isOpenSiderbarMB);
  };
  const handleCloseSidebarMB = () => {
    setisOpenSidebarMB(false);
  };

    

  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const userInfo = localStorage.getItem('userInfo');
    if (!userInfo) {
      navigate("/login");
    }
  }, [navigate]);
  
  const handleLogout = async () => {
    localStorage.removeItem('userInfo'); // Xóa thông tin người dùng
    await new Promise(resolve => setTimeout(resolve, 100)); // Đợi một chút (100ms)
    navigate('/login'); // Chuyển hướng đến trang đăng nhập
};

  
  return (
    <div className="">
      <div className="header-main d-flex ">
        <div className="btn-mobile d-block d-md-none d-flex align-items-center">
          <button
            className="w-100 border-0 bg-transparent"
            onClick={handleOpenSidebarMB}
          >
            <img src={iconOpen} alt="" />
          </button>
        </div>

        {/* <div className="logo_mb border m-auto d-block d-md-none">
          <img src={iconLogo} alt="" />
        </div> */}
        <div
          className={`header-sidebar ${isopenSidebar ? "collaps" : "expends"
            } d-flex position-relative`}
        >
          <div
            className={`border-end sidebar-sub ${isopenSidebar ? "collaps" : "expends"
              } d-flex justify-content-center align-items-center`}
          >
            {isopenSidebar ? (
              <div className="logo-sidebar-short">
                <img src={iconLogo} alt="" className="w-100 h-100" />
              </div>
            ) : (
              <div
                className="logo_sidebar-long"
                style={{ width: "240px", height: "auto" }}
              >
                <img src={iconLogoLong} alt="" className="w-100 h-100" />
              </div>
            )}
          </div>
          {isopenSidebar ? (
            <div className="position-sticky">
              <button
                className="position-absolute icon-sub"
                style={{ right: -10, top: 20 }}
                onClick={handleOpen}
              >
                <img src={iconUpSidebar} alt="" />
              </button>
            </div>
          ) : (
            <div className="position-sticky">
              <button
                className="position-absolute icon-sub"
                style={{ right: -10, top: 20 }}
                onClick={handleOpen}
              >
                <img src={iconSidebar} alt="" />
              </button>
            </div>
          )}
        </div>

        <div className="header-content text-end w-100 d-flex justify-content-end">
          <div
            className="position-relative text-end"
            style={{ width: "220px", height: "100%" }}
            ref={menuRef}
          >
            <button
              className="border-0 rounded-circle mt-2 me-2"
              onClick={toggleMenuInfo}
              style={{ width: "50px", lineHeight: "50px" }}
            >
              <img src={iconUser} alt="" />
            </button>
            {isOpenmenu && (
              <ul
                className="menu_user rounded position-absolute mt-2 border text-start"
                style={{ width: "220px" }}
              >
                <Link to="/license/my-account" className="text-decoration-none">
                  <li className="py-2 ps-3">
                    <img src={iconInfor} alt="" className="pe-2" />
                    Thông tin người dùng
                  </li>
                </Link>
                <Link className="text-decoration-none" onClick={handleLogout}>
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

      <div className="content_main d-flex">
        <div
          className={`border-end content_sub ${isopenSidebar ? "collaps" : "expends"
            } ${isOpenSiderbarMB ? "mobile-open" : ""}`}
        >
          <div>
            <div className="text-end d-block d-md-none my-2">
              <button
                className="mobile-menu-button border-0 bg-transparent"
                onClick={handleCloseSidebarMB}
              >
                <img src={iconClose} alt="" width="16px" />
              </button>
            </div>
            <ul className="list-unstyled custom-ul">
              {menuItems.map((item, index) => (
                <Link to={item.path} key={index} style={{color:'#4b5563'}}>
                  <li
                    className={`custom-li ${activeIndex === index ? "active" : ""
                      }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={item.icon} alt="" />
                    {!isopenSidebar && (
                      <span className="ms-4">{item.text}</span>
                    )}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="h-100 w-auto content-wrapper"
          style={{ backgroundColor: "#F4F6F8" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
