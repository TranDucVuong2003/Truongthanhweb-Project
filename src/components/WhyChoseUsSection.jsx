import React from 'react'

function WhyChoseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BẠN NHẬN ĐƯỢC GÌ KHI THIẾT KẾ WEBSITE TẠI TRƯỜNG THÀNH WEB?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi mang đến giải pháp thiết kế website toàn diện với nhiều ưu
            điểm vượt trội, giúp doanh nghiệp của bạn phát triển mạnh mẽ trên
            không gian số.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* <!-- Left side - Reasons --> */}
          <div className="space-y-4">
            {/* Số 1 giữ nguyên border màu #00b2ff */}
            <button
              className="reason-btn w-full text-left p-4 rounded-lg border border-[#00b2ff] hover:border-[#00b2ff] transition-colors"
              data-reason="1">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#00b2ff] mr-4">01</span>
                <span className="font-medium">Giao diện thẩm mỹ, hiện đại</span>
              </div>
            </button>
            {/* Số 2 đến số 6: border-gray-200, hover mới #00b2ff */}
            <button
              className="reason-btn w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#00b2ff] transition-colors"
              data-reason="2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#00b2ff] mr-4">02</span>
                <span className="font-medium">Tối ưu SEO, giúp website lên top Google nhanh chóng</span>
              </div>
            </button>
            <button
              className="reason-btn w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#00b2ff] transition-colors"
              data-reason="3">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#00b2ff] mr-4">03</span>
                <span className="font-medium">Thiết kế nhanh chóng, đúng hẹn, chuẩn theo yêu cầu</span>
              </div>
            </button>
            <button
              className="reason-btn w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#00b2ff] transition-colors"
              data-reason="4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#00b2ff] mr-4">04</span>
                <span className="font-medium">Tối ưu UX/UI giúp khách hàng có trải nghiệm tốt hơn</span>
              </div>
            </button>
            <button
              className="reason-btn w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#00b2ff] transition-colors"
              data-reason="5">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#00b2ff] mr-4">05</span>
                <span className="font-medium">Giúp tăng trưởng doanh thu vượt bậc</span>
              </div>
            </button>
            <button
              className="reason-btn w-full text-left p-4 rounded-lg border border-gray-200 hover:border-[#00b2ff] transition-colors"
              data-reason="6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-[#00b2ff] mr-4">06</span>
                <span className="font-medium">Giá cả hợp lý - Chỉ từ 1.500K</span>
              </div>
            </button>
          </div>
          {/* <!-- Right side - Image --> */}
          <div className="relative">
            <img
              id="reason-image"
              src="https://readdy.ai/api/search-image?query=modern%2520and%2520aesthetic%2520website%2520design%2520mockup%2520on%2520laptop%2520and%2520mobile%2520screens%2C%2520showing%2520beautiful%2520UI%2520with%2520blue%2520accent%2520colors%2C%2520professional%2520photography%2C%2520clean%2520minimal%2520style&width=800&height=600&seq=reason1&orientation=landscape"
              alt="Thiết kế website tại Trường Thành Web"
              className="w-full rounded-lg shadow-lg transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoseUsSection
