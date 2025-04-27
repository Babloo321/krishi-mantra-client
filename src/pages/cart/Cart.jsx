import React from 'react';
import useCart from '../../hooks/useCart.js';
import useAuth from '../../hooks/useAuth.js';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate = useNavigate();
  const { products, totalItems, removeFromCart } = useCart();
  const { user } = useAuth()
  const role = user.role;
  const handleBuyNow = (e,pro) =>{
    e.stopPropagation();
    navigate("/product/buy-now",{ state: { pro } })
  }

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20 pt-20 md:pt-40"> {/* Added pb-28 for Footer */}
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart ({totalItems} items)</h2>

      {products.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {products.map((item, index) => {
            const product = item.productId;
            return (
              <div
                key={item._id || index}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border rounded-xl shadow-sm bg-white w-full"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-contain rounded-lg flex-shrink-0"
                />
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-xl font-semibold truncate">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.productType}</p>
                  <p className="mt-1 text-sm text-gray-700 break-words">
                    {product.description}
                  </p>
                  <p className="mt-2 font-bold text-green-600">₹{product.price}</p>
                </div>
                <div className="text-center md:w-20 w-full">
                  <p className="text-sm text-gray-600">Qty</p>
                  <p className="text-lg font-semibold">{item.quantity}</p>
                </div>
                <div className="flex flex-col gap-2 mt-4 md:mt-0 w-full md:w-32">
                  <button
                    onClick={(e) => handleBuyNow(e,product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                  >
                    {role === 'farmer'
                    ? product.productType === 'seed' ||
                      product.productType === 'fertilizer'
                      ? 'Buy Now'
                      : 'Sell Now'
                    : 'Buy Now'}
                  </button>
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
