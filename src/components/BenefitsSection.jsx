import React from 'react'

function BenefitsSection() {
   return (
    <section
      id="benefits"
      className="py-16 md:py-24 bg-gray-50"
      style={{ background: "antiquewhite" }}
    >
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lợi Ích Của Website Trong Kinh Doanh
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sở hữu một website chuyên nghiệp mang lại nhiều lợi thế cạnh tranh
            và cơ hội phát triển cho doanh nghiệp của bạn trong thời đại số.
          </p>
        </div>

        {/* Hình ảnh + 3 lợi ích đầu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1 relative">
            <img
              src="https://static.readdy.ai/image/1f4438e38b74ed87371441e676e628ff/ea1e1ac4be2061e82c41cf8b72a49935.png"
              alt="Lợi ích của website trong kinh doanh"
              className="w-full rounded-lg shadow-lg"
            />
            <img
              src="https://readdy.ai/api/search-image?query=professional%2520business%2520growth%2520concept%2520with%2520laptop%2520showing%2520analytics%2520dashboard%2C%2520charts%2520and%2520graphs%2520demonstrating%2520online%2520success%2C%2520modern%2520office%2520setting%2C%2520blue%2520accent%2520colors%2C%2520clean%2520professional%2520photography&width=800&height=600&seq=benefits1&orientation=landscape"
              alt="Lợi ích của website trong kinh doanh"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            {/* Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4 shrink-0">
                  <i className="ri-global-line text-[#00b2ff] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Hiện Diện Toàn Cầu 24/7
                  </h3>
                  <p className="text-gray-600">
                    Website giúp doanh nghiệp của bạn có thể tiếp cận khách hàng
                    mọi lúc, mọi nơi, không bị giới hạn về địa lý và thời gian.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4 shrink-0">
                  <i className="ri-customer-service-2-line text-[#00b2ff] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tăng Độ Tin Cậy</h3>
                  <p className="text-gray-600">
                    Website chuyên nghiệp giúp xây dựng hình ảnh thương hiệu
                    mạnh mẽ, tăng độ tin cậy và uy tín với khách hàng.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mr-4 shrink-0">
                  <i className="ri-line-chart-line text-[#00b2ff] text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tăng Doanh Thu</h3>
                  <p className="text-gray-600">
                    Mở rộng kênh bán hàng online, tiếp cận nhiều khách hàng tiềm
                    năng hơn, từ đó tăng doanh thu một cách hiệu quả.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 lợi ích tiếp theo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <i className="ri-money-dollar-circle-line text-[#00b2ff] text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Tiết Kiệm Chi Phí</h3>
            <p className="text-gray-600">
              Giảm chi phí marketing và quảng cáo truyền thống, tự động hóa
              nhiều quy trình kinh doanh.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <i className="ri-bar-chart-box-line text-[#00b2ff] text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Đo Lường & Phân Tích</h3>
            <p className="text-gray-600">
              Dễ dàng theo dõi, phân tích hành vi khách hàng và hiệu quả kinh
              doanh qua các công cụ analytics.
            </p>
          </div>

          <div
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <i className="ri-customer-service-line text-[#00b2ff] text-xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Chăm Sóc Khách Hàng</h3>
            <p className="text-gray-600">
              Tương tác và hỗ trợ khách hàng nhanh chóng, hiệu quả thông qua các
              kênh trực tuyến.
            </p>
          </div>
        </div>

        {/* Nút */}
        <div className="text-center mt-12">
          <a
            href="./lien-he/index.php"
            className="inline-block bg-primary hover:bg-blue-600 bg-[#00b2ff] rounded-2xl text-white font-medium py-3 px-8 !rounded-button transition-colors whitespace-nowrap"
          >
            Nhận Tư Vấn Miễn Phí
          </a>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection
