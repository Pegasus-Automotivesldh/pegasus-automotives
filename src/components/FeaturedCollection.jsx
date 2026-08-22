const featuredItems = [
  {
    id: 1,
    title: "Porsche Custom Tuning",
    description: "High-performance styling and bespoke interior finishing.",
    image: "/Images/Cars/porsche.jfif",
  },
  {
    id: 2,
    title: "Range Rover Sport",
    description: "Ultimate luxury combined with all-terrain capability.",
    image: "/Images/Cars/range-rover-sport.jfif",
  },
  {
    id: 3,
    title: "Minimalist Water Reflection",
    description: "Sleek exterior aesthetics and refined detailing.",
    image: "/Images/Cars/range-rover-reflection.jfif",
  },
  {
    id: 4,
    title: "Custom Interior Finishes",
    description: "Premium materials matched to your exact taste.",
    image: "/Images/Cars/walnut-creek.jpg",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
