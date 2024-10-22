import React from "react";
import "./index.css";
import ProfileImage from "../../img/Profile.jpg";
import why3am from "../../img/why3am.png";
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
                      Được tin tưởng bởi 20.000+ người dùng. Vượt qua mọi bài
                      kiểm thử
                    </h2>
                    <div
                      className="marquee"
                      style={{ height: "55px", overflow: "hidden" }}
                    >
                      <ul className="test-site-container">
                        <li>
                          <a
                            href="https://iphey.com/"
                            target="_blank"
                            rel="noopener"
                          >
                            iphey.com
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://pixelscan.net/"
                            target="_blank"
                            rel="noopener"
                          >
                            pixelscan.net
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://browserleaks.com/"
                            target="_blank"
                            rel="noopener"
                          >
                            browserleaks.com
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://abrahamjuliot.github.io/creepjs/"
                            target="_blank"
                            rel="noopener"
                          >
                            creepjs
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://f.vision/"
                            target="_blank"
                            rel="noopener"
                          >
                            f.vision
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://fingerprint.com/products/bot-detection/"
                            target="_blank"
                            rel="noopener"
                          >
                            fingerprintjs
                          </a>
                        </li>
                        <li>
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
    </div>
  );
};

export default Home;
