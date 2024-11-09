import React, { useState, useEffect, useRef } from "react";
import logo from "../../img/logo.png";
import search_icon from "../../img/icon/search_icon.png";
import iconA from "../../img/icon/trustworthy-status.svg";
import iconB from "../../img/icon/mcil.png";
import iconD from "../../img/icon/creepjs.png";
import iconE from "../../img/icon/f.vision.png";
import iconC from "../../img/icon/browserleaks.png";
import iconcheck from "../../img/icon/checkhome.png";
import iconT from "../../img/icon/ruby.png";
import why3am from "../../img/why3am.png";
import Video from "./video";
import "./index.css";
import background from "../../img/bg.png";
import backgroundMb from "../../img/bg-mobile.png";
import background_right from "../../img/bg-demo-right.png";
import button_search from "../../img/icon/Button.png";
import button_menu from "../../img/icon/menu.png";

import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  //menu
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onhangdleLogin = () => {
    navigate("/login");
  };

  const handleOpen = () => {
    setIsOpenSearch((prev) => !prev);
  };

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
    console.log("ok");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <div className="" style={{ backgroundColor: "#F4F6F8" }}>
      <div className="am-header " >
        <img className=""  src={background} width="100%" style={{minHeight:'100vh'}} alt="background" />
        <div className="am-hd-main  position-absolute w-100">


          <div className="am-header-search container d-flex justify-content-center">
            <div className="row position-relative d-flex justify-content-between align-items-center w-100">

              <div className="col-md-2 d-none d-md-block text-start" style={{ height: '40px' }}>
                <img src={logo} alt="Logo" className="h-100" />
              </div>

              <div className="col-md-6 d-none d-md-block">
                <ul className="menu d-flex justify-content-around align-items-center">
                  <li className="" style={{ width: '120px' }}><a href="" className="custom-a-pc">Trang chủ</a></li>
                  <li className="" style={{ width: '120px' }}><a href="" className="custom-a-pc">Bảng giá</a></li>
                  <li className="" style={{ width: '120px' }}><a href="" className="custom-a-pc">Tài liệu</a></li>
                  <li style={{ width: '160px' }}>
                    <a className="custom-a-pc nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      onClick={toggleDropdown}>Mua phần mềm</a>
                    {open && (
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">Mua qua facebook</a>
                        </li>
                        <li className="dropdown-item">
                          <a href="" className="text-decoration-none">Mua online</a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>

              <div className="col-md-3 col-lg-2 d-none d-md-flex justify-content-between align-items-center">
                <div onClick={handleOpen}>
                  <img src={search_icon} alt="search" className="pe-3" />
                </div>
                <button
                  className="button"
                  style={{ width: "115px", backgroundColor: "#1C252E" }}
                  onClick={onhangdleLogin}
                >
                  <span style={{ color: "white" }}>Đăng ký</span>
                </button>
              </div>

              {isOpenSearch && (
                <div className="search-popup-overlay" onClick={handleOpen}>
                  <div className="search-popup-content font-border" onClick={(e) => e.stopPropagation()}>
                    <input type="text" placeholder="Tìm kiếm..." className="form-controls outline-none" style={{ outline: 'none' }} />
                    <img src={button_search} alt="" />
                  </div>
                </div>
              )}

              <div className="d-block d-md-none col-1 text-start">
                <button className="border-0" style={{ backgroundColor: 'transparent' }} onClick={toggleDropdown}>
                  <img src={button_menu} alt="" />
                </button>
              </div>

              <div className="col-md-8 col-sm-11 d-block d-md-none text-center">
                <img src={logo} alt="Logo" className="ps-3 ps-sm-0 pe-sm-5 custom-img-log-mobile" />
              </div>

              <div className={`border custom-menu-az position-absolute ${open ? "show" : "hide"}`}>
                <div className="text-end mt-1 me-1">
                  <button className="close-menu border-0" style={{ backgroundColor: 'white' }} onClick={toggleDropdown}>✖</button>
                </div>
                <div className="d-block d-md-none text-end mt-4 mb-2">
                  <div className="d-flex justify-content-center" style={{ width: '', height: '35px' }}>
                    <input type="text" name="" id="" />
                    <img className="border" src={search_icon} alt="" />
                  </div>

                </div>
                <ul className="h-100">
                  <li className="text-start ps-3 border-bottom" style={{ listStyle: 'none' }}>
                    <a href="">Trang chủ</a>
                  </li>

                  <li className="text-start ps-3 border-bottom" >
                    <a href="">Bảng giá</a>
                  </li>
                  <li className="text-start ps-3 border-bottom" >
                    <a href="">Tài liệu</a>
                  </li>
                  <li className="text-start ps-3 border-bottom" >
                    <a href="">Mua phần mềm</a>
                  </li>
                  <div className="d-flex justify-content-center mt-4">
                    <button
                      className="button"
                      style={{ width: "115px", height: '45px', backgroundColor: "#1C252E" }}
                      onClick={onhangdleLogin}
                    >
                      Đăng Ký
                    </button>
                  </div>

                </ul>

              </div>
            </div>
          </div>
          <div className="container-fluid am-content">
            <div className="row custom-text-img-main">
              <div className="col-md-2 custom-col-2 ">
              </div>
              <div className="col-md-3 custom-col-3  custom-text" style={{ color: 'white' }}>
                <div className="">

                  <h1 className="custom-title-h1">
                    Web3 Automation Multiple
                  </h1>
                  <div className="my-3">
                    <span className="custom-span">
                      Giải pháp trình duyệt anti-detect và quản lý nhiều tài khoản
                      trên một máy tính giúp bảo vệ danh tính, vận hành an toàn và
                      hiệu quả cho các hoạt động tiếp thị và quản lý tài khoản.
                    </span>
                  </div>
                  <div className="mt-4">
                    <button
                      className="button d-none d-lg-flex align-items-center justify-content-evenly p-2 custom-button-dowload"

                    >
                      <span className="icon"></span>
                      <a
                        href="#"
                        className="text-decoration-none"
                        style={{ color: "white" }}
                      >
                        Tải xuống cho Windows
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-7  ">
                <img className="w-100 h-100" src={background_right} alt="" />
              </div>
            </div>

          </div>
        </div>


      </div>

      <div className="my-5 pb-1">
        <h1
          className="custom-title"
          style={{ fontWeight: "600", color: "#172755" }}
        >
          Được hơn 20.000 người dùng tin tưởng.
        </h1>
      </div>
      <div
        className="mt-5 container border d-flex align-items-center justify-content-evenly"
        style={{
          borderRadius: "20px",
          height: "150px",
          backgroundColor: "#172755",
        }}
      >
        <ul className="test-site-container w-100 d-flex align-items-center justify-content-evenly flex-wrap">
          <li>
            <img src={iconB} alt="" width="35px" className="pe-2" />
            <a
              href="https://pixelscan.net/"
              target="_blank"
              rel="noopener"
              style={{ color: "white" }}
            >
              pixelscan.net
            </a>
          </li>
          <li>
            <img src={iconD} alt="" width="35px" className="pe-2" />
            <a
              href="https://abrahamjuliot.github.io/creepjs/"
              target="_blank"
              rel="noopener"
              style={{ color: "white" }}
            >
              creepjs
            </a>
          </li>
          <li>
            <img src={iconE} alt="" width="35px" className="pe-2" />
            <a
              href="http://f.vision/"
              target="_blank"
              rel="noopener"
              style={{ color: "white" }}
            >
              f.vision
            </a>
          </li>
          <li>
            <img src={iconC} alt="" width="35px" className="pe-2" />
            <a
              href="https://browserleaks.com/"
              target="_blank"
              rel="noopener"
              style={{ color: "white" }}
            >
              browserleaks.com
            </a>
          </li>
          <li>
            <img src={iconA} alt="" width="30px" className="pe-2" />
            <a
              href="https://iphey.com/"
              target="_blank"
              rel="noopener"
              style={{ color: "white" }}
            >
              iphey.com
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row pt-5">
          <div className="col-md-5 col-sx-12">
            <div className="overflow-hidden">
              <img
                src={why3am}
                alt="Web3 Automation"
                className="w-100 h-auto"
              />
            </div>
          </div>
          <div className="col-md-7 col-sx-12  ps-5 pt-5">
            <div className="text-start">
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "600",
                  color: "#172755",
                }}
              >
                Tại sao nên chọn 3AM
              </h1>
              <p>
                <img src={iconcheck} alt="" className="pe-2" />
                Tạo và dễ dàng quản lý không giới profile an toàn trên một máy
                tính duy nhất
              </p>
              <p>
                <img src={iconcheck} alt="" className="pe-2" />
                Ẩn danh hoàn toàn với database fingerprint khổng lồ, hỗ trợ cả
                nhân trình duyệt Chromium và Firefox
              </p>
              <p>
                <img src={iconcheck} alt="" className="pe-2" />
                Hỗ trợ no-code automation giúp người dùng tự tạo các tác vụ tự
                động hóa đa luồng, tối ưu hóa thời gian và chi phí nhân sự
              </p>
              <p>
                <img src={iconcheck} alt="" className="pe-2" />
                Người dùng toàn quyền và độc lập trong việc lưu trữ profile
              </p>
              <p>
                <img src={iconcheck} alt="" className="pe-2" />
                License vĩnh viễn, giá rẻ nhất thị trường với hơn 20 ngàn thiết
                bị đang sử dụng tính từ năm 2021
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-5 text-start">
          <h2
            style={{
              color: "#172755",
              fontSize: "56px",
              fontWeight: 700,
              lineHeight: "61.6px",
              textAlign: "center",
            }}
          >
            Hướng dẫn sử dụng
          </h2>
        </div>
        <div>
          <Video />
        </div>
      </div>

      <div className="container mt-5 chu">
        <h2 style={{ color: "#24A1DE", fontWeight: "600" }}>Bảng giá</h2>
        <div className="mt-3 container-fluid">
          <p>
            Lưu ý: tài khoản chính chủ có thể reset hoặc đổi License khi muốn
            đổi PC sử dụng / PM lên page facebook để đăng kí dùng thử 7 ngày
          </p>
          <div className="row mt-5">
            {/* Gói Solo */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner" >
                <div className="price-card custom-hover-card">
                  <h3 className="uppercase">
                    <img src={iconT} alt="" className="me-3" />
                    Basic Solo
                  </h3>
                  <p>
                    <span className="price">3.000.000 đ</span>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      <b>01 máy sử dụng vĩnh viễn</b>
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Không giới hạn profile
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Hỗ trợ trọn đời
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Automation API
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      No code automation
                    </li>
                  </ul>
                  <div className="pt-5">
                    <button className="btn border btn-outline-custom w-100">
                      Upgrade
                    </button>
                    <div className="w-100 text-center ">
                      <a
                        href="#"
                        className="text-decoration-none a-learn-more"

                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gói Team 5PC */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner">
                <div className="price-card custom-hover-card">
                  <h3 className="uppercase">
                    <img src={iconT} alt="" className="me-3" />
                    Basic 5
                  </h3>
                  <p>
                    <span className="price">6.000.000 đ</span>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      <b>05 máy sử dụng vĩnh viễn</b>
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Không giới hạn profile
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Hỗ trợ duy nhất chủ license
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Automation API
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      No code automation
                    </li>
                  </ul>
                  <div className="pt-5">
                    <button className="btn border btn-outline-custom w-100">
                      Upgrade
                    </button>
                    <div className="w-100 text-center ">
                      <a
                        href="#"
                        className="text-decoration-none a-learn-more"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gói Team 10PC */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner">
                <div className="price-card custom-hover-card">
                  <h3 className="uppercase">
                    <img src={iconT} alt="" className="me-3" />
                    Basic 10
                  </h3>
                  <p>
                    <span className="price">10.000.000 đ</span>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      <b>10 máy sử dụng vĩnh viễn</b>
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Không giới hạn profile
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Hỗ trợ duy nhất chủ license
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      Automation API
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"></i>
                      <img src={iconcheck} alt="" className="me-2" />
                      No code automation
                    </li>
                  </ul>
                  <div className="pt-5">
                    <button className="btn border btn-outline-custom w-100">
                      Upgrade
                    </button>
                    <div className="w-100 text-center ">
                      <a
                        href=""
                        className="text-decoration-none a-learn-more"

                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
