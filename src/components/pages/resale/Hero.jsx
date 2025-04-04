'use client';

import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    type: "Villa",
    price: "INR 80,000,00",
    description: "Branded | Swimming Pool | Luxury...",
    location: "India - Mumbai",
    beds: 7,
    baths: 8,
    size: "11,737 SQ.FT",
    images: ["/resale/villa1.jpg", "/resale/villa2.jpg"],
  },
  {
    id: 2,
    type: "Land/Plot",
    price: "INR 6,00,000",
    description: "Residential Plot | Munnar...",
    location: "India - Kerala",
    beds: "-",
    baths: "-",
    size: "22,707 SQ.FT",
    images: ["/resale/land1.jpg", "/resale/land2.jpg"],
  },
  {
    id: 3,
    type: "Townhouse",
    price: "INR 50,000,00",
    description: "Investors Deal | Hinjewadi...",
    location: "India - Pune",
    beds: 5,
    baths: 6,
    size: "3,178 SQ.FT",
    images: ["/resale/townhouse1.jpg", "/resale/townhouse2.jpg"],
  },
  {
    id: 4,
    type: "Apartment",
    price: "INR 40,000,00",
    description: "Premium Residence | Mg Road...",
    location: "India - Banglore",
    beds: 1,
    baths: 2,
    size: "1,045 SQ.FT",
    images: ["/resale/apartment1.jpg", "/resale/apartment2.jpg"],
  },
];

const Hero = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-12">
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Resale <span className="text-red-600">Properties</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
