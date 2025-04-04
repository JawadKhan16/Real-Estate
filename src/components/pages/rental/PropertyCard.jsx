import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import PropertyDetails from "./Details";

const PropertyCard = ({ property }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <ImageCarousel 
        images={property.images} 
        currentImage={currentImage} 
        setCurrentImage={setCurrentImage} 
      />
      <PropertyDetails property={property} />
    </div>
  );
};

export default PropertyCard;
