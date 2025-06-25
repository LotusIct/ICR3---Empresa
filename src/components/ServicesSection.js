export default function ServicesSection() {
  const services = [
    {
      title: "Balanças",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "⚖️"
    },
    {
      title: "Temperatura",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🌡️"
    },
    {
      title: "Massa Específica",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "⚗️"
    },
    {
      title: "Viscosidade Cinemática",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "🧪"
    }
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Nossos Serviços</h2>
        <p className="text-center text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in euismod erat.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <div className="text-5xl mr-6">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
