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


  const pgDetails = {


    "NI01": {
      name: "NI01 PG (Boys)",
      description: "Our Thikana PG offers comfortable accommodation for students and working professionals. Located in a peaceful residential area, the PG is just 5 minutes away from North Campus . The property features modern amenities including high-speed WiFi, air conditioning in all rooms, nutritious home-cooked four time meals, and 24x7 security. We maintain strict hygiene standards with regular housekeeping and provide comfortable beds with clean linens.",
      location: "Aspiration Gym, Roop Nagar, Delhi, 110007",
      nearbyPlaces: "Hansraj College (1 km), Kirori Mal College (1.5 km), North Campus Metro Station (0.5 km), Kamla Nagar Market (2 km), Delhi University Library (1.2 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.1447030180066!2d77.19449867548974!3d28.683195381193504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfda77a40ea23%3A0x942b1e349da7580!2sNestInn!5e0!3m2!1sen!2sin!4v1717771992703!5m2!1sen!2sin",
      images: [
        { url: "/media/common/roop-nagar/common.jpeg", alt: "PG Common View" },
        { url: "/media/common/roop-nagar/single.jpeg", alt: "PG Single occupancy Room" },
        { url: "/media/common/roop-nagar/double.jpeg", alt: "PG Double occupancy Room" },
        { url: "/media/common/roop-nagar/three.jpeg", alt: "PG Triple occupancy Room" },
        { url: "/media/common/roop-nagar/washroom.jpeg", alt: "PG Washroom Area" },
        { url: "/media/common/roop-nagar/balcony.jpeg", alt: "PG Balcony Area" }
      ],
      amenities: [
        "Free WiFi",
        "24x7 Security",
        "Emergency Doctor",
        "4-times Meals",
        "Laundry Services",
        "Housekeeping",
        "Gym",
        "Recreational Areas"
      ],
      roomPricing: [
        {
          type: "Single Occupancy",
          price: "₹20,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        {
          type: "Double Sharing",
          price: "₹14,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        {
          type: "Triple Sharing",
          price: "₹13,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        }
      ]
    },





    "PH01": {
      name: "PH01 PG (Girls)",
      description: "PixelHome PG offers a modern and comfortable living experience for girls with a safe and secure environment. It is situtated in Vijaynagar, close to North Campus. The PG features spacious rooms with AC, high-speed WiFi, and nutritious home-cooked meals served four times a day. We ensure 24x7 security with CCTV surveillance and provide regular housekeeping services to maintain hygiene standards. The property also includes recreational areas for relaxation.",
      location: "Vijaynagar, Delhi, 110007",
      nearbyPlaces: "Miranda House (1 km), DRCC (1.5 km), North Campus Metro Station (0.5 km), Kamla Nagar Market (2 km), Delhi University Library (1.2 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9363183247524!2d77.1993249!3d28.6915515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf48d96153b%3A0x71f240ceb9698a1f!2sManjeet%20Cold%20Drink!5e0!3m2!1sen!2sin!4v1749316884634!5m2!1sen!2sin",
      images: [
        { url: "/media/common/PixelHome/double.jpeg", alt: "PG Common View" },
        { url: "/media/common/PixelHome/2-bed.jpeg", alt: "PG Single occupancy Room" },
        { url: "/media/common/PixelHome/2-bed1.jpeg", alt: "PG Double occupancy Room" },
        // { url: "/media/common/PixelHome/", alt: "PG Triple occupancy Room" },
        { url: "/media/common/PixelHome/washroom.jpeg", alt: "PG Washroom Area" },
        { url: "/media/common/PixelHome/balcony.jpeg", alt: "PG Balcony Area" }
      ],
      amenities: [
        "Free WiFi",
        "24x7 Security",
        "Emergency Doctor",
        "4-times Meals",
        "Laundry Services",
        "Housekeeping",
        "Recreational Areas"
      ],
      roomPricing: [
        {
          type: "Double Sharing",
          price: "₹14,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        }
      ]
    },







    "NI02": {
      name: "NI02 PG (Boys)",
      description: "Thiakana PG offers comfortable accommodation for students and working professionals. Located in a peaceful residential area, the PG is just 5 minutes away from North Campus . The property features modern amenities including high-speed WiFi, air conditioning in all rooms, nutritious home-cooked four time meals, and 24x7 security. We maintain strict hygiene standards with regular housekeeping and provide comfortable beds with clean linens.",
      location: "Roop Nagar, Delhi, 110007",
      nearbyPlaces: "Hansraj College (1 km), Kirori Mal College (1.5 km), North Campus Metro Station (0.5 km), Kamla Nagar Market (2 km), Delhi University Library (1.2 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9516198473434!2d77.2014645!3d28.6910938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d5162be263%3A0x185d053330c971e6!2sCool%20Scoop%20-%20Vijay%20Nagar!5e0!3m2!1sen!2sin!4v1749319068764!5m2!1sen!2sin",
      images: [
        { url: "/media/common/NI02/common.jpeg", alt: "PG Common View" },
        { url: "/media/common/NI02/common2.jpeg", alt: "PG Single occupancy Room" },
        { url: "/media/common/NI02/double.jpeg", alt: "PG Double occupancy Room" },
        { url: "/media/common/NI02/common3.jpeg", alt: "PG Triple occupancy Room" },
        //   { url: "/media/common/", alt: "PG Washroom Area" },
        //   { url: "/media/common/", alt: "PG Balcony Area" }
      ],
      amenities: [
        "Free WiFi",
        "24x7 Security",
        "Emergency Doctor",
        "4-times Meals",
        "Laundry Services",
        "Housekeeping",
        "Recreational Areas"
      ],
      roomPricing: [
        {
          type: "Single Occupancy",
          price: "₹20,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        {
          type: "Double Sharing",
          price: "₹13,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        // {
        //   type: "Triple Sharing",
        //   price: "₹13,000/month",
        //   description: "AC, 4 times Meals, Laundry etc. Included"
        // }
      ]
    },






    "AL01": {
      name: "AL01 PG (Girls)",
      description: "Thiakana PG offers comfortable accommodation for students and working professionals. Located in a peaceful residential area, the PG is just 5 minutes away from North Campus . The property features modern amenities including high-speed WiFi, air conditioning in all rooms, nutritious home-cooked four time meals, and 24x7 security. We maintain strict hygiene standards with regular housekeeping and provide comfortable beds with clean linens.",
      location: "Vijay, Delhi, 110007",
      nearbyPlaces: "DRC (1 km), Miranda House (1.5 km), North Campus Metro Station (0.5 km), Kamla Nagar Market (2 km), Delhi University Library (1.2 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9363183247524!2d77.1993249!3d28.6915515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf48d96153b%3A0x71f240ceb9698a1f!2sManjeet%20Cold%20Drink!5e0!3m2!1sen!2sin!4v1749316884634!5m2!1sen!2sin",
      images: [
        { url: "/media/common/AL01/study.jpeg", alt: "PG Common View" },
        { url: "/media/common/AL01/bed.jpeg", alt: "PG Single occupancy Room" },
        { url: "/media/common/AL01/kitchen.jpeg", alt: "PG Double occupancy Room" },
        { url: "/media/common/AL01/laundary.jpeg", alt: "PG Triple occupancy Room" },
        { url: "/media/common/AL01/bathroom.jpeg", alt: "PG Washroom Area" },
        { url: "/media/common/AL01/lift.jpeg", alt: "PG Balcony Area" }
      ],
      amenities: [
        "Free WiFi",
        "24x7 Security",
        "Emergency Doctor",
        "4-times Meals",
        "Laundry Services",
        "Housekeeping",
        "Recreational Areas"
      ],
      roomPricing: [
        {
          type: "Double Sharing",
          price: "₹16,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        {
          type: "Double Sharing with balcony",
          price: "₹20,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        // {
        //   type: "Triple Sharing",
        //   price: "₹13,000/month",
        //   description: "AC, 4 times Meals, Laundry etc. Included"
        // }
      ]
    },




    "MY01": {
      name: "MY01 PG (Boys)",
      description: "Thiakana PG offers comfortable accommodation for students and working professionals. Located in a peaceful residential area, the PG is just 5 minutes away from North Campus . The property features modern amenities including high-speed WiFi, air conditioning in all rooms, nutritious home-cooked four time meals, and 24x7 security. We maintain strict hygiene standards with regular housekeeping and provide comfortable beds with clean linens.",
      location: "Vijay, Delhi, 110007",
      nearbyPlaces: "DRC (1 km), Miranda House (1.5 km), North Campus Metro Station (0.5 km), Kamla Nagar Market (2 km), Delhi University Library (1.2 km)",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9363183247524!2d77.1993249!3d28.6915515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdf48d96153b%3A0x71f240ceb9698a1f!2sManjeet%20Cold%20Drink!5e0!3m2!1sen!2sin!4v1749316884634!5m2!1sen!2sin",
      images: [
        { url: "/media/common/MY01/2bed.jpeg", alt: "PG Common View" },
        { url: "/media/common/MY01/room.jpeg", alt: "PG Single occupancy Room" },
        { url: "/media/common/MY01/washroom.jpeg", alt: "PG Double occupancy Room" },
        // { url: "/media/common/", alt: "PG Triple occupancy Room" },
        // { url: "/media/common/", alt: "PG Washroom Area" },
        // { url: "/media/common/", alt: "PG Balcony Area" }
      ],
      amenities: [
        "Free WiFi",
        "24x7 Security",
        "Emergency Doctor",
        "4-times Meals",
        "Laundry Services",
        "Housekeeping",
        "Recreational Areas"
      ],
      roomPricing: [
        {
          type: "Double Sharing",
          price: "₹17,000/month",
          description: "AC, 4 times Meals, Laundry etc. Included"
        },
        // {
        //   type: "Double Sharing with balcony",
        //   price: "₹20,000/month",
        //   description: "AC, 4 times Meals, Laundry etc. Included"
        // },
        // {
        //   type: "Triple Sharing",
        //   price: "₹13,000/month",
        //   description: "AC, 4 times Meals, Laundry etc. Included"
        // }
      ]
    }
  };

  const pg = pgDetails[id as keyof typeof pgDetails] || pgDetails["NI01"];
  const images = pg.images;

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
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? "bg-white" : "bg-white/50"
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
                  {pg.roomPricing.map((room, index) => (
                    <div key={index} className={`pb-4 ${index !== pg.roomPricing.length - 1 ? "border-b" : ""}`}>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">{room.type}</h3>
                        <span className="font-semibold text-primary">{room.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{room.description}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mt-6">
                  <Link to="/#book-visit">
                    <Button className="w-full bg-primary hover:bg-pgBlue-dark">Book a Visit</Button>
                  </Link>

                  <a
                    href="tel:+919289957563"
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
                  {pg.amenities.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
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
