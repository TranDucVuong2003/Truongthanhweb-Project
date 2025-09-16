import React from 'react'
import Header from '../components/Header'
import TitlePriceList from '../components/TitlePriceList'
import PricingCardSection from '../components/PricingCardSection'
import AddOnServicesSection from '../components/AddOnServicesSection'
import FAQ from '../components/FAQSection.jsx';
import Footer from '../components/Footer'

function PriceList() {
  return (
    <div>
      
    <Header ServiceHeader = {true }/>
    <TitlePriceList />
    <PricingCardSection />
    <AddOnServicesSection />
    <FAQ />
    <section className="py-16 px-4 bg-[#473cd2] from-primary to-indigo-700 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Sẵn Sàng Để Bắt Đầu Dự Án Của Bạn?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí và báo
          giá chi tiết cho dự án website của bạn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="bg-white text-[#473cd2] hover:bg-gray-100 font-medium py-3 px-8 rounded-full whitespace-nowrap transition"
            href="../lien-he/index.php"
          >
            Liên Hệ Tư Vấn
          </a>
          <a
            className="bg-transparent hover:bg-white/10 border border-white text-white font-medium py-3 px-8 rounded-full whitespace-nowrap transition"
            href="../mau-website/index.php"
          >
            Xem Demo
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  )
}

export default PriceList
