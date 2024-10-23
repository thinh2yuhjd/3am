import React from "react";
import iconA from '../../img/icon/trustworthy-status.svg'
import iconB from '../../img/icon/mcil.png'
import iconC from '../../img/icon/browserleaks.png'
import iconD from '../../img/icon/creepjs.png'
import iconE from '../../img/icon/f.vision.jpg'
import iconF from '../../img/icon/AppIcon-WhiteSymbol.png'
import iconH from '../../img/icon/scan.jpg'
import "./index.css";

import ProfileImage from "../../img/Profile.jpg";
import why3am from "../../img/why3am.png";
import Video from "./video";
const Home = () => {
  return (
    <div className="mt-5">
      <div className="home-container mt-5">
        <div className="mt-5">
          <div className="container">
            <h1>Web3 Automation Multi</h1>
            <p className="last-updated">
              Giải pháp anti detect browser và quản lý nhiều profile trên cùng
              một PC
            </p>
            <div className="d-flex justify-content-center">
              <button className="download-button mt-5 text-center">
                <span className="icon"></span>
                Tải xuống cho Windows
              </button>
            </div>
          </div>

          <div className="image-gallery mt-4 ">
            <img
              src={ProfileImage}
              alt="Web3 Automation"
              className="responsive-image"
            />
          </div>
          <div className="container-fluid">
            <section className="section" id="section_1700118574">
              <div className="bg section-bg fill"></div>
              <div
                className="section-content relative container"
                style={{ padding: "20px 0" }}
              >
                <div className="row align-center">
                  <div className="col overflow-hidden small-12 large-12 text-center">
                    <h2 style={{ marginBottom: "20px" }}>
                      Được hơn 20.000 người dùng tin tưởng. Đã vượt qua tất cả
                      các bài kiểm tra
                    </h2>
                    <div
                      className="marquee"
                      style={{ height: "55px", overflow: "hidden" }}
                    >
                      <ul className="test-site-container">
                        <li>

                          <img src={iconA} alt="" width='30px' className="pe-2"/>
                          <a
                            href="https://iphey.com/"
                            target="_blank"
                            rel="noopener"
                          >
                             iphey.com
                          </a>
                        </li>
                        <li>
                        <img src={iconB} alt="" width='35px' className="pe-2"/>
                          <a
                            href="https://pixelscan.net/"
                            target="_blank"
                            rel="noopener"
                          >
                            pixelscan.net
                          </a>
                        </li>
                        <li>
                        <img src={iconC} alt="" width='35px' className="pe-2"/>
                          <a
                            href="https://browserleaks.com/"
                            target="_blank"
                            rel="noopener"
                          >
                            browserleaks.com
                          </a>
                        </li>
                        <li>
                        <img src={iconD} alt="" width='35px' className="pe-2"/>
                          <a
                            href="https://abrahamjuliot.github.io/creepjs/"
                            target="_blank"
                            rel="noopener"
                          >
                            creepjs
                          </a>
                        </li>
                        <li>
                        <img src={iconE} alt="" width='35px' className="pe-2"/>
                          <a
                            href="http://f.vision/"
                            target="_blank"
                            rel="noopener"
                          >
                            f.vision
                          </a>
                        </li>
                        <li>
                        <img src={iconF} alt="" width='35px' className="pe-2"/>
                          <a
                            href="https://fingerprint.com/products/bot-detection/"
                            target="_blank"
                            rel="noopener"
                          >
                            fingerprintjs
                          </a>
                        </li>
                        <li>
                        <img src={iconH} alt="" width='35px' className="pe-2"/>
                          <a
                            href="https://www.browserscan.net/"
                            target="_blank"
                            rel="noopener"
                          >
                            browserscan.net
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col-md-6 ">
              <img src={why3am} alt="Web3 Automation" />
            </div>
            <div className="col-md-6 chu ">
              <b>Tại sao nên chọn 3AM</b>
              <p>
                - Tạo và dễ dàng quản lý không giới profile an toàn trên một máy
                tính duy nhất
              </p>
              <p>
                - Ẩn danh hoàn toàn với database fingerprint khổng lồ, hỗ trợ cả
                nhân trình duyệt Chromium và Firefox
              </p>
              <p>
                - Hỗ trợ no-code automation giúp người dùng tự tạo các tác vụ tự
                động hóa đa luồng, tối ưu hóa thời gian và chi phí nhân sự
              </p>
              <p>
                - Người dùng toàn quyền và độc lập trong việc lưu trữ profile
              </p>
              <p>
                - License vĩnh viễn, giá rẻ nhất thị trường với hơn 20 ngàn
                thiết bị đang sử dụng tính từ năm 2021
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 chu ">
        <h2>Bảng giá</h2>
        <div className="mt-3 last-updated">
          <p>
            Lưu ý: tài khoản chính chủ có thể reset hoặc đổi License khi muốn
            đổi PC sử dụng / PM lên page facebook để đăng kí dùng thử 7 ngày
          </p>
          <div className="container row mt-5">
            {/* Gói Solo */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner">
                <div className="price-card ">
                  <h3 className="uppercase">Basic Solo</h3>
                  <p>
                    <span className="price">3.000.000 đ</span>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      <b>01 máy sử dụng vĩnh viễn</b>
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Không giới hạn profile
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Hỗ trợ trọn đời
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Automation API
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      No code automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gói Team 5PC */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner">
                <div className="price-card">
                  <h3 className="uppercase">Basic 5</h3>
                  <p>
                    <span className="price">6.000.000 đ</span>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      <b>05 máy sử dụng vĩnh viễn</b>
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Không giới hạn profile
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Hỗ trợ duy nhất chủ license
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Automation API
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      No code automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Gói Team 10PC */}
            <div className="col-md-4 col-sm-12">
              <div className="col-inner">
                <div className="price-card">
                  <h3 className="uppercase">Basic 10</h3>
                  <p>
                    <span className="price">10.000.000 đ</span>
                  </p>
                  <ul>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      <b>10 máy sử dụng vĩnh viễn</b>
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Không giới hạn profile
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Hỗ trợ duy nhất chủ license
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      Automation API
                    </li>
                    <li className="pb-2">
                      <i className="fa-solid fa-check"> </i>
                      No code automation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container chu mt-5">
        <h2>Hướng dẫn sử dụng</h2>
        <div className="">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default Home;
