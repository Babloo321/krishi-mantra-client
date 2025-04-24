import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { User } from "lucide-react";

const Client = () => {
  const clientSays = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget...",
      name: "John Doe",
      position: "CEO, Company",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget...",
      name: "Jane Smith",
      position: "CTO, Company",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget...",
      name: "Mark Taylor",
      position: "CFO, Company",
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget...",
      name: "Emily Clark",
      position: "CMO, Company",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 lg:px-8 py-12 bg-gray-300">
<p className='text-orange-900 text-xl md:text-2xl lg:text-4xl font-linter p-2 font-semibold md:font-bold underline text-center'>What Our Clients Say About Us</p>

      <div className="slider-container max-w-7xl mx-auto">
        <Slider {...settings}>
          {clientSays?.map((client, index) => (
            <div key={index} className="px-3 flex flex-col md:flex-row">

              <div className="bg-gray-200 p-6 sm:p-8 rounded-xl shadow hover:shadow-md transition-all min-h-[280px] flex flex-col justify-between">

                <p className="text-sm sm:text-base text-[#636270] font-inter mb-5 line-clamp-6">
                  {client?.description}
                </p>

                <div className="flex items-center gap-4">
                  <User size="3rem" className="text-[#007580]" />
                  <div>

                    <h4 className="text-base sm:text-lg font-semibold text-[#272343] capitalize">
                      {client?.name}
                    </h4>

                    <p className="text-sm text-[#9a9caa] font-normal capitalize">
                      {client?.position}
                    </p>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Client;
