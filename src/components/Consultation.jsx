import React from 'react'

function Consultation() {
 return (
    <section className="py-16 bg-[#e8e8f8] from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Đăng ký tư vấn
            </h2>
            <p className="text-gray-600 mb-8">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong vòng 24
              giờ để tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn.
            </p>

            <form className="space-y-6">
              {/* Họ tên + SĐT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Họ tên
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
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              {/* Email */}
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
                  placeholder="Nhập địa chỉ email"
                />
              </div>

              {/* Dịch vụ quan tâm */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Dịch vụ quan tâm
                </label>
                <div className="relative">
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none pr-8"
                  >
                    <option value="" disabled selected>
                      Chọn dịch vụ
                    </option>
                    <option value="website">Thiết kế website</option>
                    <option value="app">Phát triển ứng dụng</option>
                    <option value="seo">Tối ưu SEO</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="content">Quản trị nội dung</option>
                    <option value="maintenance">Bảo trì website</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              {/* Nội dung */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nội dung
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Mô tả nhu cầu của bạn..."
                ></textarea>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="px-6 py-3 bg-[#4f46e5] rounded-xl text-white !rounded-button hover:bg-primary/90 transition whitespace-nowrap"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:block">
            <img
              src="https://readdy.ai/api/search-image?query=professional%2520business%2520team%2520discussing%2520digital%2520strategy%2520in%2520modern%2520office%252C%2520diverse%2520group%2520of%2520people%2520looking%2520at%2520computer%2520screen%252C%2520collaborative%2520work%2520environment%252C%2520high%2520quality%2520render&width=600&height=600&seq=2&orientation=squarish"
              alt="Đội ngũ tư vấn"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation
