import React from "react";
import "./index.css";
import iconA from '../../../../img/icon/mess.png'
import iconB from '../../../../img/icon/check.png'
export function SupportPage() {
  return (
    <div className="container pt-4">
      <div className="border center-box box-color">
        <h3 className="fw-bold mb-4">
          Trước khi gửi yêu cầu hỗ trợ, vui lòng đọc kĩ các điều khoản của chúng
          tôi
        </h3>
        <div className="text-color">
          <ul>
            <li>
           <img src={iconB} width={'20px'} class="mt-[-1px]" />
              Mỗi license chỉ có duy nhất một chủ sở hữu đồng thời là người được
              hỗ trợ duy nhất. Điều đó có nghĩa nếu bạn mua lại license, hoặc là
              người dùng chung license có số máy lớn hơn một đều sẽ không được
              hỗ trợ, trong trường hợp đó, vui lòng sử dụng các tài liệu và
              thông qua các cộng đồng của chúng tôi.
            </li>
            <li>
            <img src={iconB} width={'20px'} class="mt-[-1px]" />
              Thời gian phản hồi sẽ tùy thuộc vào lượng người dùng đang yêu cầu
              hỗ trợ, trung bình từ 30 phút tới 2 giờ
            </li>
          </ul>
        </div>
        
        <button className="btn border btn-outline-custom mt-4">
  <img src={iconA} alt="" /> Liên hệ Page
</button>

      </div>
    </div>
  );
}
