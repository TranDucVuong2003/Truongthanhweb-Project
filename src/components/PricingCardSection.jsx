import React, { useState } from "react";
// import FeatureComparison from "./FeatureComparison";
import FeaturesOverview from "./FeaturesOverview";

function PricingCardSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("basic");

  const handleOpenModal = (planValue) => {
    setSelectedPlan(planValue);
    setModalOpen(true);
  };

  const scrollToComparison = () => {
    const section = document.getElementById("comparison-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    "Gói Cơ Bản",
    "Gói Tiêu Chuẩn",
    "Gói Cao Cấp",
    "Gói Premium BIZ",
  ];

  const features = [
    {
      category: "Tính Năng Cơ Bản",
      items: [
        {
          name: "Phí khởi tạo dịch vụ",
          tooltip: "Phí khởi tạo hệ thống để sẵn sàng thiết kế website của bạn",
          values: ["199,000 đ", "199,000 đ", "199,000 đ", "Miễn Phí"],
        },
        {
          name: "Số trang thiết kế",
          tooltip: "Số lượng trang được thiết kế riêng",
          values: ["5", "10", "15", "Theo thỏa thuận"],
        },
        {
          name: "Thời gian bàn giao",
          tooltip: "Thời gian hoàn thành dự án",
          values: ["3-5 ngày", "3-5 ngày", "7-10 ngày", "Theo thỏa thuận"],
        },
        {
          name: "Dung lượng lưu trữ",
          tooltip: "Dung lượng hosting được cung cấp",
          values: ["5GB", "10GB", "20GB", "50GB"],
        },
        {
          name: "Băng thông",
          tooltip: "Lưu lượng truy cập hàng tháng",
          values: [
            "Không giới hạn",
            "Không giới hạn",
            "Không giới hạn",
            "Không giới hạn",
          ],
        },
        {
          name: "Tên miền",
          tooltip: "Miễn phí tên miền quốc tế (.com, .net)",
          values: ["❌", "✅", "✅", "✅"],
        },
        {
          name: "Hoàn thiện nội dung",
          tooltip: "Dịch vụ đi kèm với thiết kế website",
          values: ["Miễn phí", "Miễn phí", "Miễn phí", "Miễn Phí"],
        },
      ],
    },
    {
      category: "Tính Năng Thiết Kế",
      items: [
        {
          name: "Giao diện Responsive",
          tooltip: "Tương thích với mọi thiết bị",
          values: ["✅", "✅", "✅", "✅"],
        },
        {
          name: "Thiết kế độc quyền",
          tooltip: "Giao diện được thiết kế riêng",
          values: ["❌", "❌", "✅", "✅"],
        },
        {
          name: "Tối ưu trải nghiệm người dùng (UX)",
          tooltip: "Thiết kế tập trung UX",
          values: ["❌", "✅", "✅", "✅"],
        },
      ],
    },
    {
      category: "Tính Năng Kỹ Thuật",
      items: [
        {
          name: "Tối ưu SEO",
          tooltip: "Cấu trúc thân thiện với công cụ tìm kiếm",
          values: ["Cơ bản", "Nâng cao", "Chuyên sâu", "Toàn diện"],
        },
        {
          name: "Tích hợp thanh toán",
          tooltip: "Kết nối với các cổng thanh toán",
          values: ["❌", "✅", "✅", "✅"],
        },
        {
          name: "Tích hợp mạng xã hội",
          tooltip: "Kết nối các nền tảng mạng xã hội",
          values: ["✅", "✅", "✅", "✅"],
        },
        {
          name: "Tích hợp Google Analytics",
          tooltip: "Theo dõi và phân tích lưu lượng truy cập",
          values: ["✅", "✅", "✅", "✅"],
        },
      ],
    },
    {
      category: "Tính Năng Bảo Mật",
      items: [
        {
          name: "SSL Certificate",
          tooltip: "Chứng chỉ bảo mật HTTPS",
          values: ["❌", "✅", "✅", "✅"],
        },
        {
          name: "Bảo mật nâng cao",
          tooltip: "Các biện pháp bảo mật chuyên sâu",
          values: ["❌", "❌", "✅", "✅"],
        },
        {
          name: "Sao lưu dữ liệu",
          tooltip: "Tần suất sao lưu dữ liệu",
          values: ["Hàng tuần", "Hàng tuần", "Hàng ngày", "Hàng ngày"],
        },
      ],
    },
    {
      category: "Add-ons & Plugins",
      items: [
        {
          name: "Form liên hệ nâng cao",
          tooltip: "Form liên hệ với nhiều tùy chỉnh",
          values: ["❌", "✅", "✅", "✅"],
        },
        {
          name: "Chatbot hỗ trợ",
          tooltip: "Tích hợp chatbot tự động hỗ trợ khách hàng",
          values: ["❌", "❌", "✅", "✅"],
        },
        {
          name: "Tích hợp CRM",
          tooltip: "Kết nối với hệ thống quản lý khách hàng",
          values: ["❌", "❌", "✅", "✅"],
        },
      ],
    },
  ];

  const Tooltip = ({ text }) => (
    <span className="relative group inline-flex items-center gap-2">
      <span className="w-4 h-4 bg-gray-400 text-white text-xs rounded-full flex items-center justify-center cursor-pointer">
        ?
      </span>
      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block p-2 text-sm bg-gray-800 text-white rounded shadow-lg w-48 text-center z-10">
        {text}
      </span>
    </span>
  );

  const StatusIcon = ({ value }) => {
    if (value === "✅") {
      return (
        <svg
          className="w-5 h-5 text-green-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      );
    }
    if (value === "❌") {
      return (
        <svg
          className="w-5 h-5 text-red-500 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      );
    }
    return <span>{value}</span>;
  };

  const planOptions = [
    { value: "basic", label: "Gói Cơ Bản" },
    { value: "standard", label: "Gói Tiêu Chuẩn" },
    { value: "premium", label: "Gói Cao Cấp" },
    { value: "biz", label: "Gói Premium BIZ" },
  ];

  const planButtonMap = [
    {
      label: "Chọn Gói Cơ Bản",
      value: "basic",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      label: "Chọn Gói Tiêu Chuẩn",
      value: "standard",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "Chọn Gói Cao Cấp",
      value: "premium",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      label: "Liên Hệ Tư Vấn",
      value: "biz",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  // Modal component
  function RegisterModal({ open, onClose, defaultPlan }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [plan, setPlan] = useState(defaultPlan);

    React.useEffect(() => {
      if (open) setPlan(defaultPlan);
    }, [open, defaultPlan]);

    const submitForm = (e) => {
      e.preventDefault();
      // ...handle submit logic here (e.g., send to API)...
      onClose();
    };

    if (!open) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 popup-overlay">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm popup-content relative">
          <button
            className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-700 close-btn"
            onClick={onClose}
            aria-label="Đóng"
          >
            ×
          </button>
          <h2 className="text-xl font-bold mb-4">Đăng Ký Gói Dịch Vụ</h2>
          <form onSubmit={submitForm} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Họ và tên"
              required
              className="border rounded px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
            />
            <input
              type="tel"
              placeholder="Số điện thoại"
              required
              className="border rounded px-3 py-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
            />
            <select
              id="package"
              required
              className="border rounded px-3 py-2"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              {planOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            >
              Gửi Yêu Cầu
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Section: Tiêu đề & mô tả tổng quan */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Bảng Giá Dịch Vụ Thiết Kế Website
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lựa chọn gói dịch vụ phù hợp với nhu cầu của bạn. Tất cả các gói đều được hỗ trợ bảo hành trọn đời và tối ưu SEO.
          </p>
        </div>
        {/* Section: Pricing Cards */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Basic Plan */}
            <div className="pricing-card bg-white rounded shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-blue-50 p-6 text-center border-b">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                  <i className="ri-layout-2-line ri-2x"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Gói Cơ Bản</h3>
                <div className="mt-4 text-3xl font-bold text-gray-900">
                  3.990.000đ
                </div>
                <p className="text-sm text-gray-500 mt-2">Thanh toán một lần</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Giao diện chuẩn Responsive",
                    "Tối ưu SEO cơ bản",
                    "Bảo hành trọn đời",
                    "Miễn phí hosting 1 năm",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-center font-bold">
                    <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>Số lượng trang con: 5</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToComparison}
                  className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl whitespace-nowrap"
                >
                  So Sánh Tính Năng
                </button>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="pricing-card bg-white rounded shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-green-50 p-6 text-center border-b">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mx-auto mb-4">
                  <i className="ri-layout-4-line ri-2x"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Gói Tiêu Chuẩn
                </h3>
                <div className="mt-4 text-3xl font-bold text-gray-900">
                  5.990.000đ
                </div>
                <p className="text-sm text-gray-500 mt-2">Thanh toán một lần</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Tất cả tính năng Gói Cơ Bản",
                    "Tối ưu SEO nâng cao",
                    "Tặng tên miền 12 tháng",
                    "Tích hợp thanh toán online",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-center font-bold">
                    <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>Số lượng trang con: 10</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToComparison}
                  className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded whitespace-nowrap"
                >
                  So Sánh Tính Năng
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card bg-white rounded shadow-lg overflow-hidden border border-primary relative">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 uppercase">
                Phổ biến
              </div>
              <div className="bg-indigo-50 p-6 text-center border-b">
                <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full mx-auto mb-4">
                  <i className="ri-layout-masonry-line ri-2x"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Gói Cao Cấp</h3>
                <div className="mt-4 text-3xl font-bold text-gray-900">
                  8.990.000đ
                </div>
                <p className="text-sm text-gray-500 mt-2">Thanh toán một lần</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Tất cả tính năng Gói Tiêu Chuẩn",
                    "Thiết kế giao diện cao cấp",
                    "Tích hợp CRM & Marketing",
                    "Sáng tạo nội dung",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-center font-bold">
                    <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>Số lượng trang con: 15</span>
                  </li>
                </ul>
                <button
                  onClick={scrollToComparison}
                  className="w-full mt-6 bg-primary hover:bg-indigo-700 bg-[#4f46e5] text-white py-2 px-4 rounded whitespace-nowrap"
                >
                  So Sánh Tính Năng
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="pricing-card bg-white rounded shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-purple-50 p-6 text-center border-b">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mx-auto mb-4">
                  <i className="ri-building-line ri-2x"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Gói Premium BIZ
                </h3>
                <div className="mt-4 text-3xl font-bold text-gray-900">
                  Liên Hệ
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Giải pháp tùy chỉnh
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Tất cả tính năng Gói Cao Cấp",
                    "Tùy chỉnh theo yêu cầu",
                    "Hỗ trợ 24/7 ưu tiên",
                    "Tư vấn chiến lược kinh doanh",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-center font-bold">
                    <div className="w-5 h-5 flex items-center justify-center text-green-500 mr-2">
                      <i className="ri-check-line"></i>
                    </div>
                    <span>Số lượng trang: Theo Yêu Cầu</span>
                  </li>
                </ul>
                <button
                  onClick={() => handleOpenModal()}
                  className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded whitespace-nowrap"
                >
                  Liên Hệ Tư Vấn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Section: Tổng quan tính năng */}
      <FeaturesOverview />
      {/* Section: Bảng So Sánh Chi Tiết */}
      <section id="comparison-section" className="py-8 px-4">
        <RegisterModal open={modalOpen} onClose={() => setModalOpen(false)} defaultPlan={selectedPlan} />
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">So Sánh Chi Tiết Các Gói Dịch Vụ</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse font-sans">
              <thead>
                <tr className="text-sm font-semibold text-gray-700">
                  <th className="p-4 text-left bg-gray-100 border-b-2 border-gray-300 w-1/3">Tính Năng</th>
                  {plans.map((plan) => (
                    <th key={plan} className="p-4 text-center bg-blue-100 border-b-2 border-gray-300">{plan}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-gray-50">
                      <td colSpan={plans.length + 1} className="p-3 font-bold text-gray-800">{category.category}</td>
                    </tr>
                    {category.items.map((item) => (
                      <tr key={item.name} className="hover:bg-gray-50">
                        <td className="p-3 border-b border-gray-200 flex items-center gap-2">
                          {item.name}
                          <Tooltip text={item.tooltip} />
                        </td>
                        {item.values.map((val, i) => (
                          <td key={i} className="p-3 text-center border-b border-gray-200 font-semibold">
                            <StatusIcon value={val} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
                <tr>
                  <td className="p-4 border-t-2 border-gray-300"></td>
                  {planButtonMap.map((btn, idx) => (
                    <td key={btn.value} className="p-4 text-center border-t-2 border-gray-300">
                      <button
                        className={`${btn.color} text-white py-2 px-6 rounded-lg transition duration-300`}
                        onClick={() => handleOpenModal(btn.value)}
                        type="button"
                      >
                        {btn.label}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default PricingCardSection;
