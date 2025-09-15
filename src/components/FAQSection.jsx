import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri';

const faqs = [
  {
    question: "Thời gian thiết kế một website mất bao lâu?",
    answer:
      "Thời gian thiết kế website phụ thuộc vào quy mô và độ phức tạp của dự án. Thông thường, một website cơ bản sẽ mất khoảng 7-10 ngày làm việc, website thương mại điện tử hoặc website phức tạp hơn có thể mất từ 15-30 ngày. Chúng tôi luôn cố gắng đảm bảo tiến độ và chất lượng cho mọi dự án.",
  },
  {
    question: "Chi phí thiết kế website bao gồm những gì?",
    answer:
      "Chi phí thiết kế website bao gồm: thiết kế giao diện, lập trình chức năng, tối ưu SEO, đăng ký tên miền và hosting (tùy gói), hướng dẫn sử dụng và hỗ trợ kỹ thuật. Mỗi gói dịch vụ sẽ có các tính năng khác nhau.",
  },
  {
    question: "Website có tương thích với điện thoại di động không?",
    answer:
      "Tất cả website do Trường Thành Web thiết kế đều được tối ưu để hiển thị tốt trên mọi thiết bị, từ máy tính để bàn đến điện thoại di động và máy tính bảng.",
  },
  {
    question: "Tôi có thể tự cập nhật nội dung website sau khi hoàn thành không?",
    answer:
      "Có, tất cả website chúng tôi thiết kế đều có hệ thống quản trị nội dung (CMS) thân thiện với người dùng, giúp bạn dễ dàng cập nhật nội dung mà không cần kiến thức lập trình.",
  },
  {
    question: "Sau khi hoàn thành, tôi có được hỗ trợ kỹ thuật không?",
    answer:
      "Có, chúng tôi cung cấp dịch vụ hỗ trợ kỹ thuật sau khi bàn giao website. Thời gian hỗ trợ phụ thuộc vào gói dịch vụ bạn lựa chọn, từ 30 ngày đến 12 tháng.",
  },
];

function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
   return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Câu Hỏi Thường Gặp</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những câu hỏi khách hàng thường hỏi về dịch vụ thiết kế website của
            chúng tôi. Nếu bạn không tìm thấy câu trả lời, hãy liên hệ với chúng
            tôi.
          </p>
        </div>
        <div className="max-w-5xl mx-auto fade-in">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-toggle w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-medium">{faq.question}</span>
                  <RiArrowDownSLine
                    className={`ri-lg text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="faq-content p-4 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection
