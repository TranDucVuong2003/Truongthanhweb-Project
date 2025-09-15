import React, { useRef } from 'react'

function PortfolioSection() {
  const carouselRef = useRef(null);

  // Số lượng item hiển thị mỗi lần (tùy responsive, ở đây lấy 1/3 chiều rộng)
  const scrollAmount = () => {
    if (!carouselRef.current) return 0;
    // Lấy chiều rộng của một item
    const item = carouselRef.current.querySelector('.carousel-item');
    return item ? item.offsetWidth : 300;
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mẫu Website Đã Thực Hiện
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các dự án website chúng tôi đã thực hiện cho khách hàng.
            Mỗi dự án đều được thiết kế riêng biệt, phù hợp với từng lĩnh vực
            kinh doanh.
          </p>
        </div>

        {/* Bộ lọc Portfolio */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 fade-in">
          <button
            className="portfolio-filter-btn active bg-[#00b2ff] text-white py-2 px-6 rounded-2xl whitespace-nowrap"
            data-filter="all"
          >
            Tất cả
          </button>
          <button
            className="portfolio-filter-btn bg-white text-gray-700 py-2 px-6 rounded-2xl whitespace-nowrap"
            data-filter="business"
          >
            Doanh nghiệp
          </button>
          <button
            className="portfolio-filter-btn bg-white text-gray-700 py-2 px-6 rounded-2xl whitespace-nowrap"
            data-filter="ecommerce"
          >
            Thương mại điện tử
          </button>
          <button
            className="portfolio-filter-btn bg-white text-gray-700 py-2 px-6 rounded-2xl whitespace-nowrap"
            data-filter="landing"
          >
            Landing Page
          </button>
        </div>

        {/* Portfolio Carousel */}
        <div className="relative fade-in">
          <div
            className="carousel flex overflow-x-auto pb-8 -mx-4 px-4 scroll-smooth hide-scrollbar"
            ref={carouselRef}
          >
            {/* Portfolio Item 1 */}
            <div
              className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              data-category="business"
            >
              <div className="bg-white rounded-lg overflow-hidden custom-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%2520corporate%2520website%2520design%2520on%2520laptop%2520screen%2C%2520business%2520website%2520template%2520with%2520blue%2520and%2520white%2520color%2520scheme%2C%2520clean%2520modern%2520design%2C%25204K%2520detailed%2520photography&width=600&height=400&seq=portfolio1&orientation=landscape"
                    alt="Website doanh nghiệp"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Website Công Ty Xây Dựng
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Website giới thiệu công ty xây dựng với thiết kế hiện đại,
                    trình bày các dự án đã thực hiện và dịch vụ chuyên nghiệp.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Responsive
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      WordPress
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      SEO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div
              className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              data-category="ecommerce"
            >
              <div className="bg-white rounded-lg overflow-hidden custom-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=e-commerce%2520website%2520design%2520on%2520laptop%2520and%2520mobile%2520phone%2C%2520online%2520fashion%2520store%2520with%2520product%2520grid%2C%2520shopping%2520cart%2C%2520clean%2520modern%2520design%2C%25204K%2520detailed%2520photography&width=600&height=400&seq=portfolio2&orientation=landscape"
                    alt="Website thương mại điện tử"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Shop Thời Trang Online
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Website bán hàng thời trang với giao diện bắt mắt, dễ sử
                    dụng, tích hợp đầy đủ tính năng giỏ hàng và thanh toán.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      WooCommerce
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Thanh toán online
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Mobile-friendly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div
              className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              data-category="landing"
            >
              <div className="bg-white rounded-lg overflow-hidden custom-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=landing%2520page%2520design%2520for%2520mobile%2520app%2520on%2520laptop%2520screen%2C%2520with%2520call-to-action%2520buttons%2C%2520app%2520screenshots%2C%2520clean%2520modern%2520design%2520with%2520blue%2520accent%2520colors%2C%25204K%2520detailed%2520photography&width=600&height=400&seq=portfolio3&orientation=landscape"
                    alt="Landing page"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Landing Page Ứng Dụng Di Động
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Landing page giới thiệu ứng dụng di động với thiết kế thu
                    hút, tối ưu chuyển đổi và tăng lượt tải ứng dụng.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      One-page
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Animation
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      CTA tối ưu
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 4 (mới thêm) */}
            <div
              className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              data-category="business"
            >
              <div className="bg-white rounded-lg overflow-hidden custom-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=restaurant%2520website%2520design%2520on%2520laptop%2520screen%2C%2520elegant%2520food%2520menu%2C%2520reservation%2520system%2C%2520gallery%2520of%2520dishes%2C%2520clean%2520modern%2520design%2C%25204K%2520detailed%2520photography&width=600&height=400&seq=portfolio4&orientation=landscape"
                    alt="Website nhà hàng"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Website Nhà Hàng</h3>
                  <p className="text-gray-600 mb-4">
                    Website nhà hàng với thiết kế sang trọng, hiển thị thực đơn
                    hấp dẫn và hệ thống đặt bàn trực tuyến tiện lợi.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Đặt bàn online
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Gallery
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 5 (mới thêm) */}
            <div
              className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              data-category="ecommerce"
            >
              <div className="bg-white rounded-lg overflow-hidden custom-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=electronics%2520e-commerce%2520website%2520design%2520on%2520laptop%2520screen%2C%2520product%2520listings%2C%2520shopping%2520cart%2C%2520payment%2520gateway%2520integration%2C%2520clean%2520modern%2520design%2C%25204K%2520detailed%2520photography&width=600&height=400&seq=portfolio5&orientation=landscape"
                    alt="Website bán điện thoại"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Website Bán Điện Thoại</h3>
                  <p className="text-gray-600 mb-4">
                    Website bán điện thoại và phụ kiện với hệ thống so sánh sản
                    phẩm, đánh giá và thanh toán đa dạng.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Magento
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      So sánh sản phẩm
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Đa ngôn ngữ
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Item 6 (mới thêm) */}
            <div
              className="carousel-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4"
              data-category="landing"
            >
              <div className="bg-white rounded-lg overflow-hidden custom-shadow h-full">
                <div className="h-64 overflow-hidden">
                  <img
                    src="https://readdy.ai/api/search-image?query=event%2520landing%2520page%2520design%2520on%2520laptop%2520screen%2C%2520conference%2520registration%2520form%2C%2520speaker%2520profiles%2C%2520schedule%2520timeline%2C%2520clean%2520modern%2520design%2C%25204K%2520detailed%2520photography&width=600&height=400&seq=portfolio6&orientation=landscape"
                    alt="Landing page sự kiện"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Landing Page Sự Kiện</h3>
                  <p className="text-gray-600 mb-4">
                    Landing page sự kiện với thiết kế ấn tượng, hệ thống đăng ký
                    tham dự và đếm ngược thời gian diễn ra.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Đăng ký online
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Countdown
                    </span>
                    <span className="bg-blue-50 text-[#00b2ff] text-sm py-1 px-3 rounded-full">
                      Parallax
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nút điều hướng Carousel */}
          <button
            className="carousel-prev absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 z-10"
            onClick={handlePrev}
            type="button"
          >
            <i className="ri-arrow-left-s-line ri-lg"></i>
          </button>
          <button
            className="carousel-next absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg text-gray-700 z-10"
            onClick={handleNext}
            type="button"
          >
            <i className="ri-arrow-right-s-line ri-lg"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection
