import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageCarousel = ({ images, currentImage, setCurrentImage }) => {
  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-64">
      <img
        src={images[currentImage]}
        alt="Property"
        className="w-full h-full object-cover"
      />
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
        <ChevronLeft size={20} />
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white">
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default ImageCarousel;
