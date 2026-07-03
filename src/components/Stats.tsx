import FlipNumber from "./FlipNumber";

interface StatItem {
  number: number | string;
  title: string;
  animate: boolean;
}

const stats: StatItem[] = [
  { number: 50, title: "Completed Projects", animate: true },
  { number: 25, title: "Business Clients", animate: true },
  { number: 99, title: "Client Satisfaction", animate: true },
  { number: "24/7", title: "Support", animate: false },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-800 bg-slate-900/50 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.title} className="text-center">

            {item.animate ? (
              <FlipNumber target={item.number} />
            ) : (
              <h2 className="text-5xl font-black text-blue-500">
                {item.number}
              </h2>
            )}

            <p className="mt-4 text-slate-400">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
