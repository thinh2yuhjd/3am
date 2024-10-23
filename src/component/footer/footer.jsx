import React from 'react';
import './footer.css'; 
import logo from "../../img/logo.png";

const Footer = () => {
    return (
        <footer id="footer" className="footer-wrapper mt-5">
            {/* FOOTER 2 */}
            <div className="footer-widgets footer footer-2 dark">
               <div className="row dark large-columns-6 mb-0"> 
                    <div className="col pb-0 widget"></div>
                    <div className="col pb-0 widget widget_media_image">
                        <div className="logo-container"> 
                            <a href="#">
                                <img
                                    width="100"
                                    height="100"
                                    src={logo}
                                    className="image wp-image-390 attachment-full size-full"
                                    alt="3AM Login"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="widget_text col pb-0 widget widget_custom_html">
                        <span className="widget-title">Sản phẩm khác</span>
                        <div className="is-divider small"></div>
                        <div className="textwidget custom-html-widget">
                            <ul className="footer-product-container">
                                <li><a href="#">3AM AntidetectOS</a></li>
                                <li><a href="#">3AM Automate</a></li>
                                <li><a href="#">3AM Crawler</a></li>
                                <li><a href="#">3AM POD Generator</a></li>
                                <li><a href="#">Sản phẩm khác</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget_text col pb-0 widget widget_custom_html">
                        <span className="widget-title">Hỗ trợ</span>
                        <div className="is-divider small"></div>
                        <div className="textwidget custom-html-widget">
                            <ul>
                                <li><a href="#">Câu hỏi thường gặp</a></li>
                                <li><a href="#">Chính sách hỗ trợ</a></li>
                                <li><a href="#">Chính sách hoàn tiền</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget_text col pb-0 widget widget_custom_html">
                        <span className="widget-title">Kênh truyền thông</span>
                        <div className="is-divider small"></div>
                        <div className="textwidget custom-html-widget">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-facebook" style={{ color: "#0080FF", marginRight: "5px" }}></i> Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-tiktok" style={{ marginRight: "5px" }}></i> Tiktok
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-brands fa-youtube" style={{ color: "#CC0000", marginRight: "5px" }}></i> Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col pb-0 widget"></div>
                </div>
            </div> 
        </footer>
    );
}
export default Footer;
