import React from 'react';
import iconWarningRed from '../../../../img/icon/warning2.png';
import imgQRPayment from '../../../../img/CAFETAICHINH-QR-PIC.png';
import { dataPayments } from './dataPayment'; 

export function PaymentPage() {
    const paymentInfo = dataPayments[0];

    return (
        <div className='container pt-5'>
            <h3 style={{ fontWeight: '600' }}>Thông tin đơn hàng</h3>
            <div className="mt-4 bg-white rounded shadow" style={{ padding: '20px' }}>
                <div className="border-bottom pb-2 mb-3">
                    <img src={iconWarningRed} alt="Warning" style={{ width: '20px', marginRight: '5px' }} />
                    Vui lòng chụp lại bill cũng như kiểm tra lại đúng <b>số tiền</b> và <b>nội dung chuyển khoản</b> trước khi tiến hành thanh toán.
                </div>
                <div className="row">
                    <div className="col-md-5 col-sx-12 justify-content-center d-flex align-items-center">
                        <div className="">
                            <div className="mb-4">
                                <p className='mt-4'><strong>Tên phần mềm:</strong></p>
                                <b>{paymentInfo.product} (vĩnh viễn)</b><br />
                                <p>{'>'} <strong>Giá tiền:</strong></p>
                                <b style={{ color: 'red' }}>{paymentInfo.price.toLocaleString()} đ</b>
                                <div className="mb-4">
                                    <p><strong>Nội dung chuyển khoản:</strong></p>
                                    <b style={{ color: 'red' }}>{paymentInfo.paymentInfo}</b>
                                </div>
                                <div className="mb-4">
                                    <p><strong>Tài khoản người nhận:</strong></p>
                                    <b>
                                        <p style={{ color: 'red' }}>{paymentInfo.accountNumber}</p>
                                        {paymentInfo.bankDetails.name} - {paymentInfo.bankDetails.accountHolder}
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sx-12 text-center ">
                        <img
                            className='border rounded img-fluid'
                            src={imgQRPayment}
                            alt="QR Payment"
                            style={{ maxWidth: '300px', width: '100%', height: 'auto' }}
                        />
                        <div className="mt-3">
                            <p><strong>Số tiền:</strong> {paymentInfo.price.toLocaleString()} VND</p>
                            <p><strong>Nội dung:</strong> {paymentInfo.paymentInfo}</p>
                            <p><strong>Tên chủ TK:</strong> {paymentInfo.bankDetails.accountHolder}</p>
                            <b>Số TK: {paymentInfo.accountNumber}</b>
                            <p><strong>Ngân hàng:</strong> {paymentInfo.bankDetails.fullName}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12">
                        <p>Đơn hàng sẽ tự động được xử lý sau 1-3 phút. Sau đó, khi hệ thống xác nhận, bạn sẽ được chuyển hướng tới <b>License của tôi</b>. Một email cũng sẽ được gửi tới bạn với thông tin chi tiết về đơn hàng.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
