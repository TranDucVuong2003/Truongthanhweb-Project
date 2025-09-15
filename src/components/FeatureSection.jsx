import React from 'react'

function FeatureSection() {
 return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tại Sao Chọn{" "}
            <span className="bg-gradient-to-r from-[#00b2ff] via-[#38c6b0] to-[#ffe600] bg-clip-text text-transparent">
              Trường Thành Web
            </span>
            ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp giải pháp website toàn diện, từ thiết kế đến vận
            hành, giúp doanh nghiệp của bạn phát triển mạnh mẽ trên không gian số.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg custom-shadow fade-in shadow-md">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="ri-palette-line ri-2x text-primary text-[#00b2ff]"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Thiết Kế Chuyên Nghiệp</h3>
            <p className="text-gray-600">
              Giao diện đẹp mắt, hiện đại và tương thích với mọi thiết bị từ máy
              tính đến điện thoại di động.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="bg-white p-6 rounded-lg custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="text-[#00b2ff] ri-search-line ri-2x text-primary "></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Tối Ưu Hóa SEO</h3>
            <p className="text-gray-600">
              Website được tối ưu chuẩn SEO giúp tăng thứ hạng trên Google, tiếp
              cận nhiều khách hàng tiềm năng hơn.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="bg-white p-6 rounded-lg custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="text-[#00b2ff] ri-rocket-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Tốc Độ Vượt Trội</h3>
            <p className="text-gray-600">
              Website tải nhanh, mang lại trải nghiệm người dùng tốt và đạt điểm
              PageSpeed cao trên Google.
            </p>
          </div>

          {/* Feature 4 */}
          <div
            className="bg-white p-6 rounded-lg custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="text-[#00b2ff] ri-shield-check-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Bảo Mật Tuyệt Đối</h3>
            <p className="text-gray-600">
              Hệ thống bảo mật chặt chẽ, bảo vệ website và dữ liệu khách hàng khỏi
              các mối đe dọa trực tuyến.
            </p>
          </div>

          {/* Feature 5 */}
          <div
            className="bg-white p-6 rounded-lg custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="text-[#00b2ff] ri-customer-service-2-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Hỗ Trợ 24/7</h3>
            <p className="text-gray-600">
              Đội ngũ kỹ thuật chuyên nghiệp sẵn sàng hỗ trợ bạn mọi lúc, giải
              quyết mọi vấn đề nhanh chóng.
            </p>
          </div>

          {/* Feature 6 */}
          <div
            className="bg-white p-6 rounded-lg custom-shadow fade-in shadow-md"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-6">
              <i className="text-[#00b2ff] ri-tools-line ri-2x text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Dễ Dàng Quản Trị</h3>
            <p className="text-gray-600">
              Hệ thống quản trị đơn giản, thân thiện với người dùng, giúp bạn dễ
              dàng cập nhật nội dung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection
