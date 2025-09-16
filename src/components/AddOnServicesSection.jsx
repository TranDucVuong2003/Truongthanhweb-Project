import React from "react";
import {
  RiImageLine,
  RiSlideshowLine,
  RiPenNibLine,
  RiArticleLine,
  RiShoppingCartLine,
  RiCustomerServiceLine,
  RiMailSendLine,
  RiTranslate2,
} from "react-icons/ri";

const AddOnServices = [
  {
    category: "Thiết Kế & Sáng Tạo",
    items: [
      { icon: <RiImageLine />, label: "Thiết kế banner quảng cáo", price: "500.000đ", bg: "bg-blue-100", text: "text-blue-600" },
      { icon: <RiSlideshowLine />, label: "Thiết kế slider trang chủ", price: "800.000đ", bg: "bg-blue-100", text: "text-blue-600" },
      { icon: <RiPenNibLine />, label: "Thiết kế logo", price: "2.000.000đ", bg: "bg-blue-100", text: "text-blue-600" },
      { icon: <RiArticleLine />, label: "Viết bài chuẩn SEO (500 từ)", price: "100.000đ", bg: "bg-blue-100", text: "text-blue-600" },
    ],
  },
  {
    category: "Tính Năng Nâng Cao",
    items: [
      { icon: <RiShoppingCartLine />, label: "Tích hợp cổng thanh toán", price: "1.000.000đ", bg: "bg-green-100", text: "text-green-600" },
      { icon: <RiCustomerServiceLine />, label: "Tích hợp Live Chat", price: "2.000.000đ", bg: "bg-green-100", text: "text-green-600" },
      { icon: <RiMailSendLine />, label: "Tích hợp Email Marketing", price: "500.000đ", bg: "bg-green-100", text: "text-green-600" },
      { icon: <RiTranslate2 />, label: "Đa ngôn ngữ (mỗi ngôn ngữ)", price: "500.000đ", bg: "bg-green-100", text: "text-green-600" },
    ],
  },
];

const AddOnServicesSection = () => {
  return (
    <section className="section-addon py-6 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Dịch Vụ Bổ Sung (Add-ons)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AddOnServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.category}</h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className={`flex justify-between items-center ${
                      i !== service.items.length - 1 ? "border-b border-gray-100 pb-2" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 flex items-center justify-center ${item.bg} ${item.text} rounded-full mr-3`}
                      >
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <span className="font-medium">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnServicesSection;