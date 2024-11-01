import React, { useState } from 'react'
import './test.css'
export default function Test() {

  const [isopenSidebar, setisopenSidebar] = useState(false);
  const handleOpen = () => {
    setisopenSidebar(!isopenSidebar)
  }
  return (
    <div className=''>
      <div className="header-main d-flex border">
        <div className={`header-sidebar ${isopenSidebar ? 'collaps' : 'expends'} d-flex position-relative`}>
          <div className={`border sidebar-sub ${isopenSidebar ? 'collaps' : 'expends'}`}>icon</div>
          <button className='position-absolute icon-sub' onClick={handleOpen}>aaa</button>
        </div>
        <div className="header-content text-end w-100"></div>

      </div>
      <div className="d-flex">
        <div className={`content-sidebar ${isopenSidebar ? 'collaps' : 'expends'} border`}>contents</div>
        <div className="content-content border">contentc</div>
      </div>
    </div>
  )
}
