const reviews = [
  {
    name: "Michael Johnson",
    company: "Beauty Studio",
    text: "Outstanding work. The website looks premium and increased our online bookings.",
  },
  {
    name: "Sarah Williams",
    company: "Dental Clinic",
    text: "Professional team, fast delivery and amazing communication.",
  },
  {
    name: "David Brown",
    company: "Restaurant",
    text: "Our new website doubled customer inquiries in the first month.",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-500">
          Testimonials
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          What Clients Say
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
          >
            <p className="leading-8 text-slate-300">
              "{review.text}"
            </p>

            <div className="mt-8">
              <h3 className="font-bold">
                {review.name}
              </h3>

              <span className="text-slate-400">
                {review.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}