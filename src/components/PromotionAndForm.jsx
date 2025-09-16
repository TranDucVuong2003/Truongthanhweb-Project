import React from "react";

export default function PromotionAndForm() {
  return (
    <>
      {/* Section Ưu đãi */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background hình ảnh + overlay */}
            <div className="absolute top-0 right-0 w-1/3 h-full">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-yellow-400/20 to-transparent"></div>
              <img
                src="https://readdy.ai/api/search-image?query=golden%20coins%20falling%2C%20money%20rain%2C%20financial%20success%2C%20promotional%20offer%2C%20abstract%20background%2C%20high%20quality%20render&width=400&height=600&seq=11&orientation=portrait"
                alt="Ưu đãi"
                className="h-full w-full object-cover object-right opacity-70"
              />
            </div>

            {/* Nội dung */}
            <div className="relative z-10 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Bộ quà tặng trị giá
                <br />
                <span className="text-yellow-500">10.000.000 đ</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Dành cho Tân thương - Seller và Doanh nghiệp mới (còn 3 ngày)
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 mr-3 text-primary w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line"></i>
                  </div>
                  <span className="text-gray-700">
                    Tặng 3.000.000đ giá trị thiết kế tại đầu cho website bán hàng
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 mr-3 text-primary w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line"></i>
                  </div>
                  <span className="text-gray-700">
                    Tặng 1 TKVC Facebook Ads, Google Ads trị giá 1.000.000đ
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 mr-3 text-primary w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line"></i>
                  </div>
                  <span className="text-gray-700">
                    Tặng 50 bài viết giới thiệu sản phẩm (mỗi bài 500.000đ)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 rounded-full p-1 mt-0.5 mr-3 text-primary w-6 h-6 flex items-center justify-center">
                    <i className="ri-check-line"></i>
                  </div>
                  <span className="text-gray-700">
                    Hỗ trợ cài đặt 1.000.000đ cho chi phí lên Google, 2.000.000đ
                    tư vấn website trong 6 tháng đầu tiên, giới thiệu 500.000đ
                    giá trị hosting
                  </span>
                </li>
              </ul>

              <button className="px-6 py-3 bg-primary text-white !rounded-button hover:bg-primary/90 transition whitespace-nowrap">
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Đăng ký tư vấn ngay!
            </h2>
            <p className="text-gray-600">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn với mọi thắc mắc và giúp bạn
              chọn mẫu phù hợp với doanh nghiệp.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Họ tên đầy đủ
                </label>
                <input
                  type="text"
                  id="fullname"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Nhập họ tên của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Nhập địa chỉ email của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Nhập số điện thoại của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nhu cầu của bạn
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Mô tả nhu cầu của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-white bg-[#4f46e5] !rounded-button hover:bg-primary/90 transition whitespace-nowrap"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
