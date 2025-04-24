import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useProducts from '../../hooks/useProduct';
const Categories = () => {
  const { products } = useProducts();

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          centerPadding: '60px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          centerPadding: '20px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-gray-300 px-2 md:px-8 lg:px-12">
      <p className="text-xl md:text-3xl lg:text-4xl text-justify text-orange-900 font-linter font-semibold md:font-bold underline mb-8">
        Top Categories
      </p>
      <div className="slider-container features_slider w-full">
        <Slider {...settings}>
          {products?.map((category, index) => (
            <div key={index} className="px-3">
              <div className="relative rounded-lg overflow-hidden h-[300px] md:h-[380px] lg:h-[424px]">
                <img
                  className="w-full h-full object-cover"
                  src={category?.image}
                  alt={category?.name}
                />
                <div className="absolute bottom-0 left-0 w-full h-24 md:h-20 bg-black bg-opacity-50 flex flex-col justify-center p-4">
                  <h4 className="text-base md:text-lg lg:text-xl text-white font-semibold capitalize mb-1">
                    {category?.name}
                  </h4>
                  <p className="text-xs md:text-sm text-white capitalize font-normal">
                    {category?.productType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
