'use client';

import PropertyCard from "./PropertyCard";

const properties = [
  {
    id: 1,
    type: "Villa",
    price: "INR 60,000",
    description: "Branded | Swimming Pool | Luxury...",
    location: "India - Mumbai",
    beds: 7,
    baths: 8,
    size: "8,600 SQ.FT",
    images: ["/rental/villa1.jpg", "/rental/villa2.jpg"],
  },
  {
    id: 2,
    type: "Apartment",
    price: "INR 40,000",
    description: "Residential Apartment | Munnar...",
    location: "India - Kerala",
    beds: "3",
    baths: "2",
    size: "2,500 SQ.FT",
    images: ["/rental/apartment1.jpg", "/rental/apartment2.jpg"],
  },
  {
    id: 3,
    type: "Townhouse",
    price: "INR 55,000",
    description: "Investors Deal | Hinjewadi...",
    location: "India - Pune",
    beds: 5,
    baths: 6,
    size: "3,178 SQ.FT",
    images: ["/rental/apartment3.jpg", "/rental/apartment4.jpg"],
  },
  {
    id: 4,
    type: "Villa",
    price: "INR 80,000",
    description: "Premium Residence | Mg Road...",
    location: "India - Banglore",
    beds: 1,
    baths: 2,
    size: "1,045 SQ.FT",
    images: ["/rental/villa3.jpg", "/rental/villa4.jpg"],
  },
];

const Hero = () => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-12">
      <h1 className="text-4xl font-bold text-center text-black mb-8">
        Rental <span className="text-red-600">Properties</span>
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
