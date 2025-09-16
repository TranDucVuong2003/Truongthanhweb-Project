import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4 gradient-text"
            style={{ lineHeight: "3.5rem" }}
          >
            500+ mẫu website chuyên ngành
          </h1>
          <p className="text-gray-600 mb-6">
            Mẫu website chuyên ngành dành cho tất cả các lĩnh vực kinh doanh. <br />
            Đã tối ưu SEO và thân thiện với người dùng di động.
          </p>
          <p className="text-gray-600 mb-6">
            Hơn 1.000 khách hàng đang sử dụng website và tăng doanh thu.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border  rounded-2xl transition whitespace-nowrap border-[#4f46e5] text-[#4f46e5] hover:bg-[#4f46e5] hover:text-white">
              Tư vấn miễn phí
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://readdy.ai/api/search-image?query=professional%20website%20design%20mockup%20with%20a%20female%20consultant%20in%20blue%20shirt%2C%20clean%20interface%2C%20website%20templates%2C%20modern%20design%2C%20high%20quality%20render&width=600&height=400&seq=1&orientation=landscape"
            alt="Mẫu website chuyên nghiệp"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
       