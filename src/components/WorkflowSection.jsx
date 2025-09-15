import React from "react";

function Timeline() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Tiêu đề */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quy trình làm việc
          </h2>
          <p className="text-gray-600">
            Quy trình làm việc chuyên nghiệp, minh bạch giúp dự án của bạn được
            triển khai đúng tiến độ và chất lượng.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {/* Item 1 */}
            <div className="timeline-item relative pl-12 pb-10">
              <div className="timeline-dot bg-[#4f46e5] absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">1</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tư vấn & Khảo sát nhu cầu
                </h3>
                <p className="text-gray-600">
                  Chúng tôi tìm hiểu chi tiết về doanh nghiệp, mục tiêu kinh
                  doanh và nhu cầu của bạn để đề xuất giải pháp phù hợp nhất.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="timeline-item relative pl-12 pb-10">
              <div className="timeline-dot bg-[#4f46e5] absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">2</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Lên kế hoạch & Báo giá
                </h3>
                <p className="text-gray-600">
                  Dựa trên thông tin khảo sát, chúng tôi xây dựng kế hoạch triển
                  khai chi tiết và báo giá minh bạch cho toàn bộ dự án.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="timeline-item relative pl-12 pb-10">
              <div className="timeline-dot bg-[#4f46e5] absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">3</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Thiết kế & Phát triển
                </h3>
                <p className="text-gray-600">
                  Đội ngũ chuyên gia của chúng tôi bắt đầu thiết kế và phát
                  triển dự án theo kế hoạch đã được phê duyệt, cập nhật tiến độ
                  thường xuyên.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="timeline-item relative pl-12 pb-10">
              <div className="timeline-dot bg-[#4f46e5] absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">4</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Kiểm thử & Tối ưu
                </h3>
                <p className="text-gray-600">
                  Chúng tôi thực hiện kiểm thử toàn diện trên nhiều thiết bị và
                  trình duyệt khác nhau, đảm bảo sản phẩm hoạt động hoàn hảo
                  trước khi bàn giao.
                </p>
              </div>
            </div>

            {/* Item 5 */}
            <div className="timeline-item relative pl-12">
              <div className="timeline-dot bg-[#4f46e5] absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">5</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Bàn giao & Hỗ trợ
                </h3>
                <p className="text-gray-600">
                  Bàn giao sản phẩm hoàn thiện, hướng dẫn sử dụng và cung cấp
                  dịch vụ hỗ trợ kỹ thuật sau bàn giao theo thỏa thuận.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
