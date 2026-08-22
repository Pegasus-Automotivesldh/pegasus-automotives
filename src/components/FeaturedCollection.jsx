function FeaturedCollection() {
  const collectionItems = [
    {
      title: "Bentley Continental GT",
      description: "Custom matte finish grand tourer paired with superior presence.",
      image: "/bentley.jpg.jpg"
    },
    {
      title: "BMW X7 M60i (Larte Performance)",
      description: "Aggressive body kit enhancements combined with peerless luxury.",
      image: "/BMW X7 M60i G07 with Larte Performance body kit….jpg"
    },
    {
      title: "Range Rover SV (British Racing Green)",
      description: "Minimalist luxury with timeless elegance and modern stance.",
      image: "/Range Rover SV British Racing Green___.jpg"
    },
    {
      title: "Range Rover Sport",
      description: "Dynamic performance combined with absolute comfort.",
      image: "/Range Rover Sport (2).jpg"
    },
    {
      title: "Mercedes-AMG G-Wagon",
      description: "Bespoke custom finish and iconic cross-country capability.",
      image: "/gwagon.jpg.jpg"
    }
  ];

  return (
    <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="f-mono text-xs tracking-[0.3em] uppercase mb-3 text-[#D8B45E]">Showcase</p>
        <h2 className="f-display text-3xl md:text-5xl font-light">Featured Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collectionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="pa-card rounded-2xl overflow-hidden flex flex-col group"
          >
            <div className="relative h-72 overflow-hidden bg-[#0A0A0B]">
              <img
                src={item.image}
                alt={item.title}
                onError={(e) => {
                  // Fallback if image path fails to load
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="f-display text-xl font-light mb-2">{item.title}</h3>
                <p className="text-xs text-[#98969E] font-light leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
