"use client";

import OptimizedImage from '../ui/OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: 'Devanshu Yadav',
    content: `I visited Classico Barbershop today, and Rad gave me an amazing experience. We had a great chat, and he provided me with the best haircut I've had in Mississauga. He listened carefully to my preferences and helped me achieve a fresh new hairstyle. The ambiance and interior of the shop are fantastic, making it a top-notch place to visit. Highly recommended! Thank you, Rad!`,
  },
  {
    id: 2,
    name: 'Abdul W Khan',
    content: `I was looking for a barbershop while visiting Mississauga and came across Clasico on Google. I gave them a call, and right from the start, I could tell these guys were the real deal.\n\nThey offered all the services I was looking for. When I walked in, I was greeted right away, the shop is beautiful, modern, and incredibly welcoming. They even offered me cold water and coffee. The whole vibe of the place is just super cool, I honestly wanted to hang out there.\n\nI got my line-up and beard dye done by Neymar, and let me tell you, this guy is not only cool but also super friendly. He went above and beyond to make sure I was comfortable and happy, even adjusting the chair to make everything just right. It was one of the best barber experiences I've had.\n\nAwesome shop, great staff, and a chill atmosphere. This place is the real deal, 10/10, I'll definitely be back for a trim next week!`,
  },
  {
    id: 3,
    name: 'Burhanuddin Ameen',
    content: `After a long time I got to treat myself. And Ali did not disappoint. He made me feel like a celebrity. The care and attention to detail was so good. They really pampered me. I feel so fresh and ready for a lunch date! Will definitely come back!`,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-4 md:mb-6">
          What Our Clients Say
        </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
            Hear from our valued clients about their experiences at Clasico Barbershop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4 md:mb-6">
                <h3 className="text-white font-semibold text-base md:text-lg mb-2">{testimonial.name}</h3>
                {/* Star Rating */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-gold fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed whitespace-pre-line">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Mobile-optimized CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-display text-white mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-6">
              Join our satisfied clients and discover the Clasico difference
            </p>
            <button 
              onClick={() => window.open('https://booking.cojilio.com/clasicobarbershop', '_blank')}
              className="btn-primary w-full sm:w-auto touch-manipulation"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 