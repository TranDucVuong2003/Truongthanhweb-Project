import React, { useState } from "react";
import emailjs from "emailjs-com";

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);

  // Hàm xử lý nhập dữ liệu
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Hàm gửi form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_1zqksrj", // thay bằng service ID trong EmailJS
        "template_p9z12de", // thay bằng template ID trong EmailJS
        {
          user_name: formData.name,
          user_phone: formData.phone,
          time: new Date().toLocaleString(),
        },
        "6OA2hhgJHP4zyeabZ" // thay bằng public key (user ID)
      )
      .then(
        () => {
          alert("Gửi thông tin thành công!");
          setFormData({ name: "", phone: "" });
          setLoading(false);
        },
        (error) => {
          console.error("Lỗi gửi mail:", error.text);
          alert("Gửi thất bại, vui lòng thử lại!");
          setLoading(false);
        }
      );
  };

  return (
    <section id="quote" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=special%2520offer%2520promotion%2520banner%2520with%2520gift%2520boxes%2C%2520discount%2520tags%2C%2520and%2520celebration%2520elements%2C%2520professional%2520marketing%2520design%2520with%2520blue%2520and%2520gold%2520accent%2520colors%2C%2520clean%2520modern%2520style%2C%2520showing%2520value%2520of%252010%2520million%2520VND%2520gift%2520set&width=800&height=600&seq=promo1&orientation=landscape"
              alt="Bộ quà tặng trị giá 10.000.000đ"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right side - Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Đăng ký tư vấn ngay!
              </h2>
              <p className="text-gray-600">
                Chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp phù hợp
                nhất cho vấn đề của bạn.
              </p>
            </div>
            <form
              id="contact-form"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  TÊN CỦA BẠN<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập tên của bạn"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  SỐ ĐIỆN THOẠI<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập số điện thoại của bạn"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00B2FF] rounded-lg hover:bg-[#2563EB] text-white font-bold py-4 px-6 !rounded-button transition-colors whitespace-nowrap text-lg"
              >
                {loading ? "Đang gửi..." : "ĐĂNG KÝ"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
