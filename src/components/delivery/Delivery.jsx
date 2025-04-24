import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
  return (
    <div className="container mx-auto bg-gray-200 shadow-md p-4 rounded-b-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-6 gap-2 md:gap-4">
        <div className="delivery_wrapper shadow-md md:shadow-0 px-2 md:px-0">
          <div className="flex items-center gap-4">
            <Percent className="text-3 md:text-6 lg:text-4xl text-gray-900" />
            <div>
              <h4 className="text-base text-[#272343] font-inter font-medium mb-2.5">Discount</h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">Every week new sales</p>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper shadow-md md:shadow-0 px-2 md:px-0">
          <div className="flex items-center gap-4">
            <Truck className="text-3 md:text-6 lg:text-4xl text-gray-900" />
            <div>
              <h4 className="text-base text-[#272343] font-inter font-medium mb-2.5">Free Delivery</h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">100% Free for all orders</p>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper shadow-md md:shadow-0 px-2 md:px-0">
          <div className="flex items-center gap-4">
            <Clock3 className="text-3 md:text-6 lg:text-4xl text-gray-900" />
            <div>
              <h4 className="text-base text-[#272343] font-inter font-medium mb-2.5">Great Support 24/7</h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">We care your experiences</p>
            </div>
          </div>
        </div>

        <div className="delivery_wrapper shadow-md md:shadow-0 px-2 md:px-0">
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-3 md:text-6 lg:text-4xl text-gray-900" />
            <div>
              <h4 className="text-base text-[#272343] font-inter font-medium mb-2.5">Secure Payment</h4>
              <p className="text-sm text-[#9a9caa] font-inter font-normal">100% Secure Payment Method</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
