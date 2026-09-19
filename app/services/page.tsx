export default function ServicesPage() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description:
        "Professional websites, e-commerce stores and custom web applications.",
    },
    {
      icon: "📱",
      title: "App Development",
      description:
        "Modern Android applications with beautiful UI and powerful features.",
    },
    {
      icon: "🤖",
      title: "AI Solutions",
      description:
        "AI chatbots, automation, prompt engineering and AI integrations.",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "Logos, banners, social media posts and complete branding.",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description:
        "SEO, Google Ads, Facebook Ads and social media marketing.",
    },
    {
      icon: "💻",
      title: "IT Consulting",
      description:
        "Professional technology consulting and technical support.",
    },
    {
      icon: "🔒",
      title: "Cyber Security",
      description:
        "Protect your business with modern security solutions.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Cloud hosting, deployment, backups and server management.",
    },
    {
      icon: "🎓",
      title: "Training & Internship",
      description:
        "Industry-oriented training programs and internship opportunities.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Our Services
          </h1>

          <p className="mt-6 text-xl text-blue-100">
            Professional IT Solutions for Students, Businesses and
            Organizations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">{service.icon}</div>

              <h2 className="text-2xl font-bold mt-6">
                {service.title}
              </h2>

              <p className="text-gray-600 mt-4">
                {service.description}
              </p>

              <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Project?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Contact Rishi Infotech today and let's build something amazing
            together.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}