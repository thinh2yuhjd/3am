import React, { useState } from "react";
import logo from "../../img/logo.png";
import './index.css';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const onhangdleLogin = () => {
    navigate('/login');
  }

  const[open,setOpen] = useState(false)
  return (
    <div className="container-fluid sticky-top" style={{backgroundColor:'white'}}>
      <div className="row pt-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="col-md-2 col-sx-12 d-flex justify-content-end align-items-center">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="col-md-10 col-sx-12 ms-auto d-flex justify-content-between">
            <div className="row w-100">
              <div className="col-md-8">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly align-items-center">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Trang chủ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Sản phẩm
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/doc" className="nav-link active" aria-current="page">
                      Tài liệu
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>setOpen(p=>!p)}>
                      Mua ngay
                    </a>
                    {
                      open && (
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          width: "100%",
                          
                          display: "unset",
                           background: ""
                        }}>
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                        </ul>
                      )
                    }
                    
                  </li>
                </ul>
              </div>
              <div className="col-md-4 d-flex justify-content-start">
                <form className="d-flex align-items-center w-100 justify-content-start">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-custom" type="submit">
                    Search
                  </button>
                </form>
                <button onClick={onhangdleLogin}>Đăng nhập</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
