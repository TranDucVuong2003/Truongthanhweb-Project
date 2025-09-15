import React from "react";

const testimonials = [
  {
    name: "Nguyễn Thanh Tùng",
    role: "Giám đốc Công ty TNHH Xây dựng Tân Phát",
    initials: "NT",
    stars: 5,
    review:
      "Trường Thành Web đã thiết kế website cho công ty chúng tôi vượt xa mong đợi. Giao diện đẹp mắt, tốc độ nhanh và đặc biệt là rất dễ quản trị. Nhờ website mới, doanh số của chúng tôi đã tăng hơn 30% chỉ sau 3 tháng.",
  },
  {
    name: "Phạm Lan Anh",
    role: "Chủ shop thời trang LanAnh Fashion",
    initials: "PL",
    stars: 5,
    review:
      "Tôi đã tìm kiếm một đơn vị thiết kế website chuyên nghiệp cho shop online của mình và rất may mắn khi biết đến Trường Thành Web. Họ không chỉ thiết kế một website đẹp mắt mà còn tư vấn cho tôi nhiều giải pháp marketing hiệu quả.",
  },
  {
    name: "Trần Hoàng Minh",
    role: "Quản lý Nhà hàng Hương Việt",
    initials: "TH",
    stars: 4.5,
    review:
      "Đội ngũ Trường Thành Web rất chuyên nghiệp và tận tâm. Họ lắng nghe mọi yêu cầu của chúng tôi và đưa ra những giải pháp phù hợp nhất. Website nhà hàng của chúng tôi giờ đây đã có hệ thống đặt bàn online hiệu quả, giúp tăng lượng khách hàng đáng kể.",
  },
  {
    name: "Lê Thị Hương",
    role: "Giám đốc Marketing Công ty CP Mỹ phẩm Việt",
    initials: "LT",
    stars: 5,
    review:
      "Tôi đã hợp tác với nhiều công ty thiết kế website nhưng Trường Thành Web là đơn vị làm tôi hài lòng nhất. Họ không chỉ giao website đúng hẹn mà còn hỗ trợ rất nhiệt tình sau khi bàn giao. Tôi sẽ tiếp tục sử dụng dịch vụ của họ trong tương lai.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sự hài lòng của khách hàng là thước đo thành công của chúng tôi. Hãy
            xem những đánh giá từ khách hàng đã sử dụng dịch vụ của Trường Thành
            Web.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative fade-in">
          <div className="testimonial-carousel flex overflow-x-auto pb-8 -mx-4 px-4 scroll-smooth hide-scrollbar">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="testimonial-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              >
                <div className="bg-white rounded-lg p-6 border border-gray-100 custom-shadow h-full">
                  {/* Stars */}
                  <div className="flex items-center mb-4 text-yellow-400">
                    {Array.from({ length: Math.floor(item.stars) }).map(
                      (_, i) => (
                        <i key={i} className="ri-star-fill"></i>
                      )
                    )}
                    {item.stars % 1 !== 0 && (
                      <i className="ri-star-half-fill"></i>
                    )}
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 mb-6 italic">"{item.review}"</p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">
                        {item.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
