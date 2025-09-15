import React from 'react'

function ServicesSection() {
  return (
    // Services Section
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trường Thành Web cung cấp đầy đủ các dịch vụ thiết kế và phát triển
            website chuyên nghiệp, đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </div>

        {/* 2 Service lớn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Service 1 */}
          <div
            id="web-design"
            className="bg-white rounded-lg overflow-hidden custom-shadow fade-in"
          >
            <div className="h-64 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%2520web%2520designer%2520working%2520on%2520multiple%2520screens%2520showing%2520website%2520layouts%2C%2520modern%2520office%2520environment%2C%2520blue%2520and%2520yellow%2520accent%2520colors%2C%25204K%2520detailed%2520photography%2C%2520shallow%2520depth%2520of%2520field&width=800&height=500&seq=service1&orientation=landscape"
                alt="Thiết kế website"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Thiết Kế Website</h3>
              <p className="text-gray-600 mb-4">
                Chúng tôi thiết kế website chuyên nghiệp, độc đáo và phù hợp với
                thương hiệu của bạn. Giao diện hiện đại, tương thích với mọi
                thiết bị và tối ưu trải nghiệm người dùng.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className=" text-[#3b82f680] ri-check-line text-primary mr-2 mt-1 "></i>
                  <span>Website chuẩn responsive, tương thích mọi thiết bị</span>
                </li>
                <li className="flex items-start">
                  <i className=" text-[#3b82f680] ri-check-line text-primary mr-2 mt-1"></i>
                  <span>Giao diện đẹp mắt, hiện đại theo xu hướng</span>
                </li>
                <li className="flex items-start">
                  <i className=" text-[#3b82f680] ri-check-line text-primary mr-2 mt-1"></i>
                  <span>Tối ưu tốc độ tải trang và trải nghiệm người dùng</span>
                </li>
              </ul>
              <a
                href="#quote"
                className="rounded-2xl inline-block bg-[#00b2ff] hover:bg-blue-600 text-white font-medium py-2 px-6 !rounded-button transition-colors whitespace-nowrap"
              >
                Tư Vấn Ngay
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div
            id="seo"
            className="bg-white rounded-lg overflow-hidden custom-shadow fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-64 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=SEO%2520specialist%2520analyzing%2520website%2520analytics%2520on%2520computer%2520screen%2C%2520charts%2520and%2520graphs%2520showing%2520growth%2C%2520modern%2520office%2520setting%2C%2520blue%2520and%2520yellow%2520accent%2520colors%2C%25204K%2520detailed%2520photography&width=800&height=500&seq=service2&orientation=landscape"
                alt="Dịch vụ SEO"
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Dịch Vụ SEO</h3>
              <p className="text-gray-600 mb-4">
                Tối ưu hóa website của bạn để đạt thứ hạng cao trên các công cụ
                tìm kiếm, tăng lượng truy cập và chuyển đổi khách hàng tiềm năng
                thành khách hàng thực sự.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className=" text-[#3b82f680] ri-check-line text-primary mr-2 mt-1"></i>
                  <span>Phân tích và nghiên cứu từ khóa chuyên sâu</span>
                </li>
                <li className="flex items-start">
                  <i className=" text-[#3b82f680] ri-check-line text-primary mr-2 mt-1"></i>
                  <span>Tối ưu cấu trúc website chuẩn SEO</span>
                </li>
                <li className="flex items-start">
                  <i className=" text-[#3b82f680] ri-check-line text-primary mr-2 mt-1"></i>
                  <span>Xây dựng backlink chất lượng cao</span>
                </li>
              </ul>
              <a
                href="#quote"
                className="rounded-2xl inline-block bg-[#00b2ff] hover:bg-blue-600 text-white font-medium py-2 px-6 !rounded-button transition-colors whitespace-nowrap"
              >
                Tư Vấn Ngay
              </a>
            </div>
          </div>
        </div>

        {/* 3 Service nhỏ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {/* Service 3 */}
          <div
            id="maintenance"
            className="bg-white rounded-lg overflow-hidden custom-shadow fade-in shadow-md"
          >
            <div className="p-6">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <i className=" text-[#3b82f680] ri-settings-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Bảo Trì Website</h3>
              <p className="text-gray-600">
                Dịch vụ bảo trì, nâng cấp và sửa lỗi website thường xuyên, đảm
                bảo website luôn hoạt động ổn định và an toàn.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div
            className="bg-white rounded-lg overflow-hidden custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="p-6">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <i className=" text-[#3b82f680] ri-shopping-cart-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Website Thương Mại Điện Tử</h3>
              <p className="text-gray-600">
                Thiết kế website bán hàng với đầy đủ tính năng quản lý sản phẩm,
                đơn hàng, thanh toán và tích hợp các cổng thanh toán phổ biến.
              </p>
            </div>
          </div>

          {/* Service 5 */}
          <div
            className="bg-white rounded-lg overflow-hidden custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="p-6">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <i className=" text-[#3b82f680] ri-layout-masonry-line ri-2x text-primary"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Landing Page</h3>
              <p className="text-gray-600">
                Thiết kế landing page chuyên nghiệp, tối ưu chuyển đổi, giúp thu
                hút và chuyển đổi khách hàng tiềm năng hiệu quả.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
