import React, { useEffect, useRef, useState } from "react";

const Script = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const searchFunction = () => {
    const input = searchInput.toLowerCase();
    const sidebarItems = Array.from(document.querySelectorAll(".sidebar-item"));
    
    // Tìm kiếm các phần tử sidebar dựa trên input
    const results = sidebarItems.filter((item) => {
      const text = item.innerText.toLowerCase();
      return text.includes(input) && input;
    });

    // Hiển thị dropdown nếu có kết quả
    setDropdownVisible(results.length > 0);
    dropdownRef.current.innerHTML = ""; // Xóa nội dung cũ

    results.forEach((item) => {
      const resultItem = document.createElement("div");
      resultItem.className = "dropdown-item";
      resultItem.innerText = item.innerText;
      resultItem.onclick = () => {
        item.click();
        setDropdownVisible(false);
        setSearchInput(""); // Reset input search
      };
      dropdownRef.current.appendChild(resultItem);
    });
  };

  const toggleSection = (section, arrow) => {
    const element = document.getElementById(section);
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
      arrow.classList.remove("fa-chevron-right");
      arrow.classList.add("fa-chevron-down");
    } else {
      element.style.display = "none";
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("fa-chevron-right");
    }
  };

  const showFingerprintContent = () => {
    const fingerprintData = data.fingerprint;
    document.getElementById("content-title").innerText = fingerprintData.title;
    document.getElementById("content-description").innerHTML = fingerprintData.description;
  };

  useEffect(() => {
    showFingerprintContent();
  }, [data]);

  return (
    <div>
      <input
        id="inputSearch"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyUp={searchFunction}
        placeholder="Tìm kiếm..."
      />
      {dropdownVisible && (
        <div id="dropdownResults" ref={dropdownRef} className="dropdown">
          {/* Kết quả tìm kiếm sẽ được thêm vào đây */}
        </div>
      )}
    </div>
  );
};

export default Script;
