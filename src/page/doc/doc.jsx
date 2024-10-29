import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./index.css";
import iconA from "../../img/icon/docicon.png"; // Import icon của bạn
import imgProfile from "../../img/Profile.jpg";
import imgGroup from "../../img/group.jpeg";
import imgDSexcel from "../../img/mauexcel.jpg";
import tabTT from "../../img/tab_thaotacnhanh.jpg";
import CreateProfiles from "../../img/tao_profile.jpg";
import CreateFromToExcel from "../../img/taotuexcel.jpg";

const Doc = () => {
  const [visibleList1, setVisibleList1] = useState(false);
  const [visibleList2, setVisibleList2] = useState(false);
  const [visibleList3, setVisibleList3] = useState(false);
  const [visibleList4, setVisibleList4] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  // Định nghĩa nội dung cho từng danh mục một lần duy nhất
  const browserFingerprintContent = (
    <>
      <h2>Browser fingerprint</h2>
      Fingerprint – thực ra đây chỉ là một khái niệm tương đối, không hoàn toàn
      sát với ý nghĩa tính duy nhất của dấu vân tay, sẽ có rất nhiều thiết bị có
      Fingerprint hoàn toàn giống nhau và số đó là vô cùng nhiều trên thế giới
      (cùng nhãn hiệu, cùng cấu hình, cài đặt cùng một phiên bản hệ điều hành,
      driver sẽ có Fingerprint hoàn toàn giống nhau)
      <br />
      <br />
      Fingerprint là tổng hòa của rất nhiều các thông số của máy như số nhân
      CPU, dung lượng RAM, loại card đồ họa, độ phân giải màn hình… (phần cứng),
      phiên bản hệ điều hành, timezone, ngôn ngữ, loại trình duyệt, phiên bản
      trình duyệt (phần mềm)… Hãy lưu ý là tổng hòa rất nhiều thông số chứ không
      phải riêng một thông số nào. Giống như việc bạn phân biệt một người nào đó
      là bạn nhìn tổng thể ngoại hình của người đó chứ không thể nhìn mỗi cái
      mắt, cái mũi, cái tay, cái chân mà nhận ra đó là ai.
      <br />
      <br />
      Một website không thể gọi trực tiếp các thông số của thiết bị mà phải
      thông qua các phương thức javascript do trình duyệt cung cấp.
    </>
  );
  const apiDocument = (
    <>
      <h2>Document</h2>
      Với giao diện tối ưu giúp bên thứ ba quản lý, thêm, sửa, xóa profiles trên
      3AM, đồng thời có thể thao tác mở hoặc đóng profile một cách an toàn với
      đầy đủ thông số thiết bị đã tạo.
    </>
  );
  const None_code = (
    <>
      <h2>None-code automation</h2>
      3AM cung cấp các thẻ script giúp người dùng có thể tự tạo các automation
      đơn giản.
      <br />
      <br />
      Tuy là none-code, dễ sử dụng nhưng việc người dùng phải logic như một
      coder để script chạy mượt mà là một điều bắt buộc, vì vậy nó không dành
      cho số đông.
    </>
  );
  const Error = (
    <>
      <h2>Lỗi thường gặp</h2>
      Tổng hợp các lỗi thường gặp
    </>
  );
  useEffect(() => {
    setSelectedContent(browserFingerprintContent);
  }, []);

  const toggleList1Visibility = () => {
    setVisibleList1(!visibleList1);
  };

  const toggleList2Visibility = () => {
    setVisibleList2(!visibleList2);
  };

  const toggleList3Visibility = () => {
    setVisibleList3(!visibleList3);
  };

  const toggleList4Visibility = () => {
    setVisibleList4(!visibleList4);
  };

  const handleItemClick = (itemContent) => {
    setSelectedContent(itemContent);
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
      <div
        className="mb-3"
        style={{ height: "1px", width: "100%", backgroundColor: "gray" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 custom-doc-li">
            <div className="custom-hover"
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "space-between",
              }}
            >
              <p
                onClick={() => setSelectedContent(browserFingerprintContent)}
                style={{ marginRight: "10px", flexGrow: 1 }}
              >
                Browser fingerprint
              </p>
              <img
                src={iconA}
                alt="Toggle List"
                onClick={toggleList1Visibility}
                className={visibleList1 ? "rotated" : ""}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  marginBottom: "15px",
                }}
              />
            </div>
            {visibleList1 && (
              <ul>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Địa chỉ IP</h2>
                        Địa chỉ IP là một thông tin tốt nhất để định danh người
                        dùng, vì vậy nếu bạn sử dụng proxy hãy chú ý tới nguồn
                        proxy thật tốt và uy tín.
                        <br />
                        Với người dùng antidetect nói chung thì chắc chắn không
                        thể không sử dụng proxy. Hiện nay nguồn IPv4 trên thế
                        giới đang dần cạn kiệt, các hệ thống lớn cũng đã có rất
                        nhiều data về blacklist proxy nên việc tìm được nguồn
                        proxy sạch khá khó khăn, đặc biệt với newbie.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Địa chỉ IP
                </li>

                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Timezone</h2>
                        <br />
                        Mỗi quốc gia (hoặc một số quốc gia) có một timezone khác
                        nhau (Như Việt Nam, Bangkok chung múi giờ +7). Nếu địa
                        chỉ IP của bạn thể hiện bạn đang ở US, nhưng thông số
                        timezone lại ở Việt Nam thì đây là việc khá đáng ngờ vì
                        không ai sống tại Mỹ mà cài đặt timezone ở Việt Nam cả.
                        <br />
                        <br /> Việc của antidetect là thay đổi timezone ở
                        profile giống với vị trí ứng với địa chỉ IP.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Timezone
                </li>

                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Geo location</h2>
                        <br />
                        Geo location được sử dụng định vị bạn đang ở đâu trên
                        bản đồ một cách chính xác dựa trên kinh độ và vĩ độ. Tuy
                        nhiên cũng có khá nhiều người tắt tính năng định vị này
                        nên thông số này có thể không thực sự quan trọng.
                        <br />
                        <br />
                        Antidetect sẽ sử dụng một api bên thứ ba để phiên IP
                        đang sử dụng sang vị trí đương đối và trả về kết quả
                        kinh độ, vĩ độ, từ đó trả kết quả cho website nếu có
                        lệnh gọi.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Geo location
                </li>

                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>WebRTC IP</h2>
                        WebRTC là một công nghệ giúp hai thiết bị có thể kết nối
                        trực tiếp với nhau mà không quan tâm tới các kết nối
                        trung gian, nó được sử dụng trong các ứng dụng cần kết
                        nối nhanh như video call.
                        <br />
                        Trước khi có WebRTC, 2 người dùng facebook muốn video
                        call cho nhau thì đều phải gửi / truyền các gói tin qua
                        server facebook (thường bên US, từ VN-US-VN rất mất thời
                        gian), điều này vừa làm cho server facebook chịu tải
                        cao, vừa làm trải nghiệm khách hàng không tốt vì thời
                        gian kết nối chậm dẫn tới giật, lag.
                        <br />
                        Khi có WebRTC, 2 thiết bị của người dùng có thể khởi tạo
                        kết nối trực tiếp cho nhau (thông thường sử dụng UDP),
                        việc này giúp tốc độ kết nối tốt và giảm tải rất nhiều
                        cho server.
                        <br />
                        <br />
                        Chính vì có kết nối trực tiếp, bỏ qua các kết nối trung
                        gian, WebRTC cũng được ứng dụng trong vấn đề bảo mật để
                        xác định IP thật của người dùng.
                        <br />
                        <br />
                        Website sẽ yêu cầu máy tính kết nối WebRTC, sau khi kết
                        nối thành công, máy tính và website sẽ có kết nối trực
                        tiếp và hoàn toàn bỏ qua các proxy trung gian nếu có, từ
                        đây website có thể lấy được IP thật của thiết bị thông
                        qua 2 cách:
                        <br />
                        <br />+ Đọc trong gói tin UDP (thường được sử dụng)
                        <br />+ Yêu cầu Stun server lấy và trả về kết quả (Ebay
                        sử dụng cách này)
                        <br />
                        <br />
                        Việc của antidetect là ghi đè IP thật trong gói tin UDP
                        cũng như xử lý với stun server.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  WebRTC IP
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Hardware: Canvas</h2>
                        Canvas là một HTML5 API, nó được sử dụng để vẽ (render)
                        2D để hiển thị lên Browser, ví dụ như một hình tròn,
                        hình tam giác, render một đoạn chữ thành hình ảnh và
                        nhiều thứ khác. Các hình 2D này hơi khác nhau ở các loại
                        card màn hình (mắt thường khó có thể thể phân biệt) nên
                        đây có thể sử dụng là một trong các thông số xác định sự
                        khác nhau giữa các loại card màn hình.
                        <br />
                        Antidetect browser sử dụng kĩ thuật noise (làm nhiễu) để
                        hình ảnh sau khi render có hơi khác một chút so với
                        render gốc.
                        <br />
                        Đặc điểm của kĩ thuật noise:
                        <br />
                        1. Kĩ thuật noise không thể biến hình ảnh sau render của
                        card đồ họa A giống hệt với hình ảnh sau render của card
                        đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể
                        phẫu thuật người A thành người B được (tất cả chi tiết
                        từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác
                        với người A lúc trước.
                        <br />
                        2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất
                        rất lớn cho fingerprint.
                        <br />
                        3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống
                        lớn có thu thập big data để kiểm tra.
                        <br />
                        <br />
                        Nếu chỉ xét riêng một thông số canvas, có hàng chục
                        triệu máy tính khác nhau trên khắp thế giới giống nhau
                        (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và
                        trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính
                        duy nhất rất cao.
                        <br />
                        <br />
                        Ví dụ đơn giản:
                        <br />
                        Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập
                        các mã hash canvas lưu lại, khi bạn truy cập nếu bạn
                        giống rất nhiều người khác là điều bình thường, nhưng
                        bạn là duy nhất mới là điều đáng nghi và gần như không
                        thể xảy ra (bạn không thể sử dụng một loại card đồ họa,
                        cài hệ điều hành và trình duyệt mà không ai trong số
                        hàng tỉ người đó có).
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Hardware: Canvas
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Hardware: WebGL</h2>
                        WebGL là một API Javascript giúp trình duyệt render các
                        khối 3D (như một khối tam giác 3D, hình hộp…), mỗi loại
                        card khi render cũng sẽ hơi khác nhau một chút, thuật
                        toán khử răng cưa, làm mịn ảnh cũng khác nhau nên đây
                        cũng là một trong những thông số giúp xác định sự khác
                        nhau giữa các loại card màn hình. Việc render 3D phức
                        tạp hơn render 2D rất nhiều và có khá nhiều tùy chỉnh
                        nâng cao nhất là đối với các loại card rời hiện nay, nên
                        việc thêm noise đúng kỹ thuật trong quá trình render là
                        khá tốt đối với nhiều website.
                        <br />
                        Đặc điểm của kĩ thuật noise:
                        <br />
                        1. Kĩ thuật noise không thể biến hình ảnh sau render của
                        card đồ họa A giống hệt với hình ảnh sau render của card
                        đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể
                        phẫu thuật người A thành người B được (tất cả chi tiết
                        từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác
                        với người A lúc trước.
                        <br />
                        2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất
                        rất lớn cho fingerprint.
                        <br />
                        3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống
                        lớn có thu thập big data để kiểm tra.
                        <br />
                        <br />
                        Nếu chỉ xét riêng một thông số canvas, có hàng chục
                        triệu máy tính khác nhau trên khắp thế giới giống nhau
                        (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và
                        trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính
                        duy nhất rất cao.
                        <br />
                        <br />
                        Ví dụ đơn giản:
                        <br />
                        Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập
                        các mã hash canvas lưu lại, khi bạn truy cập nếu bạn
                        giống rất nhiều người khác là điều bình thường, nhưng
                        bạn là duy nhất mới là điều đáng nghi và gần như không
                        thể xảy ra (bạn không thể sử dụng một loại card đồ họa,
                        cài hệ điều hành và trình duyệt mà không ai trong số
                        hàng tỉ người đó có).
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Hardware: WebGL
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Hardware: Audio</h2>
                        Tương tự với Canvas, WebGL là đặc trưng của các loại
                        card đồ họa, thì Audio context là đặc trưng của card âm
                        thanh.
                        <br />
                        <br />
                        Việc xử lý cũng tương tự là sử dụng kĩ thuật noise để âm
                        thanh sau khi render khác với âm thanh gốc, từ đó tạo sự
                        khác nhau về fingerprint.
                        <br />
                        Đặc điểm của kĩ thuật noise:
                        <br />
                        1. Kĩ thuật noise không thể biến hình ảnh sau render của
                        card đồ họa A giống hệt với hình ảnh sau render của card
                        đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể
                        phẫu thuật người A thành người B được (tất cả chi tiết
                        từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác
                        với người A lúc trước.
                        <br />
                        2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất
                        rất lớn cho fingerprint.
                        <br />
                        3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống
                        lớn có thu thập big data để kiểm tra.
                        <br />
                        <br />
                        Nếu chỉ xét riêng một thông số canvas, có hàng chục
                        triệu máy tính khác nhau trên khắp thế giới giống nhau
                        (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và
                        trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính
                        duy nhất rất cao.
                        <br />
                        <br />
                        Ví dụ đơn giản:
                        <br />
                        Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập
                        các mã hash canvas lưu lại, khi bạn truy cập nếu bạn
                        giống rất nhiều người khác là điều bình thường, nhưng
                        bạn là duy nhất mới là điều đáng nghi và gần như không
                        thể xảy ra (bạn không thể sử dụng một loại card đồ họa,
                        cài hệ điều hành và trình duyệt mà không ai trong số
                        hàng tỉ người đó có).
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Hardware: Audio
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Hardware: CPU, RAM</h2>
                        Các thông số như số nhân CPU, dung lượng RAM, số lượng
                        đầu vào, đầu ra Audio, Video... giúp tạo ra sự đa dạng
                        cho fingerprint. Điều này rất an toàn vì website sẽ
                        không thể phân tích được trong trường hợp này.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Hardware: CPU, RAM
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Software: User Agent</h2>
                        User-agent là chuỗi kí tự đại diện cho 4 thông số (Hệ
                        điều hành, phiên bản hệ điều hành, Loại trình duyệt,
                        phiên bản trình duyệt). User agent giúp website nhận
                        biết được hệ điều hành và trình duyệt bạn đang sử dụng
                        để hiển thị giao diện phù hợp.
                        <br />
                        Ví dụ: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
                        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0
                        Safari/537.36 cho thấy bạn đang sử dụng Windows NT 10.0,
                        64bit, và Chrome phiên bản 118.0.0.0. User agent không
                        có tính duy nhất và rất đại trà, vì vậy nếu không có
                        TUT, TIP gì đó thì không nên thay đổi thông số này.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Software: User Agent
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Software: Screen</h2>
                        Độ phân giải tối đa của mỗi loại màn hình (HD, FullHD,
                        2k, 4k...) giúp làm đa dạng fingerprint. Website có thể
                        check workarea của trình duyệt. Nếu độ phân giải máy của
                        bạn gửi lên là 1366×768 mà workarea của bạn lên tới
                        1980×1080 thì điều đó là vô lý.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Software: Screen
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Software: Font</h2>
                        Cài thêm hoặc xóa bớt font chữ không mang tính chất cố
                        định. Không nhất thiết phải thay đổi danh sách font chữ.
                        Lưu ý các font chữ có tính riêng biệt theo từng hệ điều
                        hành (ví dụ: MacOS sẽ có một số loại font chỉ MacOS mới
                        có).
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Software: Font
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Software: Hệ điều hành</h2>
                        Hệ điều hành không mang tính chất phân biệt vì có hàng
                        tỉ người cùng sử dụng một loại hệ điều hành, nhưng việc
                        thay đổi sang hệ điều hành khác có thể dễ dàng bị phát
                        hiện thông qua các component mà từng loại hệ điều hành
                        cung cấp. Vì vậy tốt nhất không nên thay đổi thông số
                        này.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Software: Hệ điều hành
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>TCP/IP Fingerprint</h2>
                        Đây là một phương án tốt để phát hiện người dùng có đang
                        sử dụng Proxy hay không, dựa trên sự đặc trưng của gói
                        tin nhận về để xác định nó được tạo ra từ hệ điều hành
                        nào. Việc sử dụng Proxy không bị ngăn cấm nhưng cũng là
                        một yếu tố đánh giá bạn là người dùng không tốt. Phía
                        client không thể xử lý việc này mà máy chủ Proxy sẽ phải
                        xử lý lại gói tin gửi đi sao cho giống với hệ điều hành
                        của client. Chọn nhà cung cấp Proxy cũng rất quan trọng.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  TCP/IP Fingerprint
                </li>
              </ul>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "space-between",
              }}
            >
              <p
                onClick={() => setSelectedContent(apiDocument)}
                style={{ marginRight: "10px", flexGrow: 1 }}
              >
                Document
              </p>
              <img
                src={iconA}
                alt="Toggle List"
                onClick={toggleList2Visibility}
                className={visibleList2 ? "rotated" : ""}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  marginBottom: "15px",
                }}
              />
            </div>
            {visibleList2 && (
              <ul>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Danh sách profiles</h2>
                        <img src={imgProfile} alt="Profiles" width={"100%"} />
                        <p>Params</p>
                        <div className="table-container table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Tên param</th>
                                <th>Bắt buộc</th>
                                <th>Mô tả</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>group_id</td>
                                <td>Không</td>
                                <td>
                                  ID group cần lọc (lấy tại api Danh sách nhóm)
                                </td>
                              </tr>
                              <tr>
                                <td>page</td>
                                <td>Không</td>
                                <td>Số trang (mặc định 1)</td>
                              </tr>
                              <tr>
                                <td>per_page</td>
                                <td>Không</td>
                                <td>Số profile mỗi trang (mặc định 50)</td>
                              </tr>
                              <tr>
                                <td>sort</td>
                                <td>Không</td>
                                <td>
                                  0 - Mới nhất, 1 - Cũ tới mới, 2 - Tên A-Z, 3 -
                                  Tên Z-A
                                </td>
                              </tr>
                              <tr>
                                <td>search</td>
                                <td>Không</td>
                                <td>Từ khóa profile name</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Danh sách profiles
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Tạo profiles</h2>
                        Tạo profiles bằng Thêm mới hoặc Theo số lượng <br />
                        I. Tạo profiles bằng Thêm mới
                        <br />
                        Chọn vào nút <strong>Thêm mới</strong> ở mục menu của
                        3AM.
                        <br />
                        Lưu ý: thích hợp cho việc tạo một hoặc một vài profile.
                        <br /> <img src={tabTT} alt="tab" width={"100%"} />
                        <br />
                        <br />
                        II. Tạo theo số lượng
                        <br />
                        Chọn vào <strong>tạo theo số lượng</strong> ở mục menu
                        của 3AM. Nhập số lượng cần tạo
                        <br />
                        <img
                          src={CreateProfiles}
                          alt="Tạo profiles"
                          width={"50%"}
                        />{" "}
                        <br />
                        <br />
                        III. Tạo từ file excel
                        <br />
                        Chọn vào <strong>Từ excel</strong> ở mục menu của 3AM.
                        <br />
                        <img
                          src={CreateFromToExcel}
                          alt="Tạo bằng cách nhập file excel"
                          width={"50%"}
                        />{" "}
                        <br /> <br />
                        Nếu bạn không biết định dạng như nào, bạn có thể chọn
                        vào <strong>Xem file mẫu</strong> 3AM sẽ cung cấp cho
                        bạn:
                        <img src={imgDSexcel} alt="mẫu excel" width={"100%"} />
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Tạo profiles
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Cập nhập profiles</h2>
                        3AM có chức năng trên mục top menu bar giúp bạn update
                        hàng loạt profile (hay thay đổi thông số profile).
                        <br />
                        <br />Ở mục profiles, chọn profile bạn muốn update. Chọn
                        tùy chỉnh các thông số mà bạn muốn:
                        <br /> 1. Lựa chọn trình duyệt Titan browser/Nightly.
                        <br /> 2. Lựa chọn version chrome
                        <br /> 3. Lựa chọn hệ điều hành Windows/Mac OS.
                        <br /> 4. Thay đổi tên hàng loạt profile (tham khảo công
                        thức mẫu hoặc truy cập bài viết)
                        <br /> 5. Thay đổi chuỗi User-Agent.
                        <br /> 6. Thêm Url khi khởi động profile.
                        <br /> 7. Tùy chọn xóa Cache khi tắt Profile, Lưu lại
                        phiên đăng nhập cuối cùng hoặc bật Lite mode (tắt hình
                        ảnh)
                        <br />
                        <br /> Nhấn <strong>Cập nhập</strong> khi đã chỉnh sửa
                        xong. Giải thích các thông số:
                        <br />
                        <br />
                        <div className="table-container">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Tên trường</th>
                                <th>Bắt buộc</th>
                                <th>Mô tả</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>name</td>
                                <td>Có</td>
                                <td>Tên của profile</td>
                              </tr>
                              <tr>
                                <td>group</td>
                                <td>Không</td>
                                <td>Tên của group</td>
                              </tr>
                              <tr>
                                <td>raw_proxy</td>
                                <td>Không</td>
                                <td>
                                  HTTP proxy| IP:Port:User:Pass Socks5|
                                  socks5://IP:Port:User:Pass TMProxy|
                                  tm://API_KEY|True,False TinProxy|
                                  tin://API_KEY|True,False TinsoftProxy|
                                  tinsoft://API_KEY|True,False
                                </td>
                              </tr>
                              <tr>
                                <td>startup_urls</td>
                                <td>Không</td>
                                <td>Url 1, Url 2, Url 3</td>
                              </tr>
                              <tr>
                                <td>note</td>
                                <td>Không</td>
                                <td>Ghi chú</td>
                              </tr>
                              <tr>
                                <td>color</td>
                                <td>Không</td>
                                <td>Mã hex màu profile</td>
                              </tr>
                              <tr>
                                <td>user_agent</td>
                                <td>Không</td>
                                <td>"auto" hoặc tự điền</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Cập nhập profiles
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Xóa Profile</h2>
                        Để xóa profile, có 2 cách xóa từng profile hoặc xóa hàng
                        loạt profile
                        <br />
                        <br />
                        <strong>I. Xóa từng profile chỉ định</strong>
                        <br />
                        <br />
                        Ở mục Profile, bấm vào tùy chỉnh profile "..."
                        <br />
                        <br />
                        Chọn <strong>"Delete"</strong>.<br />
                        <br />
                        Chọn <strong>"Yes, delete"</strong> để xóa profile đó.
                        <br />
                        <br />
                        <strong>II. Xóa hàng loạt profile</strong>
                        <br />
                        <br />
                        Ở mục Profile, tích chọn các profile mà bạn muốn xóa.
                        <br />
                        <br />
                        Chọn mục xem thêm "..." trên thanh top menu bar.
                        <br />
                        <br />
                        Chọn <strong>"Delete"</strong>.<br />
                        <br />
                        Chọn <strong>"Yes, delete"</strong> để xóa profile đó.
                        <br />
                        <br />
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Xóa Profile
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Danh sách nhóm</h2>
                        3AM cung cấp chức năng <strong>Group</strong> giúp bạn
                        dễ dàng phân vùng nhiều profiles khác để dễ dàng quản lý
                        các mảng công việc của mình hơn. Cụ thể, bạn có thể phân
                        chia, nhóm các đầu công việc vào cùng một nhóm, từ đó
                        tiện lợi hơn nhiều cho việc chạy các đầu việc.
                        <br />
                        <br />
                        Ngoài ra, các <strong>group</strong> giúp bạn dễ dàng
                        hơn cho việc chạy automation, khi bạn chỉ cần chọn group
                        đó để chạy tự động các profile mà mình muốn.
                        <br />
                        <img
                          src={imgGroup}
                          alt="Danh sách nhóm"
                          width={"50%"}
                        />
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Danh sách nhóm
                </li>
              </ul>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "space-between",
              }}
            >
              <p
                onClick={() => setSelectedContent(None_code)}
                style={{ marginRight: "10px", flexGrow: 1 }}
              >
                None-code automation
              </p>
              <img
                src={iconA}
                alt="Toggle List"
                onClick={toggleList3Visibility}
                className={visibleList3 ? "rotated" : ""}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  marginBottom: "15px",
                }}
              />
            </div>
            {visibleList3 && (
              <ul>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Các block</h2>
                        <div className="table-container ">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th>Tên block</th>
                                  <th>Mô tả chức năng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Sequentially</td>
                                  <td>
                                    Block tuần tự, các hành động sẽ chạy từ trên
                                    xuống dưới
                                  </td>
                                </tr>
                                <tr>
                                  <td>Loop (for)</td>
                                  <td>
                                    Block lặp có giới hạn lần lặp, các hành động
                                    sau khi chạy hết sẽ tiếp tục được chạy lại
                                    cho tới khi đủ số lần được cài đặt
                                  </td>
                                </tr>
                                <tr>
                                  <td>Loop (while)</td>
                                  <td>
                                    Block lặp dừng theo điều kiện, các hành động
                                    được lặp đi lặp lại cho tới khi điều kiện
                                    dừng được thỏa mãn
                                  </td>
                                </tr>
                                <tr>
                                  <td>Before profile started</td>
                                  <td>
                                    Khối tuần tự chạy trước khi mở trình duyệt
                                  </td>
                                </tr>
                                <tr>
                                  <td>If-Else</td>
                                  <td>
                                    Block rẽ nhánh, nếu điều kiện đúng, thực
                                    hiện khối "True", nếu sai, thực hiện khối
                                    "Else"
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <strong>
                              Điều kiện của vòng lặp while và rẽ nhánh
                            </strong>

                            <table>
                              <thead>
                                <tr>
                                  <th>Điều kiện</th>
                                  <th>Chức năng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>END_DATA</td>
                                  <td>Điều kiện đọc hết file Excel</td>
                                </tr>
                                <tr>
                                  <td>hasElement(XPATH)</td>
                                  <td>Điều kiện xuất hiện một element</td>
                                </tr>
                                <tr>
                                  <td>&gt;=</td>
                                  <td>
                                    Lớn hơn hoặc bằng, áp dụng cho kiểu dữ liệu
                                    là số
                                  </td>
                                </tr>
                                <tr>
                                  <td>&lt;=</td>
                                  <td>
                                    Nhỏ hơn hoặc bằng, áp dụng cho kiểu dữ liệu
                                    là số
                                  </td>
                                </tr>
                                <tr>
                                  <td>&gt;</td>
                                  <td>
                                    Lớn hơn, áp dụng cho kiểu dữ liệu là số
                                  </td>
                                </tr>
                                <tr>
                                  <td>&lt;</td>
                                  <td>
                                    Nhỏ hơn, áp dụng cho kiểu dữ liệu là số
                                  </td>
                                </tr>
                                <tr>
                                  <td>like</td>
                                  <td>
                                    Kiểm tra một chuỗi có chứa trong chuỗi khác.
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Các block
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Programming</h2>
                        <strong>Chức năng các action </strong>
                        <br />
                        Chi tiết sử dụng từng action xem bên dưới:
                        <br />
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th>Action</th>
                                  <th>Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Declare variable</td>
                                  <td>Khai báo một biến</td>
                                </tr>
                                <tr>
                                  <td>Random number</td>
                                  <td>Tạo một số ngẫu nhiên</td>
                                </tr>
                                <tr>
                                  <td>Split text</td>
                                  <td>Cắt chuỗi thành một mảng kí tự</td>
                                </tr>
                                <tr>
                                  <td>Math execute</td>
                                  <td>Thực hiện một chuỗi phép toán</td>
                                </tr>
                                <tr>
                                  <td>Read random line</td>
                                  <td>Đọc dòng ngẫu nhiên ở một file txt</td>
                                </tr>
                                <tr>
                                  <td>Delay</td>
                                  <td>Dừng chờ</td>
                                </tr>
                                <tr>
                                  <td>Http Get</td>
                                  <td>Thực hiện request GET</td>
                                </tr>
                                <tr>
                                  <td>Http Post</td>
                                  <td>Thực hiện request POST</td>
                                </tr>
                                <tr>
                                  <td>Http Download</td>
                                  <td>Thực hiện request DOWNLOAD</td>
                                </tr>
                                <tr>
                                  <td>Read Json</td>
                                  <td>Đọc một node của json</td>
                                </tr>
                                <tr>
                                  <td>Break loop</td>
                                  <td>Thoát vòng lặp</td>
                                </tr>
                                <tr>
                                  <td>Create excel workbook</td>
                                  <td>Tạo file excel</td>
                                </tr>
                                <tr>
                                  <td>Export excel</td>
                                  <td>Ghi excel</td>
                                </tr>
                                <tr>
                                  <td>Get clipboard</td>
                                  <td>Lấy đoạn text đang lưu trong bộ nhớ</td>
                                </tr>
                                <tr>
                                  <td>Set clipboard</td>
                                  <td>Set text vào trong bộ nhớ</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Programming
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Navigation</h2>
                        Chức năng các action
                        <br />
                        <br />
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th class="table-header">Action</th>
                                  <th class="table-header">Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="table-cell">New tab</td>
                                  <td class="table-cell">Tạo tab mới</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Go to url</td>
                                  <td class="table-cell">Truy cập URL</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Active tab</td>
                                  <td class="table-cell">Active một tab</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Close tab</td>
                                  <td class="table-cell">Đóng tab hiện tại</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Reload</td>
                                  <td class="table-cell">Reload trang</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Back</td>
                                  <td class="table-cell">
                                    Quay lại trang trước
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Close all tab</td>
                                  <td class="table-cell">
                                    Đóng toàn bộ tab trừ tab đầu tiên
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Wait URL changed</td>
                                  <td class="table-cell">Chờ URL thay đổi</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Get current url</td>
                                  <td class="table-cell">Lấy URL hiện tại</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Navigation
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Element</h2>
                        <br /> Chức năng các action
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th class="table-header">Action</th>
                                  <th class="table-header">Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="table-cell">Wait element</td>
                                  <td class="table-cell">
                                    Chờ element xuất hiện
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Get element text</td>
                                  <td class="table-cell">
                                    Lấy text của element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">
                                    Get element attribute
                                  </td>
                                  <td class="table-cell">
                                    Lấy dữ liệu trong attribute của element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Count element</td>
                                  <td class="table-cell">
                                    Đếm số lượng element theo xpath
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Element
                </li>

                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Mouse</h2>
                        <br />
                        Chức năng các action
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th class="table-header">Action</th>
                                  <th class="table-header">Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="table-cell">Mouse move</td>
                                  <td class="table-cell">
                                    Di chuyển chuột vào một element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Mouse click</td>
                                  <td class="table-cell">
                                    Click chuột vào một element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Mouse try to click</td>
                                  <td class="table-cell">
                                    Click chuột nhiều lần vào một element tới
                                    khi thỏa mãn điều kiện
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Mouse
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Keyboard</h2>
                        <br /> Chức năng các action
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th class="table-header">Action</th>
                                  <th class="table-header">Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="table-cell">Press key</td>
                                  <td class="table-cell">
                                    Nhấn một nút hoặc một chuỗi nút
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Press text</td>
                                  <td class="table-cell">
                                    Gõ text vào một element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Paste text</td>
                                  <td class="table-cell">
                                    Dán text vào một element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Upload file</td>
                                  <td class="table-cell">Upload file</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Select combobox</td>
                                  <td class="table-cell">
                                    Chọn combobox theo text
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Keyboard
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Scroll</h2>
                        <br />
                        Chức năng các action
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th class="table-header">Action</th>
                                  <th class="table-header">Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="table-cell">Scroll to element</td>
                                  <td class="table-cell">
                                    Cuộn chuột tới một element
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Scroll to position</td>
                                  <td class="table-cell">
                                    Cuộn tới một tọa độ Y
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Scroll random</td>
                                  <td class="table-cell">
                                    Cuộn chuột ngẫu nhiên
                                  </td>
                                </tr>
                                <tr>
                                  <td class="table-cell">Scroll to bottom</td>
                                  <td class="table-cell">
                                    Cuộn chuột tới cuối trang
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Scroll
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Other</h2>
                        <br />
                        Chức năng các action
                        <div className="table-container">
                          <div className="table">
                            <thead>
                              <tr>
                                <th class="table-header">Action</th>
                                <th class="table-header">Mô tả</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td class="table-cell">Switch to popup</td>
                                <td class="table-cell">
                                  Đổi trình điều khiển sang một popup theo title
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Switch to frame</td>
                                <td class="table-cell">
                                  Đổi trình điều khiển sang một frame
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Switch to default</td>
                                <td class="table-cell">
                                  Đổi trình điều khiển về cửa sổ mặc định
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Accept alert</td>
                                <td class="table-cell">
                                  Nhấn đồng ý một alert
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Cancel alert</td>
                                <td class="table-cell">
                                  Nhấn hủy bỏ một alert
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Execute javascript</td>
                                <td class="table-cell">
                                  Chạy một đoạn mã javascript
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Import cookie</td>
                                <td class="table-cell">
                                  Import cookie từ file json
                                </td>
                              </tr>
                              <tr>
                                <td class="table-cell">Export cookie</td>
                                <td class="table-cell">
                                  Export cookie ra file json
                                </td>
                              </tr>
                            </tbody>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Other
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Helper</h2>
                        <br />
                        Chức năng các action
                        <div className="table-container">
                          <div className="table">
                            <table>
                              <thead>
                                <tr>
                                  <th class="table-header">Action</th>
                                  <th class="table-header">Mô tả</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="table-cell">Read mail code</td>
                                  <td class="table-cell">Đọc email code</td>
                                </tr>
                                <tr>
                                  <td class="table-cell">ChatGPT</td>
                                  <td class="table-cell">
                                    Thực hiện một câu hỏi với ChatGPT
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <br />{" "}
                        <span class="notice">
                          Chú ý: tất cả các đầu vào đều có thể nhúng các biến
                          khác bằng định dạng $TÊN_BIẾN
                        </span>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  {" "}
                  Helper
                </li>
              </ul>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "space-between",
              }}
            >
              <p
                onClick={() => setSelectedContent(Error)}
                style={{ marginRight: "10px", flexGrow: 1 }}
              >
                Lỗi thường gặp
              </p>
              <img
                src={iconA}
                alt="Toggle List"
                onClick={toggleList4Visibility}
                className={visibleList4 ? "rotated" : ""}
                style={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  marginBottom: "15px",
                }}
              />
            </div>
            {visibleList4 && (
              <ul>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Không nhận thông số fake</h2>
                        <strong>Đặc điểm nhận diện: </strong>
                        <br />
                        <br />
                        <li>
                          Search bar trên trình duyệt hiện GPM-Login thay vì
                          hiện theo tên profile
                        </li>
                        <li>
                          Proxy / Socks5 có Auth (User/Pass) hỏi User / Pass khi
                          truy cập trang web
                        </li>

                        <br />
                        <strong>Cách xử lý: </strong>
                        <br />
                        <br />
                        <li>
                          Cài đặt lại đường dẫn tới thư mục profile không chứ kí
                          tự Tiếng Việt hoặc kí tự Unicode đặc biệt (chỉ chấp
                          nhận kí tự trong bảng mã ANSI)
                        </li>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Không nhận thông số fake{" "}
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Bị xóa file thực thi exe</h2>
                        Do phần mềm được viết trên .NET và sử dụng Patch protect
                        chống Crack / Decode mã nguồn nên có thể bị nhiều trình
                        antivirus hiểu nhầm là virus và xóa file thực thi.
                        <br />
                        <br />
                        <strong>Cách xử lý:</strong>
                        <br />
                        <br />
                        <li>
                          Thêm thư mục app vào thư mục ngoại lệ của Antivirus
                          (search thêm tại google)
                        </li>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Bị xóa file thực thi exe{" "}
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Không kết nối được Proxy / Socks5</h2>
                        <strong>Nguyên nhân:</strong>
                        <br />
                        <br />
                        Cơ chế kết nối proxy / socks5 hoàn toàn giống nhau trên
                        mọi phần mềm
                        <br />
                        <br />
                        Đa phần do proxy / socks5 kết nối chậm hoặc die, hãy
                        kiểm tra trên nhiều loại trình duyệt trước khi báo lỗi
                        về page.
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Không kết nối được Proxy / Socks5
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Profile không lưu dữ liệu</h2>
                        <strong>Đặc điểm nhận diện:</strong>
                        <br />
                        <li>
                          Sau khi kết thúc phiên, mở lại profile, dữ liệu
                          cookie, localstorage, history... không được lưu
                        </li>
                        <li>Phát sinh một số lỗi không xác định</li>
                        <br />
                        <strong>Nguyên nhân:</strong>
                        <li>
                          Do thư mục chọn lưu profile không đủ quyền đọc ghi,
                          thường xảy ra khi copy nguyên thư mục từ máy này sang
                          máy khác, khi cài lại hệ điều hành hoặc cắm ổ cứng rời
                          vào một máy tính khác
                        </li>
                        <br />
                        <strong>Khắc phục:</strong>
                        <li>
                          Đặt quyền đọc ghi đầy đủ cho thư mục lưu trữ profile
                          (xem hướng dẫn tại google)
                        </li>
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Profile không lưu dữ liệu
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Lỗi liên quan cookie</h2>
                        <strong>
                          Khi import cookie thành công, mở lên đã nhận nhưng
                          đóng trình duyệt mở lại lại bị mất hoặc về trạng thái
                          ban đầu khi import
                        </strong>
                        <br />
                        <br />
                        Cách xử lý:
                        <br />
                        <br />
                        Sau khi import, giữ trình duyệt 15-20s trước khi đóng để
                        trình duyệt lưu cookie hiện tại (có thể mở một vài link
                        trong trang web đã import vào trước khi đóng)
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Lỗi liên quan cookie
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Báo đỏ ở một số trang check</h2>
                        Các trang check fingerprint có đánh giá xanh / đỏ chỉ
                        mang tính chất tương đối, tuy nhiên chúng check khá
                        chính xác về mặt kỹ thuật, vì vậy cũng có thể dựa vào
                        chúng để đánh giá một phần chất lượng fingerprint.
                        <br />
                        <br />Ở thời điểm hiện tại, rất nhiều hệ thống lớn đã
                        bắt đầu để ý tới các dạng antidetect browser, họ thu
                        thập toàn bộ fingerprint của thiết bị thật có trên thị
                        trường để đánh giá fingerprint thông qua database của
                        họ, vì vậy có thể về phương pháp kỹ thuật, fingerprint
                        vẫn có thể vượt qua các bài kiểm duyệt, tuy nhiên có thể
                        bị phát hiện thông qua việc sử dụng database, chính vì
                        vậy khi dùng antidetect browser với các hệ thống lớn,
                        các phần mềm lớn hiện tại đều khuyên người dùng tắt kĩ
                        thuật NOISE.
                        <br />
                        <br />
                        <strong>Đỏ mục IP</strong>
                        <br />
                        <br />
                        Bạn bị phát hiện đang sử dụng proxy, hãy thay thế proxy
                        hiện tại
                        <br />
                        <br />
                        <strong>Đỏ Location</strong>
                        <br />
                        <br />
                        Thông thường là trường hợp lệch timezone của website với
                        bên API xác định timezone từ IP, ví dụ ở VN, timezone có
                        thể trả ra là Asia/Ho_Chi_Minh, hoặc Asia/Bankok (miễn
                        là múi giờ +7), các hệ thống phiên từ IP sang Timezone
                        có thể lệch nhau nhưng nhìn chung là không ảnh hưởng quá
                        nhiều.
                        <br />
                        <br />
                        <strong>Đỏ hardware</strong>
                        <br />
                        <br />
                        Fingerprint đã bị phát hiện đang sai về thông số kĩ
                        thuật so với thiết bị thật, nhưng đôi khi cũng do
                        website check chưa cập nhật kĩ thuật check cho phiên bản
                        trình duyệt mới nhất.
                        <br />
                        <br />
                        <strong>Đỏ software (hoặc browser)</strong>
                        <br />
                        <br />
                        Thường là do Useragent từ request không khớp với
                        Useragent trả ra từ Javascript. (xảy ra khi người dùng
                        tự dùng các extension đổi user agent mà không thông qua
                        chức năng trên antidetect)
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Báo đỏ ở một số trang check
                </li>
                <li
                  onClick={() =>
                    handleItemClick(
                      <>
                        <h2>Tài khoản bị logout khỏi google</h2>
                        <strong>Đặc điểm nhận diện:</strong>
                        <li>
                          Tắt profile mở lại là logout Google (chỉ một số máy
                          gặp tình trạng này)
                        </li>
                        <br />
                        <br />
                        <strong>Nguyên nhân:</strong>
                        <li>
                          Tại một số máy chưa rõ tại sao tùy chọn đồng bộ dữ
                          liệu lên Google được bật mặc định
                        </li>
                        <li>
                          Các trình duyệt tự build không sử dụng API key của
                          Google để đồng bộ dữ liệu nên nếu tùy chọn đồng bộ
                          được bật thì khi mở lại cookie Google không được chấp
                          nhận nên bị logout
                        </li>
                        <br />
                        <br />
                        <strong>Cách xử lý:</strong>
                        <br />
                        <br />
                        Thêm file "fixed_params.txt" ở thư mục cài đặt 3AM rồi
                        nhập vào nội dung "--disable-sync". Nếu file đã có sẵn,
                        chỉ cần chỉnh sửa theo nội dung trên
                      </>
                    )
                  }
                  style={{ cursor: "pointer", marginBottom: "10px" }}
                >
                  Tài khoản bị logout khỏi google
                </li>
              </ul>
            )}
          </div>
          <div className="col-md-8 ms-5">
            <p>{selectedContent}</p>
            <div class="last-updated">Last updated 11 months ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doc;
