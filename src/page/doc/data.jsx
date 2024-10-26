export const data = {
    fingerprint: {
        title: 'Browser Fingerprint',
        description: [
            "- Fingerprint – thực ra đây chỉ là một khái niệm tương đối, không hoàn toàn sát với ý nghĩa tính duy nhất của dấu vân tay, sẽ có rất nhiều thiết bị có Fingerprint hoàn toàn giống nhau và số đó là vô cùng nhiều trên thế giới (cùng nhãn hiệu, cùng cấu hình, cài đặt cùng một phiên bản hệ điều hành, driver sẽ có Fingerprint hoàn toàn giống nhau).",
            "- Fingerprint là tổng hòa của rất nhiều các thông số của máy như số nhân CPU, dung lượng RAM, loại card đồ họa, độ phân giải màn hình… (phần cứng), phiên bản hệ điều hành, timezone, ngôn ngữ, loại trình duyệt, phiên bản trình duyệt (phần mềm)… Hãy lưu ý là tổng hòa rất nhiều thông số chứ không phải riêng một thông số nào. Giống như việc bạn phân biệt một người nào đó là bạn nhìn tổng thể ngoại hình của người đó chứ không thể nhìn mỗi cái mắt, cái mũi, cái tay, cái chân mà nhận ra đó là ai.",
            "Một website không thể gọi trực tiếp các thông số của thiết bị mà phải thông qua các phương thức javascript do trình duyệt cung cấp.",
        ],

        children: [
            { title: 'Địa chỉ IP', description: 'Địa chỉ IP là một thông tin tốt nhất để định danh người dùng, vì vậy nếu bạn sử dụng proxy hãy chú ý tới nguồn proxy thật tốt và uy tín.Với người dùng antidetect nói chung thì chắc chắn không thể không sử dụng proxy. Hiện nay nguồn IPv4 trên thế giới đang dần cạn kiệt, các hệ thống lớn cũng đã có rất nhiều data về blacklist proxy nên việc tìm được nguồn proxy sạch khá khó khăn, đặc biết với newbie.' },
            { title: 'Timezone', description: 'Mỗi quốc gia (hoặc một số quốc gia) có một timezone khác nhau (Như Việt Nam, Bangkok chung múi giờ +7). Nếu địa chỉ IP của bạn thể hiện bạn đang ở US, nhưng thông số timezone lại ở Việt Nam thì đây là việc khá đáng ngờ vì không ai sống tại Mỹ mà cài đặt timezone ở Việt Nam cả.Việc của antidetect là thay đổi timezone ở profile giống với vị trí ứng với địa chỉ IP.' },
            { title: 'Geo location', description: 'Geo location được sử dụng định vị bạn đang ở đâu trên bản đồ một cách chính xác dựa trên kinh độ và vĩ độ. Tuy nhiên cũng có khá nhiều người tắt tính năng định vị này nên thông số này có thể không thực sự quan trọng.Antidetect sẽ sử dụng một api bên thứ ba để phiên IP đang sử dụng sang vị trí đương đối và trả về kết quả kinh độ, vĩ độ, từ đó trả kết quả cho website nếu có lệnh gọi.' },
            { title: 'WebRTC IP', description: 'WebRTC là một công nghệ giúp hai thiết bị có thể kết nối trực tiếp với nhau mà không quan tâm tới các kết nối trung gian, nó được sử dụng trong các ứng dụng cần kết nối nhanh như video call.Trước khi có WebRTC, 2 người dùng facebook muốn video call cho nhau thì đều phải gửi / truyền các gói tin qua server facebook (thường bên US, từ VN->US->VN rất mất thời gian), điều này vừa làm cho server facebook chịu tải cao, vừa làm trải nghiệm khách hàng không tốt vì thời gian kết nối chậm dẫn tới giật, lag.Khi có WebRTC, 2 thiết bị của người dùng có thể khởi tạo kết nối trực tiếp cho nhau (thông thường sử dụng UDP), việc này giúp tốc độ kết nối tốt và giảm tải rất nhiều cho server.Chính vì có kết nối trực tiếp, bỏ qua các kết nối trung gian, WebRTC cũng được ứng dụng trong vấn đề bảo mật để xác định IP thật của người dùng.Website sẽ yêu cầu máy tính kết nối WebRTC, sau khi kết nối thành công, máy tính và website sẽ có kết nối trực tiếp và hoàn toàn bỏ qua các proxy trung gian nếu có, từ đây website có thể lấy được IP thật của thiết bị thông qua 2 cách:+ Đọc trong gói tin UDP (thường được sử dụng)+ Yêu cầu Stun server lấy và trả về kết quả (Ebay sử dụng cách này)Việc của antidetect là ghi đè IP thật trong gói tin UDP cũng như xử lý với stun server.' },
            { title: 'Hardware: Canvas', description: 'Canvas là một HTML5 API, nó được sử dụng để vẽ (render) 2D để hiển thị lên Browser, ví dụ như một hình tròn, hình tam giác, render một đoạn chữ thành hình ảnh và nhiều thứ khác. Các hình 2D này hơi khác nhau ở các loại card màn hình (mắt thường khó có thể thể phân biệt) nên đây có thể sử dụng là một trong các thông số xác định sự khác nhau giữa các loại card màn hình.Antidetect browser sử dụng kĩ thuật noise (làm nhiễu) để hình ảnh sau khi render có hơi khác một chút so với render gốc.Đặc điểm của kĩ thuật noise:1. Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra.Nếu chỉ xét riêng một thông số canvas, có hàng chục triệu máy tính khác nhau trên khắp thế giới giống nhau (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính duy nhất rất cao.Ví dụ đơn giản:Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập các mã hash canvas lưu lại, khi bạn truy cập nếu bạn giống rất nhiều người khác là điều bình thường, nhưng bạn là duy nhất mới là điều đáng nghi và gần như không thể xảy ra (bạn không thể sử dụng một loại card đồ họa, cài hệ điều hành và trình duyệt mà không ai trong số hàng tỉ người đó có).' },
            { title: 'Hardware: WebGL', description: 'WebGL là một API Javascript giúp trình duyệt render các khối 3D (như một khối tam giác 3D, hình hộp…), mỗi loại card khi render cũng sẽ hơi khác nhau một chút, thuật toán khử răng cưa, làm mịn ảnh cũng khác nhau nên đây cũng là một trong những thông số giúp xác định sự khác nhau giữa các loại card màn hình. Việc render 3D phức tạp hơn render 2D rất nhiều và có khá nhiều tùy chỉnh nâng cao nhất là đối với các loại card rời hiện nay, nên việc thêm noise đúng kỹ thuật trong quá trình render là khá tốt đối với nhiều website.Đặc điểm của kĩ thuật noise:1. Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra.Nếu chỉ xét riêng một thông số canvas, có hàng chục triệu máy tính khác nhau trên khắp thế giới giống nhau (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính duy nhất rất cao.Ví dụ đơn giản:Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập các mã hash canvas lưu lại, khi bạn truy cập nếu bạn giống rất nhiều người khác là điều bình thường, nhưng bạn là duy nhất mới là điều đáng nghi và gần như không thể xảy ra (bạn không thể sử dụng một loại card đồ họa, cài hệ điều hành và trình duyệt mà không ai trong số hàng tỉ người đó có).' },
            { title: 'Hardware: Audio', description: 'Tương tự với Canvas, WebGL là đặc trưng của các loại card đồ họa, thì Audio context là đặc trưng của card âm thanh.Việc xử lý cũng tương tự là sử dụng kĩ thuật noise để âm thanh sau khi render khác với âm thanh gốc, từ đó tạo sự khác nhau về fingerprint.Đặc điểm của kĩ thuật noise:1. Kĩ thuật noise không thể biến hình ảnh sau render của card đồ họa A giống hệt với hình ảnh sau render của card đồ họa B, giống như việc phẫu thuật thẩm mỹ, không thể phẫu thuật người A thành người B được (tất cả chi tiết từng chân tơ kẽ tóc), mà chỉ làm người A lúc sau khác với người A lúc trước.2. Kĩ thuật này giúp tạo nên sự đa dạng và tính duy nhất rất lớn cho fingerprint.3. Kĩ thuật noise có thể bị phát hiện bởi các hệ thống lớn có thu thập big data để kiểm tra.Nếu chỉ xét riêng một thông số canvas, có hàng chục triệu máy tính khác nhau trên khắp thế giới giống nhau (sử dụng cùng loại card đồ họa, cài cùng hệ điều hành và trình duyệt), nhưng kĩ thuật noise sẽ khiến bạn có tính duy nhất rất cao.Ví dụ đơn giản:Facebook có hàng tỉ người truy cập mỗi ngày, họ thu thập các mã hash canvas lưu lại, khi bạn truy cập nếu bạn giống rất nhiều người khác là điều bình thường, nhưng bạn là duy nhất mới là điều đáng nghi và gần như không thể xảy ra (bạn không thể sử dụng một loại card đồ họa, cài hệ điều hành và trình duyệt mà không ai trong số hàng tỉ người đó có).' },
            { title: 'Hardware: CPU, RAM', description: 'Các thông số như số nhân CPU, dung lượng RAM, số lượng đầu vào, đầu ra Audio, Video... giúp tạo ra sự đa dạng cho fingerprint. Điều này rất an toàn vì website sẽ không thể phân tích được trong trường hợp này.' },
            { title: 'Software: User Agent', description: 'User-agent là chuỗi kí tự đại diện cho 4 thông số (Hệ điều hành, phiên bản hệ điều hành, Loại trình duyệt, phiên bản trình duyệt). User agent giúp website nhận biết được hệ điều hành và trình duyệt bạn đang sử dụng để hiển thị giao diện phù hợp.Ví dụ: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36 cho thấy bạn đang sử dụng Windows NT 10.0, 64bit, và Chrome phiên bản 118.0.0.0. User agent không có tính duy nhất và rất đại trà, vì vậy nếu không có TUT, TIP gì đó thì không nên thay đổi thông số này.' },
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
                description: ''
                    ,
            },
            {
                title:'Tạo profiles',
                description:``,

            },
            {
                title:'Cập nhập profiles',
                description: '',
            },
            {
                title:'Xóa Profile',
                description:`
                `,
            },
            {
                title:'Danh sách nhóm',
                description:`
                `,
            },
        ]
        
    },
    auto:{
        title:'None-code automation',
        description:'3AM  cung cấp các thẻ script giúp người dùng có thể tự tạo các automation đơn giản.Tuy là none-code, dễ sử dụng nhưng việc người dùng phải logic như một coder để script chạy mượt mà là một điều bắt buộc, vì vậy nó không dành cho số đông.',
        children:[
            {
                title:'Các block',
                description:`
                `,
            },
            {
                title:'Programming',
                description:` `,
            },
            {
                title:'Navigation',
                description:`
               `,
            },
            {
                title:'Element',
                description:`
              
                `,
            },
            {
                title:'Mouse',
                description:`
              
                `,
            },
            {
                title:'Keyboard',
                description:`
               
                `,
            },
            {
                title:'Scroll',
                description:`Chức năng các action
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
                description:`Chức năng các action
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
 <strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
                `,
            },
            {
                title:'Helper',
                description:`Chức năng các action
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
 <strong><span style="color:red"><span style="color:red">Chú ý: tất cả các đầu vào đều có thể nhúng các biến khác bằng định dạng $TÊN_BIẾN</span></span></strong>
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
                description: `<strong>Đặc điểm nhận diện: </strong>
                <strong style="color: black;">o</strong> Search bar trên trình duyệt hiện GPM-Login thay vì hiện theo tên profile
                <strong style="color: black;">o</strong> Proxy / Socks5 có Auth (User/Pass) hỏi User / Pass khi truy cập trang web
                <strong>Cách xử lý: </strong>
                <strong style="color: black;">o</strong> Cài đặt lại đường dẫn tới thư mục profile không chứ kí tự Tiếng Việt hoặc kí tự Unicode đặc biệt (chỉ chấp nhận kí tự trong bảng mã ANSI)
                `,

            },
            {
                title:'Bị xóa file thực thi exe',
                description:`Do phần mềm được viết trên .NET và sử dụng Patch protect chống Crack / Decode mã nguồn nên có thể bị nhiều trình antivirus hiểu nhầm là virus và xóa file thực thi.
                <strong>Cách xử lý:</strong>
                <strong>o</strong>	Thêm thư mục app vào thư mục ngoại lệ của Antivirus (search thêm tại google)
                `,
              
            },
            {
                title:'Không kết nối được Proxy / Socks5',
                description:`<strong>Nguyên nhân:</strong>
                Cơ chế kết nối proxy / socks5 hoàn toàn giống nhau trên mọi phần mềm
                Đa phần do proxy / socks5 kết nối chậm hoặc die, hãy kiểm tra trên nhiều loại trình duyệt trước khi báo lỗi về page.
                `,
            },
            {
                title:'Profile không lưu dữ liệu',
                description:`<strong>Đặc điểm nhận diện:</strong>
              <strong>  o</strong>	Sau khi kết thúc phiên, mở lại profile, dữ liệu cookie, localstorage, history... không được lưu
             <strong>  o</strong>	Phát sinh một số lỗi không xác định
                <strong>Nguyên nhân:</strong>
                <strong>  o</strong>	Do thư mục chọn lưu profile không đủ quyền đọc ghi, thường xảy ra khi copy nguyên thư mục từ máy này sang máy khác, khi cài lại hệ điều hành hoặc cắm ổ cứng rời vào một máy tính khác
                <strong>Khắc phục:</strong>
               <strong>  o</strong> Đặt quyền đọc ghi đầy đủ cho thư mục lưu trữ profile (xem hướng dẫn tại google)
                `,
            },
            {
                title:'Lỗi liên quan cookie',
                description:`
                <strong>Khi import cookie thành công, mở lên đã nhận nhưng đóng trình duyệt mở lại lại bị mất hoặc về trạng thái ban đầu khi import</strong>
                Cách xử lý:
                 Sau khi import, giữ trình duyệt 15-20s trước khi đóng để trình duyệt lưu cookie hiện tại (có thể mở một vài link trong trang web đã import vào trước khi đóng)
                `,
            },
            {
                title:'Báo đỏ ở một số trang check',
                description:`Các trang check fingerprint có đánh giá xanh / đỏ chỉ mang tính chất tương đối, tuy nhiên chúng check khá chính xác về mặt kỹ thuật, vì vậy cũng có thể dựa vào chúng để đánh giá một phần chất lượng fingerprint.
                Ở thời điểm hiện tại, rất nhiều hệ thống lớn đã bắt đầu để ý tới các dạng antidetect browser, họ thu thập toàn bộ fingerprint của thiết bị thật có trên thị trường để đánh giá fingerprint thông qua database của họ, vì vậy có thể về phương pháp kỹ thuật, fingerprint vẫn có thể vượt qua các bài kiểm duyệt, tuy nhiên có thể bị phát hiện thông qua việc sử dụng database, chính vì vậy khi dùng antidetect browser với các hệ thống lớn, các phần mềm lớn hiện tại đều khuyên người dùng tắt kĩ thuật NOISE.
                <strong>Đỏ mục IP</strong>
               Bạn bị phát hiện đang sử dụng proxy, hãy thay thế proxy hiện tại
                 <strong>Đỏ Location</strong>
                 Thông thường là trường hợp lệch timezone của website với bên API xác định timezone từ IP, ví dụ ở VN, timezone có thể trả ra là Asia/Ho_Chi_Minh, hoặc Asia/Bankok (miễn là múi giờ +7), các hệ thống phiên từ IP sang Timezone có thể lệch nhau nhưng nhìn chung là không ảnh hưởng quá nhiều.
                  <strong>Đỏ hardware</strong>
                  Fingerprint đã bị phát hiện đang sai về thông số kĩ thuật so với thiết bị thật, nhưng đôi khi cũng do website check chưa cập nhật kĩ thuật check cho phiên bản trình duyệt mới nhất.
                  <strong>Đỏ software (hoặc browser)</strong>
               Thường là do Useragent từ request không khớp với Useragent trả ra từ Javascript. (xảy ra khi người dùng tự dùng các extension đổi user agent mà không thông qua chức năng trên antidetect)
                 `,
                
            },
            {
                title:'Tài khoản bị logout khỏi google',
                description:`
                <strong>Đặc điểm nhận diện:</strong>
                <strong>o</strong>Tắt profile mở lại là logout Google (chỉ một số máy gặp tình trạng này)
                <strong>Nguyên nhân:</strong>
               <strong>o</strong>	Tại một số máy chưa rõ tại sao tùy chọn đồng bộ dữ liệu lên Google được bật mặc định
                <strong>o</strong>	Các trình duyệt tự build không sử dụng API key của Google để đồng bộ dữ liệu nên nếu tùy chọn đồng bộ được bật thì khi mở lại cookie Google không được chấp nhận nên bị logout
                 <strong>Cách xử lý:</strong>
                 Thêm file "fixed_params.txt" ở thư mục cài đặt 3AM rồi nhập vào nội dung "--disable-sync". Nếu file đã có sẵn, chỉ cần chỉnh sửa theo nội dung trên
                `,
            },
        ]
    }
};
