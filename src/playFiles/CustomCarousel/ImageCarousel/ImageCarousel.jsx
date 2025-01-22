import React, { useEffect, useState } from 'react';

const ImageCarousel = () => {
  const [productList, setProductList] = useState([]);
  const [pordImages, setProdImages] = useState([]);
  const [carousleImgList, setCarousleImgList] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products', { method: 'GET' });
    const data = await response.json();
    setProductList(data.products);

    setProdImages(data.products.flatMap((product) => product.images));

    setCarousleImgList(data.products.flatMap((product) => product.images).slice(7, 13));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8">
      {/* Carousel Content */}
      <div className="flex items-center justify-between w-full max-w-4xl">
        <button
          disabled={imageIndex === 0}
          className={`p-3 rounded-lg text-white ${
            imageIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
          }`}
          onClick={() => setImageIndex(imageIndex - 1)}
        >
          Previous
        </button>

        <div className="w-[300px] h-[400px] flex items-center justify-center border-4 border-blue-500 rounded-lg shadow-lg">
          <img className="object-cover w-full h-full rounded-md" src={carousleImgList[imageIndex]} alt="carousel-item" />
        </div>

        <button
          disabled={imageIndex === carousleImgList.length - 1}
          className={`p-3 rounded-lg text-white ${
            imageIndex === carousleImgList.length - 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={() => setImageIndex(imageIndex + 1)}
        >
          Next
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center gap-3">
        {carousleImgList.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full cursor-pointer transition-all duration-300 ${
              index === imageIndex ? 'bg-blue-600 scale-125' : 'bg-gray-400 hover:scale-110'
            }`}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
