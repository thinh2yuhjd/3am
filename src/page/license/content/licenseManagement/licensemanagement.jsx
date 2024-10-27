import React from "react";
import iconWarning from "../../../../img/icon/warning.png";
import iconArrowWarning from "../../../../img/icon/arrowWarning.png";

import { dataLicenseMGN } from "./dataLicenseMgn";

export function LicenseManagementPage() {
  const hasContent = dataLicenseMGN.some((item) => item.content); // Kiểm tra xem có ít nhất một phần content không rỗng

  return (
    <div className="container pt-5">
      <h3 style={{ fontWeight: "600" }}>License của tôi</h3>
      <div className="row mt-4">
        <div className="col-md-12">
          <div
            className="border p-3 rounded"
            style={{ backgroundColor: "#ffffe3" }}
          >
            <img className="pe-2" src={iconWarning} alt="" />
            Đa phần các phần mềm chúng tôi đều patch để bảo vệ code và hạn chế
            crack. Trong một số trường hợp, phần mềm có thể bị Antivirus nhận
            diện nhầm là virus và bị xóa file thực thi, vì vậy, để đảm bảo phần
            mềm hoạt động ổn định, hãy Thêm ngoại lệ thư mục phần mềm vào
            Antivirus (Nếu sử dụng Antivirus khác Windows Defender, hãy tìm kiếm
            trên google để xem hướng dẫn)
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <div
            className="border p-3 rounded"
            style={{ backgroundColor: "#d7ebff", color: "#0080c0" }}
          >
            Nhấn vào biểu tượng
            <img className="px-2" src={iconArrowWarning}></img>nếu bạn muốn kích
            hoạt thêm module hoặc thiết bị cho License. <br />
            Mật khẩu giải nén / cài đặt của tất cả phần mềm là : <b>
              3am.vn
            </b>{" "}
            hoặc <b>3am.net</b>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="table-responsive mt-4">
              <table className="table table-bordered text-center">
                <thead style={{backgroundColor:'#eeeeee'}}>
                  <tr>
                    {dataLicenseMGN.map((item, index) => (
                      <th key={index} scope="col" className="text-start">
                        {item.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {hasContent ? ( 
                dataLicenseMGN.map((item, index) => (
                  <td key={index} className='text-start'>{item.content}</td>
                ))
              ) : (
                <td colSpan={dataLicenseMGN.length} className='text-center'>No Data</td>
              )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
