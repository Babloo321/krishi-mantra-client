import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ShoppingCart } from 'lucide-react';
import useProducts from '../../hooks/useProduct';
import { useNavigate } from 'react-router';
const Recent = () => {
  const { products } = useProducts();
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleProductClick = (product)=>{
    navigate('/product-details',{state:{product}})
  }
  return (
    <div className="w-full bg-gray-300 overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-xl md:text-3xl lg:text-4xl text-justify text-orange-900 font-linter font-semibold md:font-bold underline">
          Add Recent Products
        </p>
        {products?.length > 0 ? (
          <div className="features_slider w-full">
            <Slider {...settings}>
              {products.map((feature, index) => (
                <div key={index} className="p-3">
                  <div 
                  onClick={()=>handleProductClick(feature)}
                  className="bg-gray-100 rounded-xl shadow hover:shadow-lg transition-all h-[250px] md:h-[300px] lg:h-[350px] flex flex-col">
                    <img
                      src={feature?.image}
                      alt={feature?.name}
                      className="w-full h-[180px] object-cover rounded-t-xl"
                    />
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[#007580] text-sm font-medium capitalize">
                          {feature?.name} | {feature?.productType} | {feature?.brand}
                        </h4>
                        <span className="bg-[#007580] h-[36px] w-[36px] rounded-lg flex items-center justify-center">
                          <ShoppingCart size="1.2rem" color="#fff" />
                        </span>
                      </div>
                      <p className="text-sm text-orange-600">{feature?.nutrientContent}</p>
                      <p className="text-lg text-[#272343] font-semibold mt-2">
                        ₹{feature?.price}
                        <span className="ml-2 text-sm text-[#9a9caa] line-through">
                          ₹{feature?.price}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">No featured products available.</p>
        )}
      </div>
    </div>
  );
};

export default Recent;
