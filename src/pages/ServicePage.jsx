import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroFunction from "../components/IntroFunction";
import WorkflowSection from "../components/WorkflowSection";
import Consultation from "../components/Consultation";
import FeedbackService from "../components/FeedbackService";

function ServicePage() {
  return (
    <div>
      <Header ServiceHeader = {true }/>

      <IntroFunction />
      <WorkflowSection />
      <Consultation />
      <FeedbackService />

      <Footer />
    </div>
  );
}

export default ServicePage;
