import React from "react";
import { RiWindowLine, RiToolsLine, RiShieldKeyholeLine, RiCustomerServiceLine } from "react-icons/ri";

const features = [
  {
    icon: <RiWindowLine className="text-xl" />,
    title: "Mẫu website chuẩn SEO",
    description: "Tương thích nhiều thiết bị, tối ưu trải nghiệm người dùng",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    icon: <RiToolsLine className="text-xl" />,
    title: "Hoàn thiện nội dung website",
    description: "Từ A tới Z, đảm bảo website hoạt động hiệu quả",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    icon: <RiShieldKeyholeLine className="text-xl" />,
    title: "Bảo mật website",
    description: "100% phần mềm bản quyền, bảo vệ dữ liệu, tránh mọi rủi ro",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    icon: <RiCustomerServiceLine className="text-xl" />,
    title: "Hỗ trợ kỹ thuật 24/7",
    description: "Giám sát và hỗ trợ website liên tục, bất cứ khi nào bạn cần",
    bgColor: "bg-orange-100",
    textColor: "text-orange-600",
  },
];

const FeaturesOverview = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Tất cả đã bao gồm trong gói
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Các tính năng mà bạn không thể bỏ qua khi sử dụng dịch vụ website
          chuyên nghiệp tại <br />
          <span className="text-[20px] font-bold">Trường Thành Web</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center ${feature.bgColor} ${feature.textColor} rounded-lg mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
