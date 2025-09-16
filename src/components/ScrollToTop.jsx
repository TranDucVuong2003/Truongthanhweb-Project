// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // có thể bỏ smooth nếu muốn cuộn ngay lập tức
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
