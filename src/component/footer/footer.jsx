import React from "react";
import "./footer.css";
import iconA from "../../img/icon/youtube.png";
import iconB from "../../img/icon/face.png";
import iconC from "../../img/icon/twitter.png";
import iconD from "../../img/icon/instagram.png";
import iconE from "../../img/icon/linkedin.png";
const Footer = () => {
  return (
    <div className="container ">
      <div className="row mt-5">
        <div className="col-md-4  text-start">
          <ul class="list-unstyled">
            <p>
              <b href="" class="text-decoration-none text-color">
                Solutions
              </b>
            </p>
            <p class="text-decoration-none text-color">Brainstorming</p>
            <p href="" class="text-decoration-none text-color">
              Ideation
            </p>
            <p href="" class="text-decoration-none text-color">
              Wireframing
            </p>
            <p href="" class="text-decoration-none text-color">
              Research
            </p>
            <p href="" class="text-decoration-none text-color">
              Design
            </p>
          </ul>
        </div>
        <div className="col-md-4  text-start">
          <ul class="list-unstyled">
            <p>
              <b href="" class="text-decoration-none text-color">
                Support
              </b>
            </p>
            <p class="text-decoration-none text-color">Contact Us</p>
            <p href="" class="text-decoration-none text-color">
              Developers
            </p>
            <p href="" class="text-decoration-none text-color">
              Documentation
            </p>
            <p href="" class="text-decoration-none text-color">
              Integrations
            </p>
            <p href="" class="text-decoration-none text-color">
              Reports
            </p>
          </ul>
        </div>
        <div className="col-md-4  text-start">
          <ul class="list-unstyled">
            <li>
              <b href="" class="text-decoration-none text-color">
                Follow Us
              </b>
            </li>
            <li>
              <img src={iconA} alt=""  width="30px" className="ps-2" />
              <img src={iconB} alt=""  width="30px" className="ps-2" />
              <img src={iconC} alt=""  width="30px" className="ps-2" />
              <img src={iconD} alt=""  width="30px" className="ps-2" />
              <img src={iconE} alt=""  width="30px" className="ps-2" />
            </li>
          </ul>
        </div>
        <div
          className="mt-5 mb-5"
          style={{ height: "1px", width: "100%", backgroundColor: "black" }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-start ">
              3AM @ 2024. All rights reserved.
            </div>
            <div className="col-md-6 ">
              <div className="d-flex justify-content-end gap-4">
                <span>Terms</span>
                <span>Privacy</span>
                <span>Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
