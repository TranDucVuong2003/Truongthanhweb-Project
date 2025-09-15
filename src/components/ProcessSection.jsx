import React from 'react'

function ProcessSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quy Trình Làm Việc
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quy trình làm việc chuyên nghiệp, minh bạch và hiệu quả của chúng
            tôi sẽ giúp bạn có được website như mong muốn trong thời gian ngắn
            nhất.
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          <div className="space-y-12 md:space-y-0 relative">
            {/* Step 1 */}
            <div className="md:flex items-center fade-in">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">01. Tìm Hiểu Nhu Cầu</h3>
                <p className="text-gray-600">
                  Chúng tôi lắng nghe và tìm hiểu kỹ nhu cầu, mục tiêu kinh doanh và
                  đối tượng khách hàng của bạn để đưa ra giải pháp phù hợp nhất.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="hidden md:block absolute left-0 top-1/2 w-8 h-8 bg-[#00b2ff] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white"></div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-4 md:hidden">
                    <span className="text-[#00b2ff] font-bold">01</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Phân tích mục tiêu kinh doanh</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Xác định đối tượng khách hàng</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Tư vấn giải pháp phù hợp</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="md:flex items-center fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="md:w-1/2 md:pr-12 relative order-last md:order-first">
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-8 bg-[#00b2ff] rounded-full transform translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white"></div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-4 md:hidden">
                    <span className="text-[#00b2ff] font-bold">02</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Phác thảo layout tổng thể</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Thiết kế giao diện chi tiết</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Điều chỉnh theo phản hồi</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">02. Thiết Kế Giao Diện</h3>
                <p className="text-gray-600">
                  Đội ngũ thiết kế của chúng tôi sẽ tạo ra giao diện đẹp mắt, hiện
                  đại và phù hợp với thương hiệu của bạn, đảm bảo trải nghiệm người
                  dùng tốt nhất.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:flex items-center fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">03. Lập Trình & Phát Triển</h3>
                <p className="text-gray-600">
                  Chuyển thiết kế thành website hoàn chỉnh với đầy đủ tính năng, tối
                  ưu tốc độ và bảo mật, đảm bảo website hoạt động mượt mà trên mọi
                  thiết bị.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12 relative">
                <div className="hidden md:block absolute left-0 top-1/2 w-8 h-8 bg-[#00b2ff] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white"></div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-4 md:hidden">
                    <span className="text-[#00b2ff] font-bold">03</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Lập trình front-end & back-end</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Tối ưu tốc độ và hiệu suất</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Kiểm thử đa nền tảng</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="md:flex items-center fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="md:w-1/2 md:pr-12 relative order-last md:order-first">
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-8 bg-[#00b2ff] rounded-full transform translate-x-1/2 -translate-y-1/2 z-10 border-4 border-white"></div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mb-4 md:hidden">
                    <span className="text-[#00b2ff] font-bold">04</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Kiểm tra toàn diện</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Đào tạo sử dụng</span>
                    </li>
                    <li className="flex items-start">
                      <i className="ri-check-line text-[#00b2ff] mr-2 mt-1"></i>
                      <span>Bàn giao và triển khai</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-xl font-bold mb-2">04. Bàn Giao & Hỗ Trợ</h3>
                <p className="text-gray-600">
                  Bàn giao website hoàn thiện, hướng dẫn sử dụng và cung cấp dịch vụ
                  hỗ trợ kỹ thuật liên tục để đảm bảo website luôn hoạt động tốt
                  nhất.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection
