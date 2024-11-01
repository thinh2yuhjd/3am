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

import { useNavigate, Link } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const onhangdleLogin = () => {
    navigate("/login");
  };
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOpen = () => {
    setIsOpenSearch((prev) => !prev);
  };

  const toggleDropdown = () => setOpen((prev) => !prev);

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
    <div style={{ backgroundColor: "#F4F6F8", overflow: "scroll" }}>
      <div className="am-header">
        <img src={background} width={'100%'}/>
        <div className="am-header-search">
          <div
            className="border rounded-pill"
            style={{ width: "100%", backgroundColor: "#FFFFFF"}}
          >
            <div className="row" style={{ height: "64px" }}>
              <div className="col-md-3 my-auto text-start">
                <img src={logo} alt="Logo" className="ps-3" />
              </div>
              <div className="col-md-6 my-auto">
                <ul className="d-flex">
                  <li className="nav-item">
                    <a className="nav-link active color_nav" href="#">
                      Trang Chủ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active color_nav" href="#">
                      Bảng Giá
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/doc" className="nav-link active color_nav">
                      Tài Liệu
                    </Link>
                  </li>
                  <li className="nav-item dropdown" ref={dropdownRef}>
                    <a
                      className="nav-link dropdown-toggle color_nav"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      onClick={toggleDropdown}
                    >
                      Mua Phần Mềm
                    </a>
                    {open && (
                      <ul
                        className="dropdown-menu"
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                        }}
                      >
                        <li>
                          <a className="dropdown-item color_nav" href="#">
                            Mua qua facebook
                          </a>
                        </li>
                        <li className="dropdown-item color_nav">
                          <a href="" className="text-decoration-none color_nav">
                            Mua online
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
              <div className="col-md-3 my-auto d-flex justify-content-end pe-4">
                <div onClick={handleOpen}>
                  <img src={search_icon} alt="search" className="pe-3" />
                </div>
                <button
                  className="rounded-pill"
                  style={{ width: "100px", backgroundColor: "#1C252E" }}
                  onClick={onhangdleLogin}
                >
                  <a style={{ color: "white" }}>Đăng ký</a>
                </button>
              </div>
            </div>
          </div>
          {isOpenSearch && (
            <div className="search-popup-overlay" onClick={handleOpen}>
              <div
                className="search-popup-content"
                onClick={(e) => e.stopPropagation()}
              >
                <h2>Khu vực tìm kiếm</h2>
                <input
                  type="text"
                  placeholder="Search..."
                  className="form-control"
                />
                <button className="btn btn-primary mt-2">Tìm kiếm</button>
              </div>
            </div>
          )}
        </div>
        <div className="am-header-content mt-1">
          <div className="container pt-5 text-start">
            <div className="col-md-3" style={{ color: "white" }}>
              <h1 style={{ fontSize: "60px", fontWeight: "600" }}>
                Web3 Automation Multiple
              </h1>
              <p className="last-updated pt-3">
                Giải pháp trình duyệt anti-detect và quản lý nhiều tài khoản
                trên một máy tính giúp bảo vệ danh tính, vận hành an toàn và
                hiệu quả cho các hoạt động tiếp thị và quản lý tài khoản.
              </p>
              <div className="d-flex">
                <button
                  className="rounded-pill d-flex align-items-center justify-content-evenly p-2"
                  style={{ width: "250px", backgroundColor: "#24A1DE" }}
                >
                  <span className="icon "></span>
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
        </div>
      </div>

      <div className="">
        <h1 style={{ fontSize: "50px", fontWeight: "600", color: "#172755" }}>
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
        <ul className="test-site-container  w-100 d-flex align-items-center justify-content-evenly">
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
          <div className="col-md-6 col-sx-12">
            <div className="overflow-hidden object-fit">
              <img src={why3am} alt="Web3 Automation" className="w-100 h-100" />
            </div>
          </div>
          <div className="col-md-6 col-sx-12 ps-5">
            <div className="overflow-hidden pt-5 mt-5 text-start">
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
      <div className="container mt-5 chu">
        <h2 style={{ color: "#24A1DE" }}>Bảng giá</h2>
        <div className="mt-3 container-fluid">
          <p>
            Lưu ý: tài khoản chính chủ có thể reset hoặc đổi License khi muốn
            đổi PC sử dụng / PM lên page facebook để đăng kí dùng thử 7 ngày
          </p>
          <div className=" row mt-5">
            {/* Gói Solo */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner">
                <div className="price-card">
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
                        className="text-decoration-none "
                        style={{ color: "gray" }}
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
                <div className="price-card">
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
                        className="text-decoration-none"
                        style={{ color: "gray" }}
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
                <div className="price-card">
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
                        href="#"
                        className="text-decoration-none"
                        style={{ color: "gray" }}
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
      <div className="container">
        <div className="mt-5 text-start">
          <h2 style={{ color: "#24A1DE" }}>Hướng dẫn sử dụng</h2>
        </div>
        <div>
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Home;
