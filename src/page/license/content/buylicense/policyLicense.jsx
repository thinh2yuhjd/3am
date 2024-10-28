import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PolicyLicensePage({ onBack }) {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckedPolicy = (event) => {
    setIsChecked(event.target.checked);
  };

  const handlePayment = () => {
    if (isChecked) {
      navigate('/license/payment');
    }
  };

  return (
    <div className="container-fluid">
      <div className="container mt-2">
        <div className="bg-white rounded" style={{ padding: '20px' }}>
          <h3 className="title">Điều khoản mua phần mềm</h3>

          <div className="mt-4">
            <p>
              <strong>
                Bảo hành đối với các phần mềm chạy phụ thuộc hệ thống khác <br />
                (Crawler, các phần mềm nuôi tài khoản tự động, các phần mềm chạy phụ thuộc API bên thứ ba)
              </strong>
            </p>

            <p className="mb-2">
              Các phần mềm sẽ thường xuyên được cập nhật và khách hàng chỉ mất một khoản phí nhỏ (từ 150.000-300.000đ) một khi Platform nguồn thay đổi cấu trúc quá lớn dẫn tới phải làm lại toàn bộ core phần mềm (thông thường chỉ áp dụng với các phần mềm bán không chạy).
              <strong className="ps-1"> Trường hợp đặc biệt: </strong>
              Một số phần mềm không còn khả năng fix để hoạt động trở lại (thông thường bị phụ thuộc API bên thứ ba), người dùng sẽ được hoàn phí trong vòng 03 tháng đầu tiên.
            </p>

            <strong>Bảo hành đối với các phần mềm chạy độc lập</strong>
            <p className="mb-2">
              Miễn phí fix mọi lỗi phát sinh, các update dựa trên đóng góp của người dùng (đôi khi sẽ có update có phí với những tính năng lớn, tuy nhiên người dùng có thể trả phí để sử dụng hoặc không).
            </p>

            <strong>Refund</strong>
            <p className="mb-2">
              Trong trường hợp phần mềm chạy không đúng như đã tư vấn, hoặc có phát sinh lỗi không mong muốn trên máy bên khách hàng, chúng tôi sẽ hỗ trợ fix tích cực để phần mềm hoạt động bình thường (trong 1-2 ngày tùy mức độ cần chỉnh sửa). Nếu không được, sẽ hoàn trả toàn bộ.
              <strong> Bạn chỉ có thể yêu cầu refund trong vòng 3 ngày kể từ ngày mua.</strong>
            </p>

            <strong>Hỗ trợ</strong>
            <p>
              Một license chúng tôi chỉ hỗ trợ một người duy nhất và cũng là chủ sở hữu license.
            </p>

            <p>
              <strong>Lưu ý:</strong>
              <span className="px-1">
                Chúng tôi không hỗ trợ đối với trường hợp mua bán lại license/tài khoản bởi license là vĩnh viễn và đã có chi phí hỗ trợ hướng dẫn sử dụng một lần.
              </span>
              Hiểu đơn giản: bạn không thể sử dụng license vài năm sau đó bán cho người khác và được chúng tôi support như một khách hàng mới.
            </p>

            <strong>Bảo mật</strong>
            <p>
              Đa phần các phần mềm trong hệ sinh thái đều chạy trên .NET Framework/ngôn ngữ C# nên rất dễ bị crack. Bởi vậy, chúng tôi đã sử dụng patch mã hóa và xóa trộn code để hạn chế điều này. Tuy nhiên, việc mã hóa code cũng làm cho các trình Antivirus nhận diện nhầm và xóa app trong quá trình sử dụng, bạn cần
              <strong> Thêm ngoại lệ vào antivirus </strong>
              để sử dụng app được ổn định nhất.
            </p>

            <p>
              Công ty thương mại điện tử Winners Farm cam kết mã nguồn không chứa mã độc, botnet và chịu trách nhiệm trước pháp luật!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex flex-column flex-md-row justify-content-end align-items-center">
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <input
                id="checkPolicy"
                type="checkbox"
                className="me-2"
                checked={isChecked}
                onChange={handleCheckedPolicy}
              />
              <label htmlFor="checkPolicy" className="me-3">
                Tôi đã đọc và đồng ý điều khoản trên
              </label>
            </div>

            <button
              disabled={!isChecked}
              onClick={handlePayment}
              className={`${isChecked ? 'custom-button rounded border-0' : 'custom-button-1 rounded border-0'}`}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
