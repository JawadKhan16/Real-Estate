import { Phone, Mail, MessageSquare } from "lucide-react";

const Details = ({ property }) => {
  return (
    <div className="p-4">
      <p className="text-sm text-gray-600">{property.type}</p>
      <h2 className="text-2xl font-bold">{property.price}</h2>
      <p className="text-gray-500 text-sm">{property.description}</p>

      <p className="flex items-center text-gray-700 mt-2">
        📍 {property.location}
      </p>
      <p className="text-gray-500 text-sm mt-1">
        🛏 {property.beds} Bed | 🛁 {property.baths} Bath | 📏 {property.size}
      </p>

      <div className="flex items-center gap-3 mt-4">
        <button className="bg-gray-200 p-2 rounded-full">
          <Phone size={18} />
        </button>
        <button className="bg-green-500 p-2 rounded-full text-white">
          <MessageSquare size={18} />
        </button>
        <button className="bg-gray-200 p-2 rounded-full">
          <Mail size={18} />
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-lg ml-auto">
          BOOK A VIEWING
        </button>
      </div>
    </div>
  );
};

export default Details;
