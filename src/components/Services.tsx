import Reveal from "./Reveal";

export default function Services() {
  const services = [
    {
      title: "Premium Websites",
      description:
        "Modern websites for businesses with fast loading and premium design.",
    },
    {
      title: "Telegram Bots",
      description:
        "Automation, CRM, orders, notifications and customer support.",
    },
    {
      title: "AI Solutions",
      description:
        "AI assistants, chatbots and business process automation.",
    },
  ];

  return (
    <Reveal>
      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-500">
            Services
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            What We Do
          </h2>

          <p className="mt-6 text-slate-400">
            We build digital products that help businesses grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              <h3 className="text-2xl font-bold text-white transition group-hover:text-blue-400">
                {service.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}