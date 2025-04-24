import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { FLEET_IMAGES } from '../constants/images';

interface Image {
  url: string;
  alt: string;
}

const ImageCard = ({ image }: { image: Image }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
      {isError ? (
        <div className="w-full h-64 flex items-center justify-center text-gray-500">
          <ImageOff className="w-12 h-12" />
        </div>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={image.url}
            alt={image.alt}
            className={`w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsError(true);
              setIsLoading(false);
            }}
          />
        </>
      )}
    </div>
  );
};

const images: Image[] = [
  {
    url: FLEET_IMAGES.hero,
    alt: "BC Carrier DAF truck with flatbed on construction site"
  },
  {
    url: FLEET_IMAGES.fleet,
    alt: "BC Carrier fleet of DAF trucks lined up at dusk"
  },
  {
    url: FLEET_IMAGES.international,
    alt: "BC Carrier DAF truck with Talay Logistics trailer"
  },
  {
    url: FLEET_IMAGES.premium,
    alt: "BC Carrier DAF truck with flatbed trailer"
  }
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {images.map((image, index) => ( 
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
}