import React from 'react'

function CTASection() {
  return (
    <div className='bg-[#00b2ff]'>
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern
                  id="pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="2" fill="#fff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)" />
            </svg>
          </div>
    
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sẵn Sàng Phát Triển Doanh Nghiệp Của Bạn?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Hãy để Trường Thành Web giúp bạn xây dựng website chuyên nghiệp, thu
                hút khách hàng và tăng doanh số. Liên hệ ngay hôm nay để nhận tư vấn
                miễn phí!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#quote"
                  className="rounded-xl bg-[#fff]  text-[#00b2ff] font-medium py-3 px-8 !rounded-button transition-colors whitespace-nowrap"
                >
                  Nhận Báo Giá Miễn Phí
                </a>
                <a
                  href="tel:024.2212.1489"
                  className="rounded-xl bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 !rounded-button border border-white/30 transition-colors whitespace-nowrap flex items-center justify-center"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Gọi Ngay: 024.2212.1489
                </a>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default CTASection
