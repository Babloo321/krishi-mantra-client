import Banner from '../../components/banner/Banner';
import Brand from '../../components/brand/Brand';
import Categories from '../../components/categories/Categories';
import Client from '../../components/client/Client';
import Delivery from '../../components/delivery/Delivery';
import Features from '../../components/features/Features';
import Product from '../../components/product/Product';
import Recent from '../../components/recent/Recent';
function Home() {
  return (
    <div className="bg-gray-300">
      <div className="w-full min-h-[550px] flex items-center justify-center bg-gray-200 ">
        <Banner />
      </div>

      {/* Delivery component */}
      <div className="delivery_component w-full min-h-[150px]">
        <Delivery />
      </div>

      {/* brand component */}
      <div className="brand_component w-full h-auto md:h-[171px] flex justify-center items-center translate-y-4 md:translate-y-22 lg:translate-y-0 px-4">
        <Brand />
      </div>

      {/* features component */}
      <div className="w-full flex items-center justify-center md:mt-52 lg:mt-10 px-4 md:px-6 lg:px-12">
        <Features />
      </div>

      {/* categories component */}
      <div className="w-full flex items-center justify-center mt-[-23px] md:mt-0 px-4 md:px-6 lg:px-12 pb-24 md:pb-6">
        <Categories />
      </div>

      {/* product component */}
      <div className="w-full flex items-center justify-center mt-[-53px] md:mt-0 px-4 md:px-6 lg:px-12 pb-24 md:pb-6">
        <Product />
      </div>

      {/* client say component  */}
      <div className="w-full flex items-center justify-center mt-[-53px] md:mt-0 md:px-6 lg:px-12 pb-24 md:pb-6">
        <Client />
      </div>

      
            {/* Recent component  */}
            <div className="w-full flex items-center justify-center mt-[-53px] md:mt-0 px-4 md:px-6 lg:px-12 pb-24 md:pb-6">
                <Recent />
            </div>
    </div>
  );
}


export default Home;
