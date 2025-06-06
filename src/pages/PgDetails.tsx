import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const PgDetails = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "PG Main View"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "PG Room"
    },
    {
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "PG Common Area"
    }
  ];

  const pgDetails = {
    "anna-nagar": {
      name: "Anna Nagar PG",
      description: "Our Anna Nagar PG offers comfortable accommodation for students and working professionals. Located in a peaceful residential area, the PG is just 10 minutes away from Anna University and major corporate offices. The property features modern amenities including high-speed WiFi, air conditioning in select rooms, nutritious home-cooked meals, and 24x7 security. We maintain strict hygiene standards with regular housekeeping and provide comfortable beds with clean linens.",
      location: "45 Second Avenue, Anna Nagar, Chennai, Tamil Nadu, 600040",
      nearbyPlaces: "Anna University (1.5 km), VR Chennai Mall (2 km), Anna Nagar Metro Station (0.8 km), Apollo Hospitals (3 km), Central Park (1 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.880022854869!2d80.20680297736966!3d13.0826056554568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715938859823!5m2!1sen!2sin"
    },
    "adyar": {
      name: "Adyar PG",
      description: "Located in the heart of Adyar...",
      location: "45 Second Avenue, Anna Nagar, Chennai, Tamil Nadu, 600040",
      nearbyPlaces: "Anna University (1.5 km), VR Chennai Mall (2 km), Anna Nagar Metro Station (0.8 km), Apollo Hospitals (3 km), Central Park (1 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.880022854869!2d80.20680297736966!3d13.0826056554568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715938859823!5m2!1sen!2sin"
    },
    "velachery": {
      name: "Velachery PG",
      description: "Modern PG accommodation in Velachery...",
      location: "45 Second Avenue, Anna Nagar, Chennai, Tamil Nadu, 600040",
      nearbyPlaces: "Anna University (1.5 km), VR Chennai Mall (2 km), Anna Nagar Metro Station (0.8 km), Apollo Hospitals (3 km), Central Park (1 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.880022854869!2d80.20680297736966!3d13.0826056554568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264078822719b%3A0xbda01077b89581e2!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1715938859823!5m2!1sen!2sin"
    }
  };

  const pg = pgDetails[id as keyof typeof pgDetails] || pgDetails["anna-nagar"];

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-primary hover:text-pgBlue-dark">
              <ArrowLeft size={16} className="mr-1" /> Back to Home
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-6">{pg.name}</h1>

              {/* Image Gallery */}
              <div className="mb-8 relative">
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src={images[currentImageIndex].url}
                    alt={images[currentImageIndex].alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* PG Description */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold mb-4">About this PG</h2>
                <p className="text-gray-700 mb-4">{pg.description}</p>
              </div>

              {/* Location Information */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold mb-4">Location</h2>
                <p className="text-gray-700 mb-4">{pg.location}</p>

                <h3 className="font-semibold mb-2">Nearby Places:</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-700">
                  {pg.nearbyPlaces.split(', ').map((place, index) => (
                    <li key={index}>{place}</li>
                  ))}
                </ul>

                {/* Google Maps Embed */}
                <div className="h-72 rounded-lg overflow-hidden">
                  <iframe
                    src={pg.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PG Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Pricing Card */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold mb-4">Room Types & Pricing</h2>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Single Occupancy</h3>
                      <span className="font-semibold text-primary">₹12,000/month</span>
                    </div>
                    <p className="text-sm text-gray-600">AC, Meals, Laundry Included</p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Double Sharing</h3>
                      <span className="font-semibold text-primary">₹9,000/month</span>
                    </div>
                    <p className="text-sm text-gray-600">Meals, Laundry Included</p>
                  </div>
                  
                  <div className="pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold">Triple Sharing</h3>
                      <span className="font-semibold text-primary">₹7,000/month</span>
                    </div>
                    <p className="text-sm text-gray-600">Meals Only</p>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <Link to="/#book">
                    <Button className="w-full bg-primary hover:bg-pgBlue-dark">Book a Visit</Button>
                  </Link>
                  
                  <a 
                    href="tel:+919876543210" 
                    className="flex items-center justify-center w-full py-2 border border-primary text-primary rounded-md hover:bg-pgBlue-light transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
              
              {/* Amenities */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Amenities</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Free WiFi
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    24x7 Security
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Home-style Meals
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Laundry Services
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Housekeeping
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Recreational Areas
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default PgDetails;
