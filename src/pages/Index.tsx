
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import RoomsSection from "@/components/RoomsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <LocationsSection />
      <AmenitiesSection />
      <RoomsSection />
      <WhyChooseUsSection />
      <BookingSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
