import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const currentTime = new Date().toLocaleString("vi-VN");

    emailjs
      .send(
        "service_1zqksrj", // Service ID
        "template_bz6whpe", // Template ID
        {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          time: currentTime,
        },
        "6OA2hhgJHP4zyeabZ" // Public Key
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          setFormData({
            fullname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        () => {
          setStatus("error");
          setLoading(false);
        }
      );
  };



  // Tự động ẩn thông báo sau 5 giây
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Form liên hệ */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h2>
            <p className="text-gray-600 mb-8">
              Hãy điền thông tin của bạn vào form bên dưới, chúng tôi sẽ liên hệ
              lại trong thời gian sớm nhất.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="0912 345 678"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Chủ đề
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary pr-8"
                  >
                    <option value="">Chọn chủ đề</option>
                    <option value="thiet-ke-website">Thiết kế website</option>
                    <option value="tu-van-dich-vu">Tư vấn dịch vụ</option>
                    <option value="bao-gia">Báo giá</option>
                    <option value="ho-tro-ky-thuat">Hỗ trợ kỹ thuật</option>
                    <option value="khac">Khác</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nội dung tin nhắn
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-[#4f46e5] rounded-xl text-white hover:bg-primary/90 transition whitespace-nowrap"
              >
                {loading ? "Đang gửi..." : "Gửi tin nhắn"}
              </button>
             {status === "success" && <p className="text-green-600 mt-3">✅ Tin nhắn đã được gửi thành công!</p>}
              {status === "error" && <p className="text-red-600 mt-3">❌ Gửi tin nhắn thất bại. Vui lòng thử lại.</p>}
            </form>
          </div>

          {/* Đội ngũ hỗ trợ */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Đội Ngũ Hỗ Trợ Khách Hàng
              </h3>
              <p className="text-gray-600 mb-8">
                Đội ngũ nhân viên chuyên nghiệp của chúng tôi luôn sẵn sàng hỗ
                trợ bạn với mọi thắc mắc và yêu cầu.
              </p>

              <div className="space-y-8">
                {/* Người 1 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20asian%20male%20lead%20developer%2C%20casual%20smart%20attire%2C%20confident%20pose%2C%20tech%20office%20background%2C%20professional%20headshot%2C%20high%20quality%20portrait&width=400&height=500&seq=5&orientation=portrait"
                      alt="Nguyễn Thành Công"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Nguyễn Thành Công
                    </h4>
                    <p className="text-gray-600 mb-1">
                      Trưởng phòng Chăm sóc khách hàng
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        <i className="ri-mail-line text-primary mr-1"></i>{" "}
                        cong.nguyen@example.com
                      </span>
                      <span className="text-sm text-gray-500">
                        <i className="ri-phone-line text-primary mr-1"></i> +84
                        32 825 7287
                      </span>
                    </div>
                  </div>
                </div>

                {/* Người 2 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%2520asian%2520man%2520in%2520business%2520casual%2520attire%2520smiling%2520at%2520camera%2520with%2520friendly%2520expression%2520on%2520white%2520background%2520high%2520quality%2520portrait&width=200&height=200&seq=2&orientation=squarish"
                      alt="Nguyễn Tuấn Anh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Nguyễn Tuấn Anh
                    </h4>
                    <p className="text-gray-600 mb-1">
                      Chuyên viên Tư vấn giải pháp
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        <i className="ri-mail-line text-primary mr-1"></i>{" "}
                        tuananh.nguyen@example.com
                      </span>
                      <span className="text-sm text-gray-500">
                        <i className="ri-phone-line text-primary mr-1"></i> +84
                        32 850 1599
                      </span>
                    </div>
                  </div>
                </div>

                {/* Người 3 */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="https://readdy.ai/api/search-image?query=professional%20asian%20male%20CEO%20in%20business%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20professional%20headshot%2C%20high%20quality%20portrait&width=400&height=500&seq=3&orientation=portrait"
                      alt="Nguyễn Văn Thành Long"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Nguyễn Văn Thành Long
                    </h4>
                    <p className="text-gray-600 mb-1">
                      Chuyên viên Hỗ trợ kỹ thuật
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">
                        <i className="ri-mail-line text-primary mr-1"></i>{" "}
                        long.nguyen@example.com
                      </span>
                      <span className="text-sm text-gray-500">
                        <i className="ri-phone-line text-primary mr-1"></i> +84
                        36 874 9734
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end đội ngũ hỗ trợ */}
        </div>
      </div>
    </section>
  );
}
