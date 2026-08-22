export default function FeaturedCollection() {
  const cars = [
    { name: "Land Rover Defender", image: "/Images/cars/defender.jpg" },
    { name: "Mercedes-Maybach", image: "/Images/cars/maybach.jpg" },
    { name: "Porsche 911 Turbo S", image: "/Images/cars/porsche-911.jpg" },
    { name: "Range Rover Gold", image: "/Images/cars/range-rover-gold.jpg" },
    { name: "Range Rover Mountain Drive", image: "/Images/cars/range-rover-mountain.jpg" },
    { name: "Maybach Emblem", image: "/Images/cars/maybach-emblem.jpg" },
  ];

  return (
    <section className="py-12 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cars.map((car, index) => (
          <div key={index} className="bg-black rounded-lg shadow-lg overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{car.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
