import React from "react";

export default function TestimonialsAndCTA() {
  return (
    <>
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Khách hàng nói gì về chúng tôi
            </h2>
            <p className="text-gray-600">
              Sự hài lòng của khách hàng là thước đo thành công của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Item 1 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-yellow-400 mb-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "Chúng tôi đã hợp tác với đội ngũ thiết kế website này trong hơn
                2 năm. Họ không chỉ tạo ra một website đẹp mắt mà còn giúp chúng
                tôi tăng đáng kể lượng khách hàng tiềm năng."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520asian%2520businessman%2520portrait%2520headshot%252C%2520confident%2520expression%252C%2520suit%2520and%2520tie%252C%2520corporate%2520environment%252C%2520high%2520quality%2520render&width=100&height=100&seq=3&orientation=squarish"
                    alt="Nguyễn Minh Tuấn"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Nguyễn Minh Tuấn
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Giám đốc Công ty TNHH Thương mại Minh Phát
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-yellow-400 mb-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "Dịch vụ SEO của họ thực sự hiệu quả. Chỉ sau 3 tháng, website
                của chúng tôi đã tăng hạng đáng kể trên Google và lượng truy cập
                tăng gấp 3 lần. Đội ngũ hỗ trợ rất chuyên nghiệp và nhiệt tình."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520vietnamese%2520businesswoman%2520portrait%2520headshot%252C%2520confident%2520expression%252C%2520business%2520attire%252C%2520corporate%2520environment%252C%2520high%2520quality%2520render&width=100&height=100&seq=4&orientation=squarish"
                    alt="Trần Thị Mai Phương"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Trần Thị Mai Phương
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Trưởng phòng Marketing - Công ty CP Thời trang Việt
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center text-yellow-400 mb-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>
              <p className="text-gray-600 mb-6">
                "Ứng dụng di động do họ phát triển đã giúp chúng tôi tăng doanh
                số bán hàng lên 40% trong quý vừa qua. Giao diện đẹp, dễ sử dụng
                và đặc biệt là rất ít lỗi. Chúng tôi rất hài lòng với kết quả."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520vietnamese%2520man%2520portrait%2520headshot%252C%2520casual%2520business%2520attire%252C%2520friendly%2520expression%252C%2520startup%2520environment%252C%2520high%2520quality%2520render&width=100&height=100&seq=5&orientation=squarish"
                    alt="Lê Văn Đức"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lê Văn Đức</h4>
                  <p className="text-gray-500 text-sm">
                    CEO - Startup Foody Express
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-primary bg-[#4f46e5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">
                Bắt đầu dự án của bạn ngay hôm nay
              </h2>
              <p className="text-white/80">
                Liên hệ với chúng tôi để nhận tư vấn miễn phí về giải pháp số
                cho doanh nghiệp của bạn.
              </p>
            </div>
            <a
              href="../lien-he/index.php"
              className="px-8 py-4 bg-white  text-primary !rounded-button hover:bg-gray-100 transition whitespace-nowrap font-semibold"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
