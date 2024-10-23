const data = {
    fingerprint: {
        title: 'Browser Fingerprint',
        description: '- Fingerprint – thực ra đây chỉ là một khái niệm tương đối, không hoàn toàn sát với ý nghĩa tính duy nhất của dấu vân tay, sẽ có rất nhiều thiết bị có Fingerprint hoàn toàn giống nhau và số đó là vô cùng nhiều trên thế giới (cùng nhãn hiệu, cùng cấu hình, cài đặt cùng một phiên bản hệ điều hành, driver sẽ có Fingerprint hoàn toàn giống nhau).<br>- Fingerprint là tổng hòa của rất nhiều các thông số của máy như số nhân CPU, dung lượng RAM, loại card đồ họa, độ phân giải màn hình… (phần cứng), phiên bản hệ điều hành, timezone, ngôn ngữ, loại trình duyệt, phiên bản trình duyệt (phần mềm)… Hãy lưu ý là tổng hòa rất nhiều thông số chứ không phải riêng một thông số nào. Giống như việc bạn phân biệt một người nào đó là bạn nhìn tổng thể ngoại hình của người đó chứ không thể nhìn mỗi cái mắt, cái mũi, cái tay, cái chân mà nhận ra đó là ai. <br><br> <span style="color:#24a1de;">Một website không thể gọi trực tiếp các thông số của thiết bị mà phải thông qua các phương thức javascript do trình duyệt cung cấp.</span> ',
        
        children: [
            { title: 'Địa chỉ IP', description: 'Địa chỉ IP là một thông tin tốt nhất để định danh người dùng, vì vậy nếu bạn sử dụng proxy hãy chú ý tới nguồn proxy thật tốt và uy tín.<br>Với người dùng antidetect nói chung thì chắc chắn không thể không sử dụng proxy. Hiện nay nguồn IPv4 trên thế giới đang dần cạn kiệt, các hệ thống lớn cũng đã có rất nhiều data về blacklist proxy nên việc tìm được nguồn proxy sạch khá khó khăn, đặc biết với newbie.' },
            { title: 'Timezone', description: 'Mỗi quốc gia (hoặc một số quốc gia) có một timezone khác nhau (Như Việt Nam, Bangkok chung múi giờ +7). Nếu địa chỉ IP của bạn thể hiện bạn đang ở US, nhưng thông số timezone lại ở Việt Nam thì đây là việc khá đáng ngờ vì không ai sống tại Mỹ mà cài đặt timezone ở Việt Nam cả.<br>Việc của antidetect là thay đổi timezone ở profile giống với vị trí ứng với địa chỉ IP.' },
            { title: 'Geo location', description: 'Geo location được sử dụng định vị bạn đang ở đâu trên bản đồ một cách chính xác dựa trên kinh độ và vĩ độ. Tuy nhiên cũng có khá nhiều người tắt tính năng định vị này nên thông số này có thể không thực sự quan trọng.<br>Antidetect sẽ sử dụng một api bên thứ ba để phiên IP đang sử dụng sang vị trí đương đối và trả về kết quả kinh độ, vĩ độ, từ đó trả kết quả cho website nếu có lệnh gọi.' },
            { title: 'WebRTC IP', description: 'WebRTC là một công nghệ giúp hai thiết bị có thể kết nối trực tiếp với nhau mà không quan tâm tới các kết nối trung gian, nó được sử dụng trong các ứng dụng cần kết nối nhanh như video call.<br>Trước khi có WebRTC, 2 người dùng facebook muốn video call cho nhau thì đều phải gửi / truyền các gói tin qua server facebook (thường bên US, từ VN->US->VN rất mất thời gian), điều này vừa làm cho server facebook chịu tải cao, vừa làm trải nghiệm khách hàng không tốt vì thời gian kết nối chậm dẫn tới giật, lag.<br>Khi có WebRTC, 2 thiết bị của người dùng có thể khởi tạo kết nối trực tiếp cho nhau (thông thường sử dụng UDP), việc này giúp tốc độ kết nối tốt và giảm tải rất nhiều cho server.<br><br>Chính vì có kết nối trực tiếp, bỏ qua các kết nối trung gian, WebRTC cũng được ứng dụng trong vấn đề bảo mật để xác định IP thật của người dùng.<br><br>Website sẽ yêu cầu máy tính kết nối WebRTC, sau khi kết nối thành công, máy tính và website sẽ có kết nối trực tiếp và hoàn toàn bỏ qua các proxy trung gian nếu có, từ đây website có thể lấy được IP thật của thiết bị thông qua 2 cách:<br><br>+ Đọc trong gói tin UDP (thường được sử dụng)<br>+ Yêu cầu Stun server lấy và trả về kết quả (Ebay sử dụng cách này)<br><br>Việc của antidetect là ghi đè IP thật trong gói tin UDP cũng như xử lý với stun server.' },
            { title: 'Hardware: Canvas', description: 'Canvas là một HTML5 API, nó được sử dụng để vẽ (render) 2D để hiển thị lên Browser, ví dụ như một hình tròn, hình tam giác, render một đoạn chữ thành hình ảnh và nhiều thứ khác. Các hình 2D này hơi khác nhau ở các loại card màn hình (mắt thường khó có thể thể phân biệt) nên đây có thể sử dụng là một trong các thông số xác định sự khác nhau giữa các loại card màn hình.<br>Antidetect browser sử dụng kĩ thuật noise (làm nhiễu) để hình ảnh sau khi render có hơi khác một chút so với render gốc.<br>Đặc điểm của kĩ thuật noise:<br>1. Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.<br>2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.<br>3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra.<br><br>Nếu chỉ xét riêng một thông số canvas, có hàng chục triệu máy tính khác nhau trên khắp thế giới giống nhau (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính duy nhất rất cao.<br><br>Ví dụ đơn giản:<br>Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập các mã hash canvas lưu lại, khi bạn truy cập nếu bạn giống rất nhiều người khác là điều bình thường, nhưng bạn là duy nhất mới là điều đáng nghi và gần như không thể xảy ra (bạn không thể sử dụng một loại card đồ họa, cài hệ điều hành và trình duyệt mà không ai trong số hàng tỉ người đó có).' },
            { title: 'Hardware: WebGL', description: 'WebGL là một API Javascript giúp trình duyệt render các khối 3D (như một khối tam giác 3D, hình hộp…), mỗi loại card khi render cũng sẽ hơi khác nhau một chút, thuật toán khử răng cưa, làm mịn ảnh cũng khác nhau nên đây cũng là một trong những thông số giúp xác định sự khác nhau giữa các loại card màn hình. Việc render 3D phức tạp hơn render 2D rất nhiều và có khá nhiều tùy chỉnh nâng cao nhất là đối với các loại card rời hiện nay, nên việc thêm noise đúng kỹ thuật trong quá trình render là khá tốt đối với nhiều website.<br>Đặc điểm của kĩ thuật noise:<br>1. Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.<br>2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.<br>3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra.<br><br>Nếu chỉ xét riêng một thông số canvas, có hàng chục triệu máy tính khác nhau trên khắp thế giới giống nhau (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính duy nhất rất cao.<br><br>Ví dụ đơn giản:<br>Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập các mã hash canvas lưu lại, khi bạn truy cập nếu bạn giống rất nhiều người khác là điều bình thường, nhưng bạn là duy nhất mới là điều đáng nghi và gần như không thể xảy ra (bạn không thể sử dụng một loại card đồ họa, cài hệ điều hành và trình duyệt mà không ai trong số hàng tỉ người đó có).' },
            { title: 'Hardware: Audio', description: 'Tương tự với Canvas, WebGL là đặc trưng của các loại card đồ họa, thì Audio context là đặc trưng của card âm thanh.<br><br>Việc xử lý cũng tương tự là sử dụng kĩ thuật noise để âm thanh sau khi render khác với âm thanh gốc, từ đó tạo sự khác nhau về fingerprint.<br>Đặc điểm của kĩ thuật noise:<br>1. Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.<br>2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.<br>3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra.<br><br>Nếu chỉ xét riêng một thông số canvas, có hàng chục triệu máy tính khác nhau trên khắp thế giới giống nhau (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính duy nhất rất cao.<br><br>Ví dụ đơn giản:<br>Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập các mã hash canvas lưu lại, khi bạn truy cập nếu bạn giống rất nhiều người khác là điều bình thường, nhưng bạn là duy nhất mới là điều đáng nghi và gần như không thể xảy ra (bạn không thể sử dụng một loại card đồ họa, cài hệ điều hành và trình duyệt mà không ai trong số hàng tỉ người đó có).' },
            { title: 'Hardware: CPU, RAM', description: 'Các thông số như số nhân CPU, dung lượng RAM, số lượng đầu vào, đầu ra Audio, Video... giúp tạo ra sự đa dạng cho fingerprint. Điều này rất an toàn vì website sẽ không thể phân tích được trong trường hợp này.' },
            { title: 'Software: User Agent', description: 'User-agent là chuỗi kí tự đại diện cho 4 thông số (Hệ điều hành, phiên bản hệ điều hành, Loại trình duyệt, phiên bản trình duyệt). User agent giúp website nhận biết được hệ điều hành và trình duyệt bạn đang sử dụng để hiển thị giao diện phù hợp.<br>Ví dụ: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 cho thấy bạn đang sử dụng Windows NT 10.0, 64bit, và Chrome phiên bản 118.0.0.0. User agent không có tính duy nhất và rất đại trà, vì vậy nếu không có TUT, TIP gì đó thì không nên thay đổi thông số này.' },
            { title: 'Software: Screen', description: 'Độ phân giải tối đa của mỗi loại màn hình (HD, FullHD, 2k, 4k...) giúp làm đa dạng fingerprint. Website có thể check workarea của trình duyệt. Nếu độ phân giải máy của bạn gửi lên là 1366×768 mà workarea của bạn lên tới 1980×1080 thì điều đó là vô lý.' },
            { title: 'Software: Font', description: 'Cài thêm hoặc xóa bớt font chữ không mang tính chất cố định. Không nhất thiết phải thay đổi danh sách font chữ. Lưu ý các font chữ có tính riêng biệt theo từng hệ điều hành (ví dụ: MacOS sẽ có một số loại font chỉ MacOS mới có).' },
            { title: 'Software: Hệ điều hành', description: 'Hệ điều hành không mang tính chất phân biệt vì có hàng tỉ người cùng sử dụng một loại hệ điều hành, nhưng việc thay đổi sang hệ điều hành khác có thể dễ dàng bị phát hiện thông qua các component mà từng loại hệ điều hành cung cấp. Vì vậy tốt nhất không nên thay đổi thông số này.' },
            { title: 'TCP/IP Fingerprint', description: 'Đây là một phương án tốt để phát hiện người dùng có đang sử dụng Proxy hay không, dựa trên sự đặc trưng của gói tin nhận về để xác định nó được tạo ra từ hệ điều hành nào. Việc sử dụng Proxy không bị ngăn cấm nhưng cũng là một yếu tố đánh giá bạn là người dùng không tốt. Phía client không thể xử lý việc này mà máy chủ Proxy sẽ phải xử lý lại gói tin gửi đi sao cho giống với hệ điều hành của client. Chọn nhà cung cấp Proxy cũng rất quan trọng.' },
        ]
    },
    api: {
        title: 'Document',
        description: 'Với giao diện tối ưu giúp bên thứ ba quản lý, thêm, sửa, xóa profiles trên 3AM, đồng thời có thể thao tác mở hoặc đóng profile một cách an toàn với đầy đủ thông số thiết bị đã tạo.',
        children: [
            {
                title: 'Danh sách profiles', 
                description: `
                    • Danh sách profiles<br><br>
                    <img src="img/dsachprofiles.jpg" style="width: 100%; border-collapse: collapse; text-align: left;" alt="Hình ảnh"/><br><br>
                    Params<br>
                  <br><table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Tên param</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Bắt buộc</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">group_id</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">ID group cần lọc (lấy tại api Danh sách nhóm)</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">page</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Số trang (mặc định 1)</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">per_page</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Số profile mỗi trang (mặc định 50)</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">sort</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">0 - Mới nhất, 1 - Cũ tới mới, 2 - Tên A-Z, 3 - Tên Z-A</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">search</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Từ khóa profile name</td>
        </tr>
    </tbody>
</table>
                `,
            },
            {
                title:'Tạo profiles',
                description:`Tạo profiles bằng Thêm mới hoặc Theo số lượng.
                <br>I.	Tạo profiles bằng Thêm mới<br>
                 Chọn vào nút <strong>Thêm mới</strong> ở mục menu của 3AM.
                 <br>Lưu ý: thích hợp cho việc tạo một hoặc một vài profile.
                 <br><img src="img/tab_thaotacnhanh.jpg" style="width: 100%; border-collapse: collapse; text-align: left;" alt="Hình ảnh"/><br><br>
                 II.	Tạo theo số lượng<br>Chọn vào <strong>tạo theo số lượng</strong> ở mục menu của 3AM. 
                 Nhập số lượng cần tạo
                 <br><img src="img/tao_profile.jpg" style="width: 50%; border-collapse: collapse; text-align: left;" alt="Hình ảnh"/><br><br>
                 III.	Tạo từ file excel<br>Chọn vào <strong>Từ excel</strong> ở mục menu của 3AM.
                 <br><img src="img/taotuexcel.jpg" style="width: 50%; border-collapse: collapse; text-align: left;" alt="Hình ảnh"/><br><br>
                 Nếu bạn không biết định dạng như nào, bạn có thể chọn vào <strong>Xem file mẫu</strong> 3AM sẽ cung cấp cho bạn:
                 <br><img src="img/mauexcel.jpg" style="width: 100%; border-collapse: collapse; text-align: left;" alt="Hình ảnh"/><br><br>`,

            },
            {
                title:'Cập nhập profiles',
                description:`3AM có chức năng trên mục top menu bar giúp bạn update hàng loạt profile (hay thay đổi thông số profile).
                <br><br>Ở mục profiles, chọn profile bạn muốn update. Chọn tùy chỉnh các thông số mà bạn muốn:
              <br>  1.	Lựa chọn trình duyệt Titan browser/Nightly.
               <br>  2.	Lựa chọn version chrome 
               <br>  3.	Lựa chọn hệ điều hành Windows/Mac OS.
               <br>  4.	Thay đổi tên hàng loạt profile (tham khảo công thức mẫu hoặc truy cập bài viết)
               <br>  5.	Thay đổi chuỗi User-Agent.
               <br>  6.	Thêm Url khi khởi động profile.
               <br>  7.	Tùy chọn xóa Cache khi tắt Profile, Lưu lại phiên đăng nhập cuối cùng hoặc bật Lite mode (tắt hình ảnh)
                <br><br> Nhấn <strong>Cập nhập</strong> khi đã chỉnh sửa xong.
                Giải thích các thông số:<br><br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Tên trường</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Bắt buộc</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">name</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Có</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Tên của profile</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">group</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Tên của group</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">raw_proxy</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">HTTP proxy| IP:Port:User:Pass Socks5| socks5://IP:Port:User:Pass TMProxy| tm://API_KEY|True,False TinProxy| tin://API_KEY|True,False TinsoftProxy| tinsoft://API_KEY|True,False</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">startup_urls</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Url 1, Url 2, Url 3</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">note</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Ghi chú</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">color</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Mã hex màu profile</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">user_agent</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Không</td>
            <td style="border: 1px solid #ddd; padding: 8px;">"auto" hoặc tự điền</td>
        </tr>
    </tbody>
</table>

                `,
            },
            {
                title:'Xóa Profile',
                description:`Để xóa profile, có 2 cách xóa từng profile hoặc xóa hàng loạt profile<br><br>
                <strong>I.	Xóa từng profile chỉ định</strong><br><br>
                Ở mục Profile, bấm vào tùy chỉnh profile "..."<br><br>
                Chọn <strong>"Delete"</strong>.<br><br>
                Chọn <strong>"Yes, delete"</strong> để xóa profile đó.<br><br>
                <strong>II.	Xóa hàng loạt profile</strong><br><br>
                Ở mục Profile, tích chọn các profile mà bạn muốn xóa.<br><br>
                Chọn mục xem thêm "..." trên thanh top menu bar.<br><br>
                Chọn <strong>"Delete"</strong>.<br><br>
                Chọn <strong>"Yes, delete"</strong> để xóa profile đó.<br><br>
                `,
            },
            {
                title:'Danh sách nhóm',
                description:`3AM cung cấp chức năng <strong>Group</strong> giúp bạn dễ dàng phân vùng nhiều profiles khác để dễ dàng quản lý các mảng công việc của mình hơn. Cụ thể, bạn có thể phân chia, nhóm các đầu công việc vào cùng một nhóm, từ đó tiện lợi hơn nhiều cho việc chạy các đầu việc.<br>
                <br>Ngoài ra, các <strong>group</strong> giúp bạn dễ dàng hơn cho việc chạy automation, khi bạn chỉ cần chọn group đó để chạy tự động các profile mà mình muốn.<br>
                <img src="img/group.jpeg" style="width: 50%; border-collapse: collapse; text-align: left;" alt="Hình ảnh"/><br><br>
                `,
            },
        ]
        
    },
    auto:{
        title:'None-code automation',
        description:'3AM  cung cấp các thẻ script giúp người dùng có thể tự tạo các automation đơn giản.<br><br>Tuy là none-code, dễ sử dụng nhưng việc người dùng phải logic như một coder để script chạy mượt mà là một điều bắt buộc, vì vậy nó không dành cho số đông.',
        children:[
            {
                title:'Các block',
                description:`
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Tên block</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả chức năng</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Sequentially</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Block tuần tự, các hành động sẽ chạy từ trên xuống dưới</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Loop (for)</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Block lặp có giới hạn lần lặp, các hành động sau khi chạy hết sẽ tiếp tục được chạy lại cho tới khi đủ số lần được cài đặt</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Loop (while)</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Block lặp dừng theo điều kiện, các hành động được lặp đi lặp lại cho tới khi điều kiện dừng được thỏa mãn</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Before profile started</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Khối tuần tự chạy trước khi mở trình duyệt</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">If-Else</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Block rẽ nhánh, nếu điều kiện đúng, thực hiện khối "True", nếu sai, thực hiện khối "Else"</td>
        </tr>
    </tbody>
</table>
<br><br><strong>Điều kiện của vòng lặp while và rẽ nhánh  </strong> <br><br>
<table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Điều kiện</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Chức năng</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">END_DATA</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Điều kiện đọc hết file Excel</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">hasElement(XPATH)</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Điều kiện xuất hiện một element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">>=</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lớn hơn hoặc bằng, áp dụng cho kiểu dữ liệu là số</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><=</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nhỏ hơn hoặc bằng, áp dụng cho kiểu dữ liệu là số</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">></td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lớn hơn, áp dụng cho kiểu dữ liệu là số</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;"><</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nhỏ hơn, áp dụng cho kiểu dữ liệu là số</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">like</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Kiểm tra một chuỗi có chứa trong chuỗi khác.</td>
        </tr>
    </tbody>
</table>

                `,
            },
            {
                title:'Programming',
                description:`<strong>Chức năng các action </strong>
                <br>Chi tiết sử dụng từng action xem bên dưới:<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Declare variable</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Khai báo một biến</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Random number</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Tạo một số ngẫu nhiên</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Split text</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Cắt chuỗi thành một mảng kí tự</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Math execute</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Thực hiện một chuỗi phép toán</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Read random line</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đọc dòng ngẫu nhiên ở một file txt</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Delay</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Dừng chờ</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Http Get</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Thực hiện request GET</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Http Post</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Thực hiện request POST</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Http Download</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Thực hiện request DOWNLOAD</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Read Json</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đọc một node của json</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Break loop</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Thoát vòng lặp</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Create excel workbook</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Tạo file excel</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Export excel</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Ghi excel</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Get clipboard</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lấy đoạn text đang lưu trong bộ nhớ</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Set clipboard</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Set text vào trong bộ nhớ</td>
        </tr>
    </tbody>
</table>
<br><strong ><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span> </strong>
                `,
            },
            {
                title:'Navigation',
                description:`
                Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">New tab</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Tạo tab mới</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Go to url</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Truy cập URL</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Active tab</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Active một tab</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Close tab</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đóng tab hiện tại</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Reload</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Reload trang</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Back</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Quay lại trang trước</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Close all tab</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đóng toàn bộ tab trừ tab đầu tiên</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Wait URL changed</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Chờ URL thay đổi</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Get current url</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lấy URL hiện tại</td>
        </tr>
    </tbody>
</table>
                <br><strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>`,
            },
            {
                title:'Element',
                description:`
                Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Wait element</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Chờ element xuất hiện</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Get element text</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lấy text cả element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Get element attribute</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Lấy dữ liệu trong attribute của element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Count element</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Điếm số lượng element theo xpath</td>
        </tr>
    </tbody>
</table>
 <br><strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
                `,
            },
            {
                title:'Mouse',
                description:`
                Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Mouse move</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Di chuyển chuột vào một element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Mouse click</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Click chuột vào một element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Mouse try to click</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Click chuột nhiều lần vào một element tới khi thỏa mãn điều kiện</td>
        </tr>
    </tbody>
</table>
 <br><strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
                `,
            },
            {
                title:'Keyboard',
                description:`
                Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Press key</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nhấn một nút hoặc một chuỗi nút</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Press text</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Gõ text vào một element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Paste text</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Dán text vào một element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Upload file</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Upload file</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Select combobox</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Chọn combobox theo text</td>
        </tr>
    </tbody>
</table>
 <br><strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
                `,
            },
            {
                title:'Scroll',
                description:`Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Scroll to element</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Cuộn chuột tới một element</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Scroll to position</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Cuộn tới một tọa độ Y</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Scroll random</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Cuộn chuột ngẫu nhiên</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Scroll to bottom</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Cuộn chuột tới cuối trang</td>
        </tr>
    </tbody>
</table>

                `,
            },
            {
                title:'Other',
                description:`Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Switch to popup</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đổi trình điều khiển sang một popup theo title</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Switch to frame</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đổi trình điều khiển sang một frame</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Switch to default</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đổi trình điều khiển về cửa sổ mặc định</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Accept alert</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nhấn đồng ý một alert</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Cancel alert</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Nhấn hủy bỏ một alert</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Execute javascript</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Chạy một đoạn mã javascript</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Import cookie</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Import cookie từ file json</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Export cookie</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Export cookie ra file json</td>
        </tr>
    </tbody>
</table>
 <br><strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
                `,
            },
            {
                title:'Helper',
                description:`Chức năng các action<br>
                <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
        <tr>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Action</th>
            <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Mô tả</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">Read mail code</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Đọc email code</td>
        </tr>
        <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">ChatGPT</td>
            <td style="border: 1px solid #ddd; padding: 8px;">Thực hiện một câu hỏi với ChatGPT</td>
        </tr>
    </tbody>
</table>
 <br><strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
`,
            },
        ]
    },
    loi:{
        title:'Lỗi thường gặp',
        description:'Tổng hợp các lỗi thường gặp',
        children:[
            {
                title:'Không nhận thông số fake',
                description: `<strong>Đặc điểm nhận diện: </strong><br>
                <br><strong style="color: black;">o</strong> Search bar trên trình duyệt hiện GPM-Login thay vì hiện theo tên profile<br>
                <br><strong style="color: black;">o</strong> Proxy / Socks5 có Auth (User/Pass) hỏi User / Pass khi truy cập trang web<br>
                <br><strong>Cách xử lý: </strong><br>
                <br><strong style="color: black;">o</strong> Cài đặt lại đường dẫn tới thư mục profile không chứ kí tự Tiếng Việt hoặc kí tự Unicode đặc biệt (chỉ chấp nhận kí tự trong bảng mã ANSI)<br>
                `,

            },
            {
                title:'Bị xóa file thực thi exe',
                description:`Do phần mềm được viết trên .NET và sử dụng Patch protect chống Crack / Decode mã nguồn nên có thể bị nhiều trình antivirus hiểu nhầm là virus và xóa file thực thi.
                <br><br><strong>Cách xử lý:</strong>
                <br><br><strong>o</strong>	Thêm thư mục app vào thư mục ngoại lệ của Antivirus (search thêm tại google)
                `,
              
            },
            {
                title:'Không kết nối được Proxy / Socks5',
                description:`<strong>Nguyên nhân:</strong><br>
                <br>Cơ chế kết nối proxy / socks5 hoàn toàn giống nhau trên mọi phần mềm
                <br><br>Đa phần do proxy / socks5 kết nối chậm hoặc die, hãy kiểm tra trên nhiều loại trình duyệt trước khi báo lỗi về page.
                `,
            },
            {
                title:'Profile không lưu dữ liệu',
                description:`<strong>Đặc điểm nhận diện:</strong><br>
             <br> <strong>  o</strong>	Sau khi kết thúc phiên, mở lại profile, dữ liệu cookie, localstorage, history... không được lưu
            <br> <strong>  o</strong>	Phát sinh một số lỗi không xác định
                <br><br><strong>Nguyên nhân:</strong>
                <br><strong>  o</strong>	Do thư mục chọn lưu profile không đủ quyền đọc ghi, thường xảy ra khi copy nguyên thư mục từ máy này sang máy khác, khi cài lại hệ điều hành hoặc cắm ổ cứng rời vào một máy tính khác
              <br>  <br><strong>Khắc phục:</strong>
               <br><strong>  o</strong> Đặt quyền đọc ghi đầy đủ cho thư mục lưu trữ profile (xem hướng dẫn tại google)
                `,
            },
            {
                title:'Lỗi liên quan cookie',
                description:`
                <strong>Khi import cookie thành công, mở lên đã nhận nhưng đóng trình duyệt mở lại lại bị mất hoặc về trạng thái ban đầu khi import</strong>
                <br><br>Cách xử lý:
               <br><br>  Sau khi import, giữ trình duyệt 15-20s trước khi đóng để trình duyệt lưu cookie hiện tại (có thể mở một vài link trong trang web đã import vào trước khi đóng)
                `,
            },
            {
                title:'Báo đỏ ở một số trang check',
                description:`Các trang check fingerprint có đánh giá xanh / đỏ chỉ mang tính chất tương đối, tuy nhiên chúng check khá chính xác về mặt kỹ thuật, vì vậy cũng có thể dựa vào chúng để đánh giá một phần chất lượng fingerprint.
                <br><br>Ở thời điểm hiện tại, rất nhiều hệ thống lớn đã bắt đầu để ý tới các dạng antidetect browser, họ thu thập toàn bộ fingerprint của thiết bị thật có trên thị trường để đánh giá fingerprint thông qua database của họ, vì vậy có thể về phương pháp kỹ thuật, fingerprint vẫn có thể vượt qua các bài kiểm duyệt, tuy nhiên có thể bị phát hiện thông qua việc sử dụng database, chính vì vậy khi dùng antidetect browser với các hệ thống lớn, các phần mềm lớn hiện tại đều khuyên người dùng tắt kĩ thuật NOISE.
               <br><br> <strong>Đỏ mục IP</strong>
               <br><br>Bạn bị phát hiện đang sử dụng proxy, hãy thay thế proxy hiện tại
                <br><br> <strong>Đỏ Location</strong>
                 <br><br>Thông thường là trường hợp lệch timezone của website với bên API xác định timezone từ IP, ví dụ ở VN, timezone có thể trả ra là Asia/Ho_Chi_Minh, hoặc Asia/Bankok (miễn là múi giờ +7), các hệ thống phiên từ IP sang Timezone có thể lệch nhau nhưng nhìn chung là không ảnh hưởng quá nhiều.
                 <br><br> <strong>Đỏ hardware</strong>
                <br><br>  Fingerprint đã bị phát hiện đang sai về thông số kĩ thuật so với thiết bị thật, nhưng đôi khi cũng do website check chưa cập nhật kĩ thuật check cho phiên bản trình duyệt mới nhất.
                 <br><br> <strong>Đỏ software (hoặc browser)</strong>
               <br><br>Thường là do Useragent từ request không khớp với Useragent trả ra từ Javascript. (xảy ra khi người dùng tự dùng các extension đổi user agent mà không thông qua chức năng trên antidetect)
                 `,
                
            },
            {
                title:'Tài khoản bị logout khỏi google',
                description:`
                <strong>Đặc điểm nhận diện:</strong>
                <br><br><strong>o</strong>Tắt profile mở lại là logout Google (chỉ một số máy gặp tình trạng này)
                <br><br><strong>Nguyên nhân:</strong>
               <br><br><strong>o</strong>	Tại một số máy chưa rõ tại sao tùy chọn đồng bộ dữ liệu lên Google được bật mặc định
                <br><br><strong>o</strong>	Các trình duyệt tự build không sử dụng API key của Google để đồng bộ dữ liệu nên nếu tùy chọn đồng bộ được bật thì khi mở lại cookie Google không được chấp nhận nên bị logout
                 <br><br><strong>Cách xử lý:</strong>
                 <br><br>Thêm file "fixed_params.txt" ở thư mục cài đặt 3AM rồi nhập vào nội dung "--disable-sync". Nếu file đã có sẵn, chỉ cần chỉnh sửa theo nội dung trên
                `,
            },
        ]
    }
  

};

function showContentDetail(type, index) {
    const sectionData = data[type].children[index];
    document.getElementById("content-title").innerText = sectionData.title;
    document.getElementById("content-description").innerHTML = sectionData.description; // Sử dụng innerHTML
}

function showMainSectionDetail(type) {
    const sectionData = data[type];
    document.getElementById("content-title").innerText = sectionData.title;
    document.getElementById("content-description").innerHTML = sectionData.description; // Hiển thị mô tả chính

    // Tạo danh sách mục con cho Fingerprint
    if (type === 'fingerprint') {
        const childrenContainer = document.getElementById('fingerprint-children');
        childrenContainer.innerHTML = ''; // Xóa nội dung cũ
        sectionData.children.forEach((child, index) => {
            const childItem = document.createElement('div');
            childItem.className = 'sidebar-item';
            childItem.innerText = child.title;
            childItem.onclick = function() {
                activateItem(this);
                showContentDetail('fingerprint', index);
            };
            childrenContainer.appendChild(childItem);
        });
    }
}


function activateItem(element) {
    // Xóa lớp active khỏi tất cả các mục
    const items = document.querySelectorAll('.sidebar-item');
    items.forEach(item => {
      item.classList.remove('active');
    });
    
    // Thêm lớp active cho mục hiện tại
    element.classList.add('active');
  }
  