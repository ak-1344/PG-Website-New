
import React from "react";

const RoomsSection = () => {
  const roomTypes = [
    {
      type: "Single Occupancy",
      price: "₹12,000",
      facilities: "AC, Meals, Laundry",
    },
    {
      type: "Double Sharing",
      price: "₹9,000",
      facilities: "Meals, Laundry",
    },
    {
      type: "Triple Sharing",
      price: "₹7,000",
      facilities: "Meals Only",
    },
  ];

  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Room Types and Pricing</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-primary">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Room Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Price per Month</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Facilities Included</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {roomTypes.map((room, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{room.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{room.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{room.facilities}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
