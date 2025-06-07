import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface LocationCardProps {
  id: string;
  name: string;
  image: string;
  address: string;
  nearbyPlaces: string;
}

const LocationCard = ({ id, name, image, address, nearbyPlaces }: LocationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={`${name} PG Accommodation`}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">{address}</p>
        <p className="text-sm text-gray-500 mb-4">Near: {nearbyPlaces}</p>
        <Link to={`/pg/${id}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 transition-transform duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">View Details</Button>
        </Link>
      </div>
    </div>
  );
};

const locations = [ 
  {
    id: "NI01",
    name: "NI01 PG (Boys)",
    image: "media/common/roop-nagar/common.jpeg",
    address: "Roop Nagar, Delhi",
    nearbyPlaces: "Hansraj College, KMC, North Campus"
  },
  {
    id: "PH01",
    name: "PH01 PG (Girls)",
    image: "media/common/PixelHome/2-bed.jpeg",
    address: "Vijay Nagar, Delhi",
    nearbyPlaces: "Miranda House, North Campus"
  },
  {
    id: "NI02",
    name: "NI02 PG (Boys)",
    image: "media/common/NI02/common.jpeg",
    address: "Roop Nagar, Delhi",
    nearbyPlaces: "Hansraj College, KMC, North Campus"
  },
  {
    id: "AL01",
    name: "AL01 PG (Girls)",
    image: "media/common/AL01/study.jpeg",
    address: "VijayNagar, Delhi",
    nearbyPlaces: "DRC, Miranda House, North Campus"
  },
  {
    id: "MY01",
    name: "MY01 PG (Boys)",
    image: "media/common/MY01/room.jpeg",
    address: "VijayNagar, Delhi",
    nearbyPlaces: "DRC, Miranda House, North Campus"
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">PG Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              id={location.id}
              name={location.name}
              image={location.image}
              address={location.address}
              nearbyPlaces={location.nearbyPlaces}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
