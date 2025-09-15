import React from 'react'
import logo from '../assets/images/logo.webp'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Thông Tin Cần Biết */}
          <div>
            <h3 className="text-lg font-bold mb-6">Thông Tin Cần Biết</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="./thong-tin/dieu-khoan-su-dung.php"
                  className=" text-gray-400 hover:text-white transition-colors"
                >
                  Điều Khoản Sử Dụng
                </a>
              </li>
              <li>
                <a
                  href="./thong-tin/chinh-sach-bao-mat.php"
                  className=" text-gray-400 hover:text-white transition-colors"
                >
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li>
                <a
                  href="./thong-tin/quy-dinh-chung.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quy Định Chung
                </a>
              </li>
              <li>
                <a
                  href="./thong-tin/chuc-nang-phat-sinh.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chức Năng Phát Sinh
                </a>
              </li>
              <li>
                <a
                  href="./thong-tin/ban-giao-ma-nguon.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bản Giao Mã Nguồn
                </a>
              </li>
              <li>
                <a
                  href="./thong-tin/bao-tri-website.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bảo Hành, Bảo Trì
                </a>
              </li>
            </ul>
          </div>

          {/* Về Chúng Tôi */}
          <div>
            <h3 className="text-lg font-bold mb-6">Về Chúng Tôi</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="./gioi-thieu/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a
                  href="./tin-tuc/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tin Tức
                </a>
              </li>
              <li>
                <a
                  href="./ho-so-nang-luc/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Hồ Sơ
                </a>
              </li>
              <li>
                <a
                  href="./lien-he/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Liên Hệ
                </a>
              </li>
              <li>
                <a
                  href="./tuyen-dung/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tuyển Dụng
                </a>
              </li>
              <li>
                <a
                  href="./docs/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tài Liệu
                </a>
              </li>
            </ul>
          </div>

          {/* Giải Pháp Website */}
          <div>
            <h3 className="text-lg font-bold mb-6">Giải Pháp Website</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="./dich-vu/thiet-ke-website.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Thiết Kế Website
                </a>
              </li>
              <li>
                <a
                  href="./dich-vu/cham-soc-website.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chăm Sóc Website
                </a>
              </li>
              <li>
                <a
                  href="./dich-vu/seo-website.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  SEO Website
                </a>
              </li>
              <li>
                <a
                  href="./dich-vu/erp-crm.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Giải Pháp ERP, CRM
                </a>
              </li>
              <li>
                <a
                  href="./dich-vu/tong-dai-ao.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tổng Đài Ảo, Auto Call
                </a>
              </li>
            </ul>
          </div>

          {/* Giải Pháp Media */}
          <div>
            <h3 className="text-lg font-bold mb-6">Giải Pháp Media</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="./marketing/thiet-ke-logo.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Thiết Kế Logo, Banner
                </a>
              </li>
              <li>
                <a
                  href="./marketing/sang-tao-noi-dung.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sáng Tạo Nội Dung
                </a>
              </li>
              <li>
                <a
                  href="./marketing/san-xuat-video.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sản Xuất Video
                </a>
              </li>
              <li>
                <a
                  href="./marketing/quang-cao.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chạy Quảng Cáo
                </a>
              </li>
              <li>
                <a
                  href="./marketing/index.php"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Marketing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Thông Tin Công Ty */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col space-y-4">
            <div className="text-gray-400 text-sm">
              <div className="flex items-center mb-6">
                <a href="./index.php" className="mr-4">
                  <img
                    src={logo}
                    alt="Truong Thanh Web Logo"
                    className="h-16"
                  />
                </a>
              </div>
              <h3 className="font-bold text-lg mb-4">
                CÔNG TY TNHH TRUYỀN THÔNG VÀ CÔNG NGHỆ TRƯỜNG THÀNH
              </h3>
              <p>Giấy phép kinh doanh số: 0110999708</p>
              <p>Địa Chỉ: Số 16 ngõ 42, Trung Hòa, Cầu Giấy, Hà Nội</p>
              <p>Hotline: 024.2212.1489</p>
              <p>Email: info@truongthanhweb.vn</p>
            </div>

            <div className="text-gray-400 text-sm">
              <p>
                Bản quyền thuộc về Trường Thành Web.
                <br />
                Sử dụng nội dung ở trang này và dịch vụ tại Trường Thành Web có
                nghĩa là bạn đồng ý với{" "}
                <a
                  href="./thong-tin/dieu-khoan-su-dung.php"
                  className="text-[#00b2ff] text-primary hover:text-white"
                >
                  Điều Khoản Sử Dụng
                </a>{" "}
                và{" "}
                <a
                  href="./thong-tin/chinh-sach-bao-mat.php"
                  className="text-[#00b2ff] text-primary hover:text-white"
                >
                  Chính Sách Bảo Mật
                </a>{" "}
                của chúng tôi. Giấy phép kinh doanh số 0110999708 bởi Bộ Tài
                Chính
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" target="_blank" className="text-gray-400 hover:text-white">
                <i className="ri-instagram-line ri-lg"></i>
              </a>
              <a href="#" target="_blank" className="text-gray-400 hover:text-white">
                <i className="ri-linkedin-line ri-lg"></i>
              </a>
              <a
                href="https://www.facebook.com/TruongThanhWeb/"
                target="_blank"
                className="text-gray-400 hover:text-white"
              >
                <i className="ri-facebook-line ri-lg"></i>
              </a>
              <a href="#" target="_blank" className="text-gray-400 hover:text-white">
                <i className="ri-twitter-line ri-lg"></i>
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-6">
            <div className="flex justify-center space-x-4 mb-4">
              <div className="flex items-center text-gray-500">
                <i className="ri-visa-fill ri-lg mr-1"></i>
                <span className="text-xs">Visa</span>
              </div>
              <div className="flex items-center text-gray-500">
                <i className="ri-mastercard-fill ri-lg mr-1"></i>
                <span className="text-xs">Mastercard</span>
              </div>
              <div className="flex items-center text-gray-500">
                <i className="ri-paypal-fill ri-lg mr-1"></i>
                <span className="text-xs">PayPal</span>
              </div>
              <div className="flex items-center text-gray-500">
                <i className="ri-bank-card-fill ri-lg mr-1"></i>
                <span className="text-xs">Banking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
