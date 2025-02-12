
import { useState, useEffect } from 'react';
import axios from 'axios';


const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });


  const [showModal, setShowModal] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('https://mamtagalley.onrender.com/api/feedback/submit', formData);
      
      // Show modal
      setShowModal(true);

      // Reset form 
      setFormData({
        name: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Automatically close modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 3000);

    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <section id="feedback">
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <svg 
              className="mx-auto mb-4 w-16 h-16 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <h2 className="text-2xl font-bold mb-2 text-green-600">
              Feedback Submitted
            </h2>
            <p className="text-gray-600">
              Thank you for your feedback! We'll get back to you soon.
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-2">
        <h1 className="text-center text-4xl font-bold mb-4">
          Send Us <span className="text-red-500">Feedback</span>
        </h1>

        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Feedback"
              className="w-full px-4 py-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Feedback;