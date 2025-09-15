import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";

function Header({ ServiceHeader }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (ServiceHeader) {
      setScrolled(true);
      return; // Không cần xử lý scroll nếu là service page
    }
    const btn = document.getElementById("back-to-top");

    const handleScroll = () => {
      // Hiển thị nút back-to-top
      if (window.scrollY > 200) {
        btn.classList.remove("opacity-0", "invisible");
        btn.classList.add("opacity-100", "visible");
      } else {
        btn.classList.add("opacity-0", "invisible");
        btn.classList.remove("opacity-100", "visible");
      }

      // Đổi màu header
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ServiceHeader]);

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
          scrolled ? "bg-white shadow-md" : "bg-primary"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logo} alt="Truong Thanh Web Logo" className="h-16" />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className={`font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-[#00b2ff]" : "text-white hover:text-[#00b2ff]"
              }`}
            >
              Trang chủ
            </a>
            <a
              href="/dich-vu"
              className={`font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-[#00b2ff]" : "text-white hover:text-[#00b2ff]"
              }`}
            >
              Dịch Vụ
            </a>
            <a
              href="/bang-gia"
              className={`font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-[#00b2ff]" : "text-white hover:text-[#00b2ff]"
              }`}
            >
              Bảng Giá
            </a>
            <a
              href="/mau-website"
              className={`font-medium transition-colors ${
                scrolled ? "text-gray-800 hover:text-[#00b2ff]" : "text-white hover:text-[#00b2ff]"
              }`}
            >
              Mẫu website
            </a>
          </nav>

          {/* CTA Button */}
          <a
            href="/lien-he"
            className="hidden md:block bg-[#00b2ff] text-white font-medium py-2 px-6 rounded-xl hover:opacity-80 transition-colors whitespace-nowrap"
          >
            Nhận Báo Giá
          </a>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={menuOpen ? "ri-close-line ri-2x" : "ri-menu-line ri-2x"}></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="fixed top-16 left-0 bg-white text-black right-0 bg-primary z-50 shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              <a href="/" className=" hover:text-[#00b2ff] font-medium py-2">
                Trang chủ
              </a>
              <a href="/dich-vu" className=" hover:text-[#00b2ff] font-medium py-2">
                Dịch Vụ
              </a>
              <a href="/bang-gia" className=" hover:text-[#00b2ff] font-medium py-2">
                Bảng Giá
              </a>
              <a href="/mau-website" className=" hover:text-[#00b2ff] font-medium py-2">
                Mẫu website
              </a>
              <a
                href="/lien-he"
                className="bg-white text-primary font-medium py-2 px-4 rounded-xl text-center mt-2 hover:bg-gray-200"
              >
                Nhận Báo Giá
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
        {/* Back to Top */}
        <button
          id="back-to-top"
          onClick={scrollToTop}
          className="w-12 h-12 flex items-center justify-center bg-[#00b2ff] text-white rounded-full shadow-lg opacity-0 invisible transition-opacity duration-300"
        >
          <i className="ri-arrow-up-line ri-lg"></i>
        </button>

        {/* Zalo */}
        <a
          href="https://zalo.me/1008891304222668473"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg"
        >
          <i className="ri-chat-1-line ri-lg"></i>
        </a>

        {/* Call */}
        <a
          href="tel:02422121489"
          className="w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full shadow-lg"
        >
          <i className="ri-phone-line ri-lg"></i>
        </a>

        {/* Chat */}
        <button className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg">
          <i className="ri-message-3-line ri-lg"></i>
        </button>
      </div>
    </>
  );
}


export default Header;
