import React from "react";
import { Link, useNavigate } from "react-router-dom";

function TemplateDetailModal({ isOpen, onClose, template }) {
     const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="absolute inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl flex flex-col max-w-6xl mx-auto animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-2xl font-semibold text-gray-800">
            Chi tiết mẫu website
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <i className="ri-close-line text-xl"></i>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Left */}
            <div className="space-y-6">
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={template?.image || ""}
                  alt={template?.name || "Website template"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between">
                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-yellow-400">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <span className="text-gray-600">(4.5 / 5 đánh giá)</span>
                </div>

                <span className="text-xl font-semibold text-primary">
                  {template?.price || "Liên hệ"}
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {template?.name || "Tên mẫu website"}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {template?.description ||
                    "Mẫu website chuyên nghiệp, được thiết kế tỉ mỉ và tối ưu hóa cho trải nghiệm người dùng tốt nhất. Giao diện hiện đại, tương thích với mọi thiết bị và tốc độ tải trang nhanh."}
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-3">
                  Tính năng nổi bật:
                </h5>
                <ul className="space-y-3">
                  {template?.features?.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <i className="ri-check-line text-primary mt-1 mr-3"></i>
                      <span>{feature}</span>
                    </li>
                  )) || (
                    <>
                      <li className="flex items-start">
                        <i className="ri-check-line text-primary mt-1 mr-3"></i>
                        <span>Giao diện responsive</span>
                      </li>
                      <li className="flex items-start">
                        <i className="ri-check-line text-primary mt-1 mr-3"></i>
                        <span>Tối ưu SEO</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-3">
                  Phù hợp với:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {template?.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  )) || (
                    <>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        Doanh nghiệp vừa và nhỏ
                      </span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                        Startup
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t bg-gray-50 rounded-b-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
            onClick={() => navigate(`/mau-website/${template?.id}`)}
            //   href={template?.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 rounded-xl py-3 bg-primary text-white bg-[#4f46e5] !rounded-button hover:bg-primary/90 transition whitespace-nowrap"
            >
              Xem Thực Tế
            </button>
            <a
              href="../lien-he/index.php"

              className="px-6 rounded-xl py-3 border border-[#4f46e5] hover:bg-[#4f46e5] text-[#4f46e5]  !rounded-button hover:bg-primary hover:text-white transition whitespace-nowrap"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateDetailModal;
