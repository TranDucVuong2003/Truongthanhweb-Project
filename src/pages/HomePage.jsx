import React from 'react'
import Banner from '../components/Banner.jsx';
import BenefitsSection from '../components/BenefitsSection.jsx';
import CarouselControls from '../components/CarouselControls.jsx';
import ContactSection from '../components/ContactSection.jsx';
import CTASection from '../components/CTASection.jsx';
import FAQ from '../components/FAQSection.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import PortfolioSection from '../components/PortfolioSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import TestimonialsSection from '../components/TestimonialsSection.jsx';
import WebsiteCategoriesSection from '../components/WebsiteCategoriesSection.jsx';
import WhyChoseUsSection from '../components/WhyChoseUsSection.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';


function HomePage() {
  return (
    <>
    <Header />
     <Banner />
     <FeatureSection />
     <ServicesSection />
     <WhyChoseUsSection />
     <ProcessSection />
     <PortfolioSection />
     <TestimonialsSection />
     <CarouselControls />
     <BenefitsSection />
     <WebsiteCategoriesSection />
     <FAQ />
     <CTASection />
     <ContactSection />
     <Footer />
     {/* <ScrollToTop /> */}
    </>
  )
}

export default HomePage
