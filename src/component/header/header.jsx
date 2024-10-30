// import React, { useState,useEffect, useRef  } from "react";
// import logo from "../../img/logo.png";

// import { useNavigate, Link } from "react-router-dom";
// import search_icon from "../../img/icon/search_icon.png";
// const Header = () => {
//   const navigate = useNavigate();
//   const onhangdleLogin = () => {
//     navigate("/login");
//   };
//   const [isOpenSearch, setisOpensearch] = useState(false);

//   const handleOpen = () => {
//     setisOpensearch((prev) => !prev);
//   };

//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const toggleDropdown = () => setOpen((prev) => !prev);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false); 
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   return (
//     <div className="container mt-4">
//       <div
//         className="border mt-4 rounded-pill "
//         style={{ backgroundColor: "#FFFFFF" }}
//       >
//         <div className="row" style={{ height: "64px" }}>
//           <div className="col-md-3 my-auto text-start">
//             <div className="">
//               <img src={logo} alt="" className="ps-3" />
//             </div>
//           </div>
//           <div className="col-md-6 my-auto ">
//             <div className="">
//               <ul className="d-flex " >
//                 <li className="nav-item">
//                 <a
//                       className="nav-link active color_nav"
//                       aria-current="page"
//                       href="#"
//                     >
//                       Trang Chủ
//                     </a>
// </li>
// <li className="nav-item">
//                     <a
//                       className="nav-link active color_nav"
//                       aria-current="page"
//                       href="#"
//                     >
//                      Bảng Giá
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <Link
//                       to="/doc"
//                       className="nav-link active color_nav"
//                       aria-current="page"
//                     >
//                       Tài Liệu
//                     </Link>
//                   </li>
//                   <li className="nav-item dropdown" ref={dropdownRef}>
//                 <a
//                   className="nav-link dropdown-toggle color_nav"
//                   href="#"
//                   id="navbarDropdownMenuLink"
//                   role="button"
//                   onClick={toggleDropdown}
//                 >
//                   Mua Phần Mềm
//                 </a>
//                 {open && (
//                   <ul
//                     className="dropdown-menu"
//                     style={{
//                       position: "absolute",
//                       top: "100%",
//                       left: 0,
//                       display: "unset",
//                     }}
//                   >
//                     <li>
//                       <a className="dropdown-item color_nav" href="#">Mua qua facebook</a>
//                     </li>
//                     <li className="dropdown-item color_nav">
//                       <Link to="/license" className="text-decoration-none color_nav">Mua online</Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>

//               </ul>
//             </div>
//           </div>
//           <div className="col-md-3 my-auto d-flex justify-content-end pe-4">
//             <div className="" onClick={handleOpen}>
//               <img src={search_icon} alt="search" className="pe-3"/>
//             </div>
//             <button className="rounded-pill  " style={{width:"40%"}} onClick={onhangdleLogin}> 
           
                    
//               Đăng ký
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpenSearch && (
//         <div className="search-popup-overlay" onClick={handleOpen}>
//           <div
//             className="search-popup-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2>Khu vực tìm kiếm</h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="form-control"
//             />
//             <button className="btn btn-primary mt-2">Tìm kiếm</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;
