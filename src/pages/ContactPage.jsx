import React from 'react'
import Header from '../components/Header'
import HeroContactSection from '../components/HeroContactSection'
import ContactForm from '../components/ContactForm'
import IframeContect from '../components/IframeContect'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div>
        <Header ServiceHeader={true}/>
        <HeroContactSection/>
        <ContactForm/>
        <IframeContect/>
        <FAQSection/>
        <Footer />
    </div>
  )
}

export default ContactPage
