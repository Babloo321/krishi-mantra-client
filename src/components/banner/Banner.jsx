import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MoveRight } from 'lucide-react';
import useProducts from '../../hooks/useProduct.js';
import { useNavigate } from 'react-router';

const Banner = () => {
  const { products } = useProducts();
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const handleProductClick = (product)=>{
    navigate('/product-details',{state:{product}})
  }
  return (
    <div className="w-full overflow-hidden md:h-auto">
      <div className="slider-container w-full px-4 sm:px-6 lg:px-12 md:pt-8 md:pb-4">
        <Slider {...settings} className="silck_slider">
          {products.map((product) => (
            <div
              
              key={product?._id}
              className="banner_slide_item w-full flex flex-col-reverse md:flex-row items-center md:gap-1 lg:gap-4"
            >
              {/* Text Section */}
              <div className="banner_text w-full md:w-1/2 px-2 md:px-6 h-auto md:min-h-[300px]">
                <p className="text-xs sm:text-sm font-linter uppercase text-gray-800">
                  {product?.name}
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-linter capitalize text-pink-900 leading-tight font-bold mb-3">
                  {product?.name} | {product?.productType}
                </p>
                <p className="text-gray-900 text-sm sm:text-base font-linter font-semibold mb-4">
                  {product?.description}
                </p>
                <button 
                onClick={()=>handleProductClick(product)}
                className="max-w-[171px] w-full flex items-center justify-center text-white gap-2 h-[48px] sm:h-[52px] bg-violet-900 cursor-pointer rounded-lg capitalize">
                  Shop Now <MoveRight />
                </button>
              </div>

              {/* Image Section */}
              <div className="banner_image relative w-full md:w-1/2 flex justify-center items-center px-2 sm:px-4 md:px-6 h-26 md:min-h-[400px]">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain h-auto rounded-md z-1"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
