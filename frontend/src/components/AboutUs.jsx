
import { 
  HomeIcon, 
  TruckIcon, 
  TagIcon, 
  PinIcon, 
  SmileIcon 
} from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <HomeIcon className="w-12 h-12 text-red-500" />,
      title: "Ghar Ka Khana",
      description: "Authentic home-style cooking that brings the comfort of home to your table."
    },
    {
      icon: <TruckIcon className="w-12 h-12 text-red-500" />,
      title: "Free Delivery",
      description: "Enjoy delicious meals delivered right to your doorstep at no extra cost."
    },
    {
      icon: <TagIcon className="w-12 h-12 text-red-500" />,
      title: "Affordable Prices",
      description: "Tasty, nutritious meals that are kind to your wallet."
    },
    {
      icon: <PinIcon className="w-12 h-12 text-red-500" />,
      title: "Dine In",
<<<<<<< HEAD
      description: "Experience a warm, welcoming atmosphere in our restaurant."
    },
    {
      icon: <SmileIcon className="w-12 h-12 text-red-500" />,
      title: "Tiffin System",
=======
      description: "Experience a warm, welcoming atmosphere in our galley."
    },
    {
      icon: <SmileIcon className="w-12 h-12 text-red-500" />,
      title: "Tiffin Service",
>>>>>>> 96db045 (final)
      description: "Convenient daily meal subscriptions for home or office."
    }
  ];

  return (
    <section id="about" className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring the taste of home to your plate, with convenience and care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-red-50 p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-red-600 mb-4">
              Our Promise
            </h3>
            <p className="text-gray-700 text-lg">
              We're committed to bringing you delicious, home-style meals that remind you of comfort, 
              quality, and the love of home cooking. From our kitchen to your table, every meal is 
              prepared with care and passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;