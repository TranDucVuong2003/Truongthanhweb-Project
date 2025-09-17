import React from "react";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=modern%2520office%2520interior%2520with%2520large%2520windows%2520and%2520city%2520view%2C%2520minimalist%2520design%2C%2520clean%2520workspace%2520with%2520natural%2520light%2C%2520professional%2520environment%2C%2520high-end%2520corporate%2520setting%2C%2520blue%2520and%2520white%2520color%2520scheme%2C%2520architectural%2520photography&width=1920&height=800&seq=1&orientation=landscape')",
          }}
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        ></div>

        {/* lớp phủ màu tím */}
        <div className="absolute inset-0 bg-purple-700/60"></div>

        {/* lớp phủ gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn với mọi yêu cầu
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section (giữ nguyên) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Địa chỉ */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 text-[#4f5ae9] h-16 bg-[#e8e8f8] rounded-full flex items-center justify-center mb-4">
                <i className="ri-map-pin-line ri-xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Địa Chỉ Văn Phòng
              </h3>
              <p className="text-gray-600">
                Số 16 ngõ 42 Trung Hòa, Cầu Giấy, Hà Nội
              </p>
            </div>

            {/* Liên hệ */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 text-[#4f5ae9] bg-[#e8e8f8] h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <i className="ri-customer-service-2-line ri-xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Liên Hệ
              </h3>
              <p className="text-gray-600 mb-2">
                Email:{" "}
                <a href="mailto:info@truongthanhweb.vn" className="text-primary">
                  info@truongthanhweb.vn
                </a>
              </p>
              <p className="text-gray-600 mb-2">Hotline: 024.2212.1489</p>
              <p className="text-gray-600">Hỗ trợ kỹ thuật: 024.2212.1489</p>
            </div>

            {/* Giờ làm việc */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#e8e8f8] text-[#4f5ae9] rounded-full flex items-center justify-center mb-4">
                <i className="ri-time-line ri-xl text-primary"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Giờ Làm Việc
              </h3>
              <p className="text-gray-600 mb-2">
                Thứ Hai - Thứ Sáu: 8:30 - 17:30
              </p>

              <div className="mt-4 pt-4 border-t border-gray-200 w-full">
                <h4 className="text-lg font-medium text-gray-800 mb-3">
                  Kết nối với chúng tôi
                </h4>
                <div className="flex justify-center space-x-3">
                  <a
                    href="https://www.facebook.com/TruongThanhWeb/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition"
                  >
                    <i className="ri-youtube-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-400  flex items-center justify-center text-white hover:bg-blue-500 transition"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
