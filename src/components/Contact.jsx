import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id = "contact">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold mb-4">
        Need Help? <span className="text-red-500">Contact Us</span>
      </h1>

      {/* <div className="grid md:grid-cols-2 gap-8 mt-12"> */}
        {/* Contact Information Section */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="contact-info space-y-6">
          <div className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Address</h4>
                <p className="text-gray-600">New Manglapuri, Sultanpur, Delhi, 110030</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600">info@example.com</p>
              </div>
            </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-600">91-8368080096</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-red-500 text-white rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">Opening Hours</h4>
                <p className="text-gray-600">Mon-Sat: 11AM - 23PM, Sunday: Closed</p>
              </div>
            </div>
          </div>
          </div>
          {/* Google Maps Embed */}
          <div className="mt-8">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d438.28999854200293!2d77.1679588276987!3d28.500018899999983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e411c43aebf%3A0xfd3681fae42c2edd!2s113%2C%20Mangla%20Puri%20Main%20Rd%2C%20New%20Manglapuri%2C%20Manglapuri%20Village%2C%20Sultanpur%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1738776966148!5m2!1sen!2sin" 
              className="w-full h-64 border-0 rounded-lg"
              allowFullScreen 
            />
          </div>
        </div>

        
    </div>
    </section>
  );
};

export default Contact; 