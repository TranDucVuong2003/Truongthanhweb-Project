import React from "react";
import banner from "../assets/images/banner.gif";

const Banner = () => {
  return (
<section id="home" className="relative min-h-screen flex items-center">
  {/* Background */}
  <div className="absolute inset-0 z-0">
    <img
      src={banner}
      alt="Banner"
      className="w-full h-screen object-cover"
    />
    {/* Lớp phủ tối toàn bộ */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60"></div>
    {/* Lớp mỏng dưới: xanh tím → trắng */}
    <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-blue-900/60 to-white"></div>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 py-20 relative z-10">
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight fade-in">
        Trường Thành Web <br /> Cung Cấp Giải Pháp Website <br /> Trọn Gói
        Chuyên Nghiệp
      </h1>
      <p
        className="text-lg md:text-xl text-white/90 mb-8 fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        Chúng tôi thiết kế website đẹp, tối ưu SEO và tương thích với mọi
        thiết bị. Hãy để chúng tôi giúp doanh nghiệp của bạn tỏa sáng trên
        không gian số.
      </p>
      <div
        className="flex flex-wrap gap-4 fade-in"
        style={{ animationDelay: "0.4s" }}
      >
        <a
          href="#quote"
          className="bg-[#4f46e5] hover:opacity-80 text-white font-medium py-3 px-8 rounded-2xl transition-colors whitespace-nowrap"
        >
          Nhận Báo Giá Miễn Phí
        </a>
        <a
          href="/mau-website"
          className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-2xl border border-white/30 transition-colors whitespace-nowrap"
        >
          Xem Mẫu Website
        </a>
      </div>
    </div>
  </div>
</section>

  );
};

export default Banner;
