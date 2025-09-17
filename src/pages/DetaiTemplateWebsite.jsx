import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/images/logo.webp";

// Import ảnh
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

export default function DetailTemplateWebsite() {
  const { id } = useParams(); // lấy id từ URL
  const [currentDevice, setCurrentDevice] = useState("desktop"); // state cho device

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
      link: "",
      segment: "Cao cấp",
    },
    {
      id: 365,
      name: "Shop Bán Mỹ Phẩm",
      price: "4.188.000 đ",
      img: anhMyPham,
      link: "",
      segment: "Tiêu chuẩn",
    },
    {
      id: 366,
      name: "Web Tin Tức 1",
      price: "4.188.000 đ",
      img: anhWebTinTuc1,
      link: "",
      segment: "Tiêu chuẩn",
    },
    {
      id: 367,
      name: "Shop Bán Thức Ăn Thú Cưng",
      price: "4.188.000 đ",
      img: anhBanThucAnThuCung,
      link: "",
      segment: "Tiêu chuẩn",
    },
    {
      id: 368,
      name: "Web Bất Động Sản",
      price: "9.188.000 đ",
      img: anhBatDongSan,
      link: "",
      segment: "Cao cấp",
    },
    {
      id: 369,
      name: "Shop Bán Quần Áo",
      price: "4.188.000 đ",
      img: anhQuanAo,
      link: "",
      segment: "Tiêu chuẩn",
    },
    {
      id: 370,
      name: "Shop Bán Trà",
      price: "4.188.000 đ",
      img: anhTra,
      link: "",
      segment: "Tiêu chuẩn",
    },
    {
      id: 371,
      name: "Shop Bán Trái Cây",
      price: "4.188.000 đ",
      img: anhTraiCay,
      link: "",
      segment: "Tiêu chuẩn",
    },
    {
      id: 372,
      name: "Web Spa Dưỡng Sinh",
      price: "4.188.000 đ",
      img: anhSpaDuongSinh,
      link: "",
      segment: "Tiêu chuẩn",
    },
  ];

  // tìm product theo id URL
  const product = products.find((p) => p.id === parseInt(id));

  // Hàm detect device
  const detectDevice = () => {
    const width = window.innerWidth;
    if (width <= 767) return "phone";
    if (width >= 768 && width <= 1024) return "tablet";
    return "desktop";
  };

  // Hàm set kích thước iframe
  const setIframeSize = (size) => {
    const iframe = document.getElementById("preview-frame");
    if (!iframe) return;
    if (size === "phone") {
      iframe.style.width = "375px";
      iframe.style.height = "667px";
    } else if (size === "tablet") {
      iframe.style.width = "768px";
      iframe.style.height = "1024px";
    } else {
      iframe.style.width = "100%";
      iframe.style.height = "100%";
    }
    iframe.style.margin = "auto";
    setCurrentDevice(size); // lưu state device
  };

  useEffect(() => {
    const deviceType = detectDevice();
    setIframeSize(deviceType);
  }, []);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        Không tìm thấy sản phẩm
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-gray-400">
      {/* Menu */}
      <div className="fixed top-0 left-0 w-full bg-white z-50 flex items-center justify-between px-4 md:px-8 shadow">
        {/* Logo */}
        <div className="flex items-center py-2">
          <a href="/">
            <img src={logo} alt="Your logo" className="h-16 max-w-[200px]" />
          </a>
        </div>

        {/* Mid section */}
        <div className="hidden md:flex items-center space-x-4">
          <p className="font-medium">{product.name}</p>

          {product.segment === "Cao cấp" ? (
            <div className="entry-tag">
              <span className="px-4 py-1 ml-5 rounded-full bg-[#fef5e5] text-yellow-500 flex items-center space-x-1">
                <i className="fa-solid fa-crown"></i>
                <span>Cao cấp</span>
              </span>
            </div>
          ) : (
            <span className="px-4 py-1 rounded-full text-sm bg-[#e9f1de] text-[#81B441]">
              {product.segment}
            </span>
          )}

          <span className="text-sm">
            Mã giao diện: <span className="font-semibold">#{product.id}</span>
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIframeSize("phone")}
              className={`p-2 rounded-lg ${
                currentDevice === "phone" ? "bg-red-100" : ""
              }`}
            >
              <i className="fas fa-mobile-alt text-red-500"></i>
            </button>
            <button
              onClick={() => setIframeSize("tablet")}
              className={`p-2 rounded-lg ${
                currentDevice === "tablet" ? "bg-red-100" : ""
              }`}
            >
              <i className="fas fa-tablet-alt text-red-500"></i>
            </button>
            <button
              onClick={() => setIframeSize("desktop")}
              className={`p-2 rounded-lg ${
                currentDevice === "desktop" ? "bg-red-100" : ""
              }`}
            >
              <i className="fas fa-desktop text-red-500"></i>
            </button>

            <a
              href={`/lien-he?mau-web=${product.id}`}
              className="ml-4 bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm"
            >
              Đăng ký ngay
            </a>
          </div>

          {/* Mobile quick call */}
          <ul className="md:hidden list-none">
            <li>
              <a
                className="bg-indigo-600 p-2 rounded-full"
                href="tel:0988888888"
              >
                <i className="fa-solid fa-phone text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Iframe */}
      <div className="absolute top-[65px] bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="p-4 bg-gray-100 rounded-lg w-full h-full">
          <iframe
            id="preview-frame"
            src={product.link || ""}
            title="Preview"
            className="w-full h-full rounded-xl border-none transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
