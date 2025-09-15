import React from "react";

function Services() {
  const services = [
    {
      icon: "ri-code-s-slash-line",
      title: "Thiết kế website",
      desc: "Thiết kế website chuyên nghiệp, tương thích với mọi thiết bị, tối ưu trải nghiệm người dùng và tốc độ tải trang.",
      features: [
        "Giao diện hiện đại, responsive",
        "Tối ưu tốc độ tải trang",
        "Tương thích đa trình duyệt",
      ],
      link: "/dich-vu/thiet-ke-website",
    },
    {
      icon: "ri-smartphone-line",
      title: "Phát triển ứng dụng",
      desc: "Phát triển ứng dụng di động và web app với công nghệ hiện đại, đáp ứng nhu cầu kinh doanh của bạn.",
      features: [
        "Ứng dụng iOS & Android",
        "Progressive Web Apps",
        "Tích hợp API & dịch vụ",
      ],
      link: "/dich-vu/phat-trien-ung-dung",
    },
    {
      icon: "ri-search-line",
      title: "Tối ưu SEO",
      desc: "Tối ưu hóa website của bạn trên các công cụ tìm kiếm, tăng thứ hạng và lượng truy cập tự nhiên.",
      features: [
        "Phân tích từ khóa chuyên sâu",
        "Tối ưu cấu trúc website",
        "Báo cáo hiệu quả hàng tháng",
      ],
      link: "/dich-vu/seo-website",
    },
    {
      icon: "ri-bar-chart-line",
      title: "Digital Marketing",
      desc: "Xây dựng chiến lược marketing số toàn diện, tăng nhận diện thương hiệu và chuyển đổi khách hàng.",
      features: [
        "Quảng cáo Google & Facebook",
        "Email Marketing",
        "Content Marketing",
      ],
      link: "/dich-vu/digital-marketing",
    },
    {
      icon: "ri-file-text-line",
      title: "Quản trị nội dung",
      desc: "Cung cấp dịch vụ quản trị và cập nhật nội dung website chuyên nghiệp, thu hút khách hàng tiềm năng.",
      features: [
        "Sản xuất nội dung chất lượng",
        "Biên tập và tối ưu SEO",
        "Quản lý mạng xã hội",
      ],
      link: "/dich-vu/quan-tri-noi-dung",
    },
    {
      icon: "ri-settings-line",
      title: "Bảo trì website",
      desc: "Dịch vụ bảo trì, nâng cấp và hỗ trợ kỹ thuật website 24/7, đảm bảo website luôn hoạt động ổn định.",
      features: [
        "Backup dữ liệu định kỳ",
        "Cập nhật bảo mật",
        "Hỗ trợ kỹ thuật 24/7",
      ],
      link: "/dich-vu/bao-tri-website",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=professional%2520digital%2520services%2520background%2520with%2520blue%2520gradient%2520and%2520abstract%2520technology%2520elements%252C%2520clean%2520modern%2520design%2520with%2520space%2520for%2520text%2520on%2520the%2520left%2520side%252C%2520high%2520quality%2520render&width=1920&height=600&seq=1&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-5">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Chúng tôi cung cấp các giải pháp số toàn diện giúp doanh nghiệp của
              bạn phát triển trong thời đại công nghệ 4.0.
            </p>
            <button
              className="px-6 py-3 bg-white rounded-lg hover:bg-gray-100 transition whitespace-nowrap flex items-center"
              style={{ color: "#4f87ef" }}
            >
              <i
                className="ri-customer-service-2-line mr-2"
                style={{ color: "#4f87ef" }}
              ></i>
              Tư vấn miễn phí
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Giải pháp số toàn diện
            </h2>
            <p className="text-gray-600">
              Chúng tôi cung cấp đầy đủ các dịch vụ từ thiết kế, phát triển đến
              vận hành và tối ưu hóa website, ứng dụng của bạn.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white rounded-xl shadow-sm p-6 hover:-translate-y-2 hover:shadow-lg transition"
              >
                <div className="w-16 h-16 bg-[#edecfc] rounded-lg flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-[#4f46e5] ri-2x`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="ri-check-line text-primary mt-1 mr-2"></i>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Xem chi tiết
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
