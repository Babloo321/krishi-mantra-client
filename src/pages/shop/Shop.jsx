// components/Shop.tsx
import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';
import useProducts from '../../hooks/useProduct';
import Features from '../../components/features/Features';
import Recent from '../../components/recent/Recent'
const Shop = () => {
  const { products } = useProducts();
  return (
    <div className="px-4 md:px-6 lg:px-10 py-8 w-full bg-gray-300 mx-auto pt-20 md:pt-45">
      <h1 className="text-3xl font-bold text-center mb-8 text-orange-900">Shop for Seeds & Fertilizers</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="text-gray-500">{product.productType}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold text-green-600">{product.price}</span>
                <div className="flex gap-2">
                  <button className="btn btn-sm btn-primary">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                  <button className="btn btn-sm btn-ghost">
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
        <Features />
        <Recent />
    </div>
  );
};

export default Shop;
