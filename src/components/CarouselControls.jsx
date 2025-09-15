import React from 'react'

function CarouselControls() {
  return (
    <section className='container pb-[96px]'>
      {/* Carousel Controls */}
      

      {/* Clients */}
      <div className="mt-20 fade-in">
        <h3 className="text-xl font-bold text-center mb-10">
          Khách Hàng Tiêu Biểu
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <i className="ri-building-4-fill ri-3x text-gray-400 mb-2"></i>
              <span className="text-gray-600 text-sm">
                Công ty CP Xây dựng Tân Phát
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <i className="ri-t-shirt-fill ri-3x text-gray-400 mb-2"></i>
              <span className="text-gray-600 text-sm">LanAnh Fashion</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <i className="ri-restaurant-fill ri-3x text-gray-400 mb-2"></i>
              <span className="text-gray-600 text-sm">Nhà hàng Hương Việt</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <i className="ri-flask-fill ri-3x text-gray-400 mb-2"></i>
              <span className="text-gray-600 text-sm">
                Công ty CP Mỹ phẩm Việt
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <i className="ri-hotel-fill ri-3x text-gray-400 mb-2"></i>
              <span className="text-gray-600 text-sm">
                Khách sạn Sài Gòn Pearl
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <i className="ri-shopping-bag-fill ri-3x text-gray-400 mb-2"></i>
              <span className="text-gray-600 text-sm">
                Siêu thị điện máy TechZone
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CarouselControls
