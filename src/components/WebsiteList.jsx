import React, { useState } from "react";
import anhXeDap from "../assets/images/shop-ban-xe-dap.png";
import anhNoiThat from "../assets/images/shop-ban-do-noi-that.png";
import anhTienIchCongNghe from "../assets/images/shop-tien-ich-cong-nghe.png";
import anhDoGom from "../assets/images/shop-ban-do-gom.png";
import anhMyPham from "../assets/images/shop-ban-my-pham.png";
import anhWebTinTuc1 from "../assets/images/web-tin-tuc-1.png";
import anhBanThucAnThuCung from "../assets/images/shop-ban-thuc-an-thu-cung.png";
import anhBatDongSan from "../assets/images/web-bat-dong-san-1.png";
import anhQuanAo from "../assets/images/shop-ban-quan-ao-1.png";
import anhTra from "../assets/images/shop-ban-tra.png";
import anhTraiCay from "../assets/images/shop-ban-rau-qua.png";
import anhSpaDuongSinh from "../assets/images/web-spa-duong-sinh.png";
import TemplateDetailModal from "./TemplateDetailModal";

const categories = [
  { id: "", name: "Tất cả danh mục", checked: true },
  { id: 1, name: "Bán hàng" },
  { id: 2, name: "Tin tức" },
  { id: 3, name: "Doanh nghiệp" },
  { id: 4, name: "Bất động sản" },
  { id: 5, name: "Nội thất" },
  { id: 6, name: "Giáo dục" },
  { id: 7, name: "Khách sạn" },
  { id: 8, name: "Du lịch" },
  { id: 9, name: "Bệnh viện" },
  { id: 10, name: "Điện tử điện lạnh" },
  { id: 11, name: "Spa - Thẩm mỹ viện" },
  { id: 12, name: "Xây dựng" },
  { id: 13, name: "Y Tế" },
  { id: 14, name: "Mỹ phẩm" },
  { id: 15, name: "Thời trang" },
  { id: 16, name: "Nhà hàng" },
  { id: 17, name: "Thực phẩm" },
  { id: 18, name: "Điện thoại" },
  { id: 19, name: "Điện máy" },
  { id: 20, name: "Đồng hồ" },
  { id: 21, name: "Mẹ và bé" },
  { id: 22, name: "Trang sức" },
  { id: 23, name: "Sách vpp" },
  { id: 24, name: "Cà phê" },
  { id: 25, name: "Bán túi xách" },
  { id: 26, name: "Ảnh viện áo cưới" },
  { id: 27, name: "Bán đồ chơi" },
  { id: 28, name: "Bán hoa tươi" },
  { id: 29, name: "Dạy học trực tuyến" },
  { id: 30, name: "Kiến trúc đẹp" },
  { id: 31, name: "Công nghệ" },
  { id: 32, name: "In ấn" },
  { id: 33, name: "Giới thiệu" },
  { id: 34, name: "Studio" },
  { id: 35, name: "Dịch Vụ" },
];

const products = [
  {
    id: 358,
    name: "Shop Bán Xe Đạp",
    price: "6.100.000 đ",
    img: anhXeDap,
    link: "https://startersites.io/blocksy/e-bike/",
    segment: "Tiêu chuẩn",
  },
  {
    id: 359,
    name: "Shop Bán Đồ Nội Thất",
    price: "6.188.000 đ",
    img: anhNoiThat,
    link: "https://startersites.io/blocksy/furniture/",
    segment: "Cao cấp",
  },
  {
    id: 362,
    name: "Shop Tiện Ích Công Nghệ",
    price: "4.188.000 đ",
    img: anhTienIchCongNghe,
    link: "https://startersites.io/blocksy/gadgets/",
    segment: "Tiêu chuẩn",
  },
  {
    id: 364,
    name: "Shop Bán Đồ Gốm",
    price: "9.188.000 đ",
    img: anhDoGom,
    link: ""
  },
  {
    id: 365,
    name: "Shop Bán Mỹ Phẩm",
    price: "4.188.000 đ",
    img: anhMyPham,
    link: ""
  },
  {
    id: 366,
    name: "Web Tin Tức 1",
    price: "4.188.000 đ",
    img: anhWebTinTuc1,
    link: ""
  },
  {
    id: 367,
    name: "Shop Bán Thức Ăn Thú Cưng",
    price: "4.188.000 đ",
    img: anhBanThucAnThuCung,
    link: ""
  },
  {
    id: 368,
    name: "Web Bất Động Sản",
    price: "9.188.000 đ",
    img: anhBatDongSan,
    link: ""
  },
  {
    id: 369,
    name: "Shop Bán Quần Áo",
    price: "4.188.000 đ",
    img: anhQuanAo,
    link: ""
  },
  {
    id: 370,
    name: "Shop Bán Trà",
    price: "4.188.000 đ",
    img: anhTra,
    link: ""
  },
  {
    id: 371,
    name: "Shop Bán Trái Cây",
    price: "4.188.000 đ",
    img: anhTraiCay,
    link: ""
  },
  {
    id: 372,
    name: "Web Spa Dưỡng Sinh",
    price: "4.188.000 đ",
    img: anhSpaDuongSinh,
    link: ""
  },
];

export default function WebsiteList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleOpenModal = (id) => {
    const template = products.find((p) => p.id === id);
    setSelectedTemplate({
      ...template,
      image: template.img,
      // link: ,
      // Có thể bổ sung thêm description, features, tags nếu có
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/3 lg:w-1/4 pr-0 md:pr-6 mb-6 md:mb-0">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Danh mục website
            </h2>
            <ul className="space-y-2 mb-6">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`?category=${cat.id}`}
                    className={`category-item flex items-center py-2 px-3 rounded ${
                      cat.checked ? "active" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="category-checkbox mr-2"
                      name={`category_${cat.id}`}
                      value={cat.id}
                      defaultChecked={cat.checked}
                    />
                    <span>{cat.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Tính năng
            </h2>
            <div className="space-y-3 mb-6">
              {["Bán hàng", "Giới thiệu", "Landing page"].map((feature, i) => (
                <div className="flex items-center" key={i}>
                  <input
                    type="checkbox"
                    id={`feature-${i}`}
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <label
                    htmlFor={`feature-${i}`}
                    className="ml-2 text-gray-700"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Màu sắc
            </h2>
            <div className="grid grid-cols-4 gap-3 mb-6">
              {[
                { id: "red", color: "bg-red-500" },
                { id: "blue", color: "bg-blue-500" },
                { id: "green", color: "bg-green-500" },
                { id: "yellow", color: "bg-yellow-500" },
                { id: "purple", color: "bg-purple-500" },
                { id: "pink", color: "bg-pink-500" },
                { id: "black", color: "bg-gray-800" },
                { id: "white", color: "bg-white border border-gray-200" },
              ].map((c) => (
                <div className="color-option flex items-center justify-center" key={c.id}>
                  <input
                    type="checkbox"
                    id={`color-${c.id}`}
                    className={`appearance-none w-6 h-6 rounded-full cursor-pointer border-2 border-gray-200 checked:ring-2 checked:ring-primary checked:border-primary ${c.color}`}
                  />
                  <label htmlFor={`color-${c.id}`} className="sr-only">
                    {c.id}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 lg:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="mb-4 md:mb-0">
              <div className="relative">
                <form action="" method="get">
                  <input
                    type="text"
                    name="search"
                    placeholder="Tìm Kiếm..."
                    className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center">
                    <i className="ri-search-line"></i>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md"
                  data-id={product.id}
                >
                  <div className="scrollable-preview h-60 relative overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-auto object-top transition-transform duration-[8000ms] ease-linear hover:-translate-y-[calc(100%-15rem)]"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center text-yellow-400 mb-3">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-half-fill"></i>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-primary font-medium">
                        {product.price}
                      </span>
                      <button
                        className="px-3 py-1.5 bg-[#4f46e5] rounded-xl text-white !rounded-button hover:bg-primary/90 transition whitespace-nowrap"
                        onClick={() => handleOpenModal(product.id)}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <nav className="flex items-center space-x-1">
                <a
                  href="?page=1&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  <i className="ri-arrow-left-s-line"></i>
                </a>
                <a
                  href="?page=1&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full active"
                >
                  1
                </a>
                <a
                  href="?page=2&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  2
                </a>
                <a
                  href="?page=3&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  3
                </a>
                <a
                  href="?page=4&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  4
                </a>
                <a
                  href="?page=5&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  5
                </a>
                <span className="text-gray-400 px-1">...</span>
                <a
                  href="?page=12&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  12
                </a>
                <a
                  href="?page=2&category=&search="
                  className="pagination-item flex items-center justify-center w-10 h-10 rounded-full text-gray-600"
                >
                  <i className="ri-arrow-right-s-line"></i>
                </a>
              </nav>
            </div>
          </div>
          {/* End Products */}

          {/* Modal chi tiết template */}
          <TemplateDetailModal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            template={selectedTemplate}
          />
        </div>
      </div>
    </div>
  );
}
