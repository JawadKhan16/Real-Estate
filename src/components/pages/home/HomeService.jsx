import { FaHome, FaMoneyBillWave, FaHandshake } from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="text-orange-500 text-4xl" />,
    title: "Find A Home",
    description:
      "Discover your perfect home with our exclusive listings. We offer a range of high-end homes to match your lifestyle.",
  },
  {
    icon: <FaMoneyBillWave className="text-orange-500 text-4xl" />,
    title: "Find Rental Properties",
    description:
      "Browse top rental listings and find your dream apartment or villa with ease. Hassle-free renting experience.",
  },
  {
    icon: <FaHandshake className="text-orange-500 text-4xl" />,
    title: "Sell A Home",
    description:
      "Sell your property at the best prices with our expert guidance and extensive market knowledge.",
  },
];

const HomeService = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-orange-500 font-semibold">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Our Main Focus
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="bg-orange-100 p-4 rounded-full">{service.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;
