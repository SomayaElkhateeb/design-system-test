// Muhammed Abdelhakeem

import React, { useState } from "react";

const CartProductCard = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleSliderChange = (index) => {
    setImageIndex(index);
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-64">
        <img
          className="w-full h-full object-cover object-center"
          src={product.images[imageIndex]}
          alt={product.name}
        />
        {product.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between">
            <button
              className="text-white p-2 bg-gray-800 bg-opacity-50"
              onClick={() =>
                handleSliderChange(
                  (imageIndex - 1 + product.images.length) %
                    product.images.length
                )
              }
            >
              &lt;
            </button>
            <button
              className="text-white p-2 bg-gray-800 bg-opacity-50"
              onClick={() =>
                handleSliderChange((imageIndex + 1) % product.images.length)
              }
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-gray-500">${product.price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
