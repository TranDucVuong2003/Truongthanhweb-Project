import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import WebsiteList from '../components/WebsiteList'
import PromotionAndForm from '../components/PromotionAndForm'

function WebsiteTemplate() {
  return (
    <div>
      <Header ServiceHeader = {true }/>
      <HeroSection />
        <WebsiteList />
        <PromotionAndForm />
      <Footer />
    </div>
  )
}

export default WebsiteTemplate
