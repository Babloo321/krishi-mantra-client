import React from 'react';
import { Leaf, PackageCheck, ShoppingCart, Users } from 'lucide-react';

const features = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-green-600" />,
    title: 'Buy Seeds & Fertilizers',
    description: 'Access a variety of high-quality agricultural products at fair prices.',
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-green-600" />,
    title: 'Sell Your Products',
    description: 'Farmers can list their own crops and products for direct sale.',
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: 'Connect With Buyers',
    description: 'Reach wholesale buyers and individual consumers easily.',
  },
  {
    icon: <Leaf className="w-8 h-8 text-green-600" />,
    title: 'Sustainable Farming',
    description: 'Promote eco-friendly and organic farming practices.',
  },
];

const About = () => {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-10 w-full mx-auto bg-gray-300 pt-25 pb-20 md:pb-10 md:pt-45">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-orange-900">About Our Platform</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Our mission is to empower farmers by giving them access to quality agricultural inputs
        and a fair marketplace to sell their produce directly to consumers and businesses.
      </p>

      {/* Features Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="card bg-base-100 shadow-md text-center p-6 hover:shadow-xl transition">
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="card bg-green-100 shadow-lg text-center p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Join the Agricultural Revolution</h2>
        <p className="text-gray-700 mb-6">
          Whether you're a farmer looking to sell your crops or a buyer searching for quality produce,
          our platform brings you together.
        </p>
        <button className="btn btn-success btn-wide">Get Started</button>
      </div>
    </div>
  );
};

export default About;
