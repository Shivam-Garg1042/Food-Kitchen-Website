import logoI from "../assets/logo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Akash',
     
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
    image: logoI,
    rating: 5
  },
  {
    name: 'GAurav',
     
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
    image: logoI,
    rating: 5
  },
  {
    name: 'Yadnesh',
     
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
    image: logoI,
    rating: 5
  },
  {
    name: 'Shivam',
     
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
    image: logoI,
    rating: 3
  },
  {
    name: 'Ritesh',
     
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
    image: logoI,
    rating: 5
  },
  
  // Add more testimonials
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-gray-600">What Are They <span className="text-primary">Saying About Us</span></p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    {/* <p className="text-gray-600">{testimonial.position}</p> */}
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;