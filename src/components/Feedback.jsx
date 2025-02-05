import { useState } from 'react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
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
    console.log('Feedback submitted:', formData);
  };

  return (
    <section id = "feedback">
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