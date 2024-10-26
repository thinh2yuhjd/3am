import React, { useState } from "react";
import { data } from "./data";
import logo from "../../img/logo.png"
import './index.css'
const Doc = () => {
  // Trạng thái để theo dõi việc hiển thị của các danh sách con
  const [openSections, setOpenSections] = useState({
    fingerprint: false,
    api: false,
    auto: false,
    loi: false,
  });

  // Trạng thái để theo dõi mô tả của mục lớn đã chọn
  const [selectedDescription, setSelectedDescription] = useState("");
  
  // Trạng thái để theo dõi mục con đã chọn
  const [selectedChild, setSelectedChild] = useState(null);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));

    // Cập nhật mô tả tương ứng khi nhấp vào mục lớn
    setSelectedDescription(data[section].description);
    setSelectedChild(null); // Reset mục con đã chọn
  };

  const handleChildClick = (event, child) => {
    event.stopPropagation(); // Ngăn chặn sự kiện nhấp chuột lan truyền lên mục cha
    setSelectedChild(child);
    
    setSelectedDescription(""); // Ẩn mô tả của mục cha
  };

  return (
    <div>
       <div className="container">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
          <img src={logo} alt="logo" />
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
               
              />
            </form>
          </div>
        </nav>
      </div>
      <div className="mb-5" style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul>
              <li onClick={() => toggleSection("fingerprint")}>
                {data.fingerprint.title}
                {openSections.fingerprint && (
                  <ul>
                    {data.fingerprint.children.map((item, index) => (
                      <li key={index} onClick={(event) => handleChildClick(event, item)}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li onClick={() => toggleSection("api")}>
                {data.api.title}
                {openSections.api && (
                  <ul>
                    {data.api.children.map((item, index) => (
                      <li key={index} onClick={(event) => handleChildClick(event, item)}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li onClick={() => toggleSection("auto")}>
                {data.auto.title}
                {openSections.auto && (
                  <ul>
                    {data.auto.children.map((item, index) => (
                      <li key={index} onClick={(event) => handleChildClick(event, item)}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li onClick={() => toggleSection("loi")}>
                {data.loi.title}
                {openSections.loi && (
                  <ul>
                    {data.loi.children.map((item, index) => (
                      <li key={index} onClick={(event) => handleChildClick(event, item)}>
                        {item.title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            {selectedDescription && !selectedChild && (
              <p>{selectedDescription}</p>
            )}
            {selectedChild && (
              <div>
                <h4>{selectedChild.title}</h4>
                <p>{selectedChild.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc;
