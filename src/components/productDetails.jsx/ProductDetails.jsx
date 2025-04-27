import React, { useState} from "react";
import { useLocation } from "react-router";
import AddToCartPopup from "../addToCartPopup/AddToCartPopup";
import useCart from '../../hooks/useCart.js';
const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useCart();
  const [showCartPage, setShowCartPage] = useState(false);

  const handleAddToCart = (id) => {
    addToCart(id);
    setShowCartPage(true);
  };
  return (
    <div className="p-4 md:p-6 bg-gray-100 min-h-screen py-20 pb-25  md:py-50">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Images */}
        <div className="w-full md:w-1/2 space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg object-cover max-h-[400px] md:max-h-[500px]"
          />
          {/* Thumbnails */}
          <div className="flex space-x-2 overflow-x-auto">
            {Array.from({ length: 5 }).map((_, idx) => (
              <img
                key={idx}
                src="https://via.placeholder.com/80"
                alt={`Thumbnail ${idx}`}
                className="w-20 h-20 flex-shrink-0 rounded-lg object-cover border hover:border-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Title */}
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 capitalize">
            {product.name} {product.productType} {product.brand}
          </h1>

          {/* Price and Side Image */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-2xl md:text-3xl font-bold text-red-600">
              ₹{product.price}
              <span className="text-gray-500 text-lg line-through ml-2">
                ₹{product.price + 100}
              </span>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full md:w-60 h-40 md:h-48 rounded-lg object-cover"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
          {/* here i want to show popup on add to cart button clicked */}
            <button 
             onClick={()=>handleAddToCart(product._id)}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-lg">
              Add to Cart
            </button>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
              Buy Now
            </button>
          </div>
{
  showCartPage && <AddToCartPopup product={product} onClose={() => setShowCartPage(false)} />
}
          {/* Description */}
          <div className="pt-4">
            <h2 className="text-lg md:text-2xl font-bold mb-2">Product Details</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm md:text-base">
              <li>Name: {product.name}</li>
              <li>Category: {product.productType}</li>
              <li>Brand: {product.brand}</li>
              <li>Life: {product.maxShelfLife}</li>
              <li>Nutrient: {product.nutrientContent}</li>
              <li>Country Of Origin: {product.countryOfOrigin}</li>
              <li>About Product: {product.description}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Styling Ideas */}
      <div className="mt-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center md:text-left">Styling Ideas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="space-y-2 text-center">
              <img
                src="https://via.placeholder.com/200"
                alt="Styling Item"
                className="w-full rounded-lg object-cover"
              />
              <p className="font-semibold text-sm md:text-base">Item {item}</p>
              <p className="text-gray-500 text-sm md:text-base">₹2,399</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
