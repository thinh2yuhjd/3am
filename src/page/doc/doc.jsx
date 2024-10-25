import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Đảm bảo style.css có trong cùng thư mục hoặc đường dẫn đúng
import data from './data'; // Nhập đối tượng dữ liệu
import './script'; // Nếu bạn có các hàm cần thiết trong script.js
import logo from '../../img/logo.png';
const Doc = () => {
  // Kiểm tra xem data.fingerprint và data.fingerprint.children có được định nghĩa không
  const sidebarItems = data.fingerprint?.children ? data.fingerprint.children.map(item => item.title) : [];
  
  const [searchTerm, setSearchTerm] = useState(''); // Từ khóa tìm kiếm
  const [activeItem, setActiveItem] = useState(null); // Mục đang hoạt động
  const [filteredItems, setFilteredItems] = useState([]); // Mảng để chứa các mục được lọc
  const [showDropdown, setShowDropdown] = useState(false); // Biến để kiểm soát hiển thị dropdown

  useEffect(() => {
    if (searchTerm) {
      // Lọc các mục sidebar dựa trên từ khóa tìm kiếm
      const results = sidebarItems.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
      setShowDropdown(results.length > 0); // Hiển thị dropdown nếu có kết quả
    } else {
      setFilteredItems([]);
      setShowDropdown(false); // Ẩn dropdown nếu không có từ khóa
    }
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value); // Cập nhật từ khóa tìm kiếm
  };

  const activateItem = (item) => {
    setActiveItem(item); // Cập nhật mục đang hoạt động
  };

  const handleDropdownClick = (item) => {
    activateItem(item);
    setSearchTerm(''); // Xóa từ khóa tìm kiếm sau khi chọn mục
    setShowDropdown(false); // Ẩn dropdown
  };

  // Lấy mô tả của mục đang hoạt động từ data
  const activeItemDescription = data.fingerprint?.children.find(item => item.title === activeItem)?.description || 'Chi tiết nội dung sẽ hiển thị ở đây.';

  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a href="" onClick={() => window.location.reload()}>
                <b>
                  <img src={logo} alt="Logo" className="logo" />
                </b>
              </a>
              <div className="search-container position-relative">
                <input
                  id="inputSearch"
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm"
                  value={searchTerm}
                  onChange={handleSearchInput}
                />
                {showDropdown && (
                  <div id="dropdownResults" className="dropdown-menu show">
                    {filteredItems.map((item, index) => (
                      <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleDropdownClick(item)}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        <div className="row border">
          <div className="col-md-3 sidebar">
            <h4 className="sidebar-title">Browser Fingerprint</h4>
            <ul className="list-unstyled ps-4">
              {sidebarItems.map((item, index) => (
                <li
                  key={index}
                  className="sidebar-item hoverB last-updated"
                  onClick={() => activateItem(item)}
                >
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div id="content" className="col-md-9 content">
            <h1 id="content-title">{activeItem || 'Chọn một mục để xem chi tiết'}</h1>
            <p id="content-description" dangerouslySetInnerHTML={{ __html: activeItemDescription }}></p>
            <div className="last-updated">Last updated 11 months ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc;
