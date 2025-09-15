import React from 'react'
 
const categories = [
  {
    title: "Bất động sản",
    img: "https://readdy.ai/api/search-image?query=real%2520estate%2520icon%2520with%2520location%2520pin%2520and%2520building%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat1&orientation=squarish",
  },
  {
    title: "Công nghệ - Điện tử",
    img: "https://readdy.ai/api/search-image?query=technology%2520and%2520electronics%2520icon%2520with%2520circuit%2520board%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat2&orientation=squarish",
    tag: "Bán hàng",
  },
  {
    title: "Cơ khí - Công nghiệp",
    img: "https://readdy.ai/api/search-image?query=industrial%2520and%2520manufacturing%2520icon%2520with%2520gear%2520wheel%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat3&orientation=squarish",
  },
  {
    title: "Du lịch",
    img: "https://readdy.ai/api/search-image?query=travel%2520and%2520tourism%2520icon%2520with%2520suitcase%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat4&orientation=squarish",
  },
  {
    title: "Gia dụng - Điện máy",
    img: "https://readdy.ai/api/search-image?query=home%2520appliances%2520icon%2520with%2520vacuum%2520cleaner%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat5&orientation=squarish",
    tag: "Bán hàng",
  },
  {
    title: "Giáo dục",
    img: "https://readdy.ai/api/search-image?query=education%2520icon%2520with%2520books%2520and%2520graduation%2520cap%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat6&orientation=squarish",
  },
  {
    title: "In ấn - Thiết kế",
    img: "https://readdy.ai/api/search-image?query=printing%2520and%2520design%2520icon%2520with%2520color%2520palette%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat7&orientation=squarish",
  },
  {
    title: "Khách sạn",
    img: "https://readdy.ai/api/search-image?query=hotel%2520and%2520hospitality%2520icon%2520with%2520building%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat8&orientation=squarish",
  },
  {
    title: "Logistics",
    img: "https://readdy.ai/api/search-image?query=logistics%2520and%2520transportation%2520icon%2520with%2520truck%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat9&orientation=squarish",
  },
  {
    title: "Mỹ phẩm",
    img: "https://readdy.ai/api/search-image?query=cosmetics%2520and%2520beauty%2520icon%2520with%2520makeup%2520products%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat10&orientation=squarish",
    tag: "Bán hàng",
  },
  {
    title: "Nhà hàng",
    img: "https://readdy.ai/api/search-image?query=restaurant%2520and%2520food%2520icon%2520with%2520chef%2520hat%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat11&orientation=squarish",
  },
  {
    title: "Nông, Lâm, Thủy sản",
    img: "https://readdy.ai/api/search-image?query=agriculture%2520and%2520farming%2520icon%2520with%2520plant%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat12&orientation=squarish",
    tag: "Bán hàng",
  },
  {
    title: "Ô tô - Xe máy",
    img: "https://readdy.ai/api/search-image?query=automotive%2520icon%2520with%2520car%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat13&orientation=squarish",
    tag: "Bán hàng",
  },
  {
    title: "Spa - Thẩm mỹ",
    img: "https://readdy.ai/api/search-image?query=spa%2520and%2520beauty%2520icon%2520with%2520lotus%2520flower%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat14&orientation=squarish",
  },
  {
    title: "Sự kiện",
    img: "https://readdy.ai/api/search-image?query=event%2520and%2520entertainment%2520icon%2520with%2520stage%2C%25203D%2520illustration%2C%2520blue%2520color%2520scheme&width=100&height=100&seq=cat15&orientation=squarish",
  },
];

function WebsiteCategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chuyên Ngành Website
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi thiết kế website cho mọi ngành nghề, đáp ứng đầy đủ nhu
            cầu của từng lĩnh vực kinh doanh cụ thể.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 fade-in">
          {categories.map((cat, index) => (
            <a href="#" key={index} className="group">
              <div className="bg-white rounded-lg p-6 text-center border border-gray-100 hover:border-[#00b2ff] hover:shadow-lg transition-all">
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-[#00b2ff] transition-colors">
                  {cat.title}
                </h3>
                {cat.tag && (
                  <span className="inline-block bg-blue-50 text-primary text-xs px-2 py-1 rounded mt-2 text-[#00b2ff]">
                    {cat.tag}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebsiteCategoriesSection
