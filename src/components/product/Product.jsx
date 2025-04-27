import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import useProducts from "../../hooks/useProduct";
import { useNavigate } from "react-router";
const Product = () => {
  const { products } = useProducts();
  const navigate = useNavigate();
  const [active, setActive] = useState({
    id: 0,
    product: "all",
  });

  const handleProductClick = (product)=>{
    navigate('/product-details',{state:{product}})
  }

  const productTitle = [
    {
      id: 0,
      title: "all",
      product: "all",
    },
    {
      id: 1,
      title: "newest",
      product: "newest",
    },
    {
      id: 2,
      title: "trending",
      product: "trending",
    },
    {
      id: 3,
      title: "best seller",
      product: "best_seller",
    },
  ];

  return (
    <div className="w-full mx-auto md:px-4 py-0">
      <div className="flex flex-col items-center justify-center">
      <p className='text-orange-900 text-xl md:text-2xl lg:text-4xl font-linter p-2 font-semibold md:font-bold underline text-center'>Our Products</p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6">
          {productTitle?.map((title) => (
            <button
              key={title?.id}
              onClick={() =>
                setActive({
                  id: title?.id,
                  product: title?.product,
                })
              }
              className={`text-sm sm:text-base font-black uppercase font-inter cursor-pointer transition-colors ${
                active?.id === title?.id ? "text-[#272343]" : "text-[#9a9caa]"
              }`}
            >
              {title?.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2">
        {products?.map((product) => (
          <div key={product._id} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div 
            onClick={()=>handleProductClick(product)}
            className="mb-4 relative">
              <img
                className="w-full h-[100px] sm:h-[130px] md:h-[180px] lg:h-[250px] object-cover rounded-lg"
                src={product?.image}
                alt={product?.name}
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm sm:text-base text-[#007580] capitalize font-inter font-medium">
                  {product?.name} | {product?.productType}
                </h4>
                <span className="bg-[#007580] h-6 w-6  md:h-10 md:w-10 rounded-lg flex items-center justify-center">
                  <ShoppingCart size="1.3rem" color="#fff" />
                </span>
              </div>
              <p className="text-lg text-[#272343] font-semibold">
                ₹{product?.price}
                <span className="ml-2 text-sm text-[#9a9caa] line-through">
                  ₹{product?.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
