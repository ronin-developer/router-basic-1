import React, { useState } from "react";

function SingleProductComponent({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleCurrentImage = (index) => {
    setCurrentImage(index);
  };

  if (!product || !product.images || product.images.length === 0) {
    return <div>No product data available</div>;
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-6 flex-1">
        <img
          className="w-[65%]"
          src={product.images[currentImage]}
          alt={product.title}
        />
        <div className="flex gap-3">
          {product.images.map((el, i) => {
            return (
              <img
                key={i}
                src={el}
                className="w-28 border border-gray-600 object-contain"
                onClick={() => handleCurrentImage(i)}
              />
            );
          })}
        </div>
      </div>
      <div className="content flex-1 p-8 border border-grey-200 rounded-xl">
        <h3>{product.title}</h3>
        <p>$ {product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default SingleProductComponent;
