import React, { useState,useEffect } from "react";
import useProducts from '../../hooks/useProduct.js';
import useCart from "../../hooks/useCart";
const AddToCartPopup = ({ product, onClose }) => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const [clickedProduct,setClickedProduct] = useState({});
  useEffect(()=>{
    setClickedProduct({});
  },[]);

  if (!product) return null;
  const handleAddToCart = (product)=>{
    console.log("Id: ",product._id)
    addToCart(product._id);
    setClickedProduct(product);
  }
  return (
    <div className="fixed top-60 left-0 right-0 bottom-10 z-50 bg-gray-200 shadow-lg px-4 flex flex-col border-b h-screen overflow-y-auto overflow-x-hidden scrollbar-hide">

    <div className="sticky top-0 left-0 right-0 flex items-start justify-between bg-gray-900 px-4">
    <div className="flex items-center gap-3">
        <img
          src={clickedProduct ? (clickedProduct.image) : (product.image)}
          alt={clickedProduct ? (clickedProduct.name) : (product.name)}
          className="w-20 h-14 object-cover rounded border-[2px] border-indigo-50"
        />
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center gap-1">
            <span className="text-green-600 font-bold text-lg">✓ Added to cart</span>
          </div>

          {/* Progress Bar and Price */}
          <div className="flex items-center gap-4 mt-0">
            <div className="h-2 bg-green-500 rounded w-32 md:w-48"></div>
            <p className="text-gray-300 font-semibold text-sm md:text-base">
              ₹{clickedProduct ? (clickedProduct.price) : (product.price)}
            </p>
          </div>

          {/* Free Delivery */}
          <p className="text-sm text-gray-200 mt-0">
            Your order is eligible for <span className="text-blue-600 font-semibold">FREE Delivery</span>.
          </p>
        </div>
      </div>

     {/* Close Button */}
     <button
        onClick={onClose}
        className="text-3xl font-bold cursor-pointer text-red-500 hover:text-gray-200"
      >×</button>
    </div>
     
    <h2 className="text-center font-linter text-3xl font-bold  pt-4">Available Product</h2>
    <div className="pt-5  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-60">
  {
    products.map((product) => (
      <div
        key={product._id}
        className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover"
        />

        {/* Product Details */}
        <div className="flex flex-col p-3 flex-grow">
          <p className="font-semibold text-sm text-gray-800 mb-1">
            {product.name} | {product.brand} | {product.productType}
          </p>
          <p className="text-gray-600 text-xs flex-grow">
            {product.description.length > 60 ? product.description.slice(0, 60) + "..." : product.description}
          </p>

          {/* Add to Cart Button */}
          <button 
          onClick={()=>handleAddToCart(product)}
          className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded text-sm">
            Add To Cart
          </button>
        </div>
      </div>
    ))
  }
</div>

     
    </div>
  );
};

export default AddToCartPopup;
