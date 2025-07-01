"use client";

const services = [
  {
    title: "Classic Cut",
    description: "Traditional barbering techniques for a timeless look",
    price: "$30",
    icon: "✂️",
  },
  {
    title: "Beard Trim",
    description: "Precision shaping and styling for your facial hair",
    price: "$25",
    icon: "🧔",
  },
  {
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "$35",
    icon: "🪒",
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete grooming package for hair and beard",
    price: "$50",
    icon: "✨",
  },
  {
    title: "Kids Cut",
    description: "Special attention for our younger clients",
    price: "$25",
    icon: "👶",
  },
];

export default function Services() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-gold">
            Our Services
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Experience the art of grooming with our premium services, delivered by master barbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border-2 border-transparent hover:border-gold rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 animate-fade-in group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-2xl font-display mb-2 text-gold font-bold">{service.title}</h3>
              <p className="text-white/80 mb-6 text-base font-medium min-h-[56px]">{service.description}</p>
              <div className="flex items-center justify-between w-full mt-auto">
                <span className="text-gold font-bold text-lg">{service.price}</span>
                <button 
                  className="ml-auto btn-primary px-6 py-2 text-base font-semibold rounded-lg shadow hover:bg-gold/90 transition-colors duration-300"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 