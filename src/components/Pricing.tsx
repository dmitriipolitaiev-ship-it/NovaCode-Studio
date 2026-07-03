export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          PRICING
        </h2>
        <p className="text-center text-slate-400 mb-16">
          Choose Your Package — transparent pricing with no hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          {/* LANDING PAGE */}
          <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Landing Page</h3>
            <p className="text-4xl font-black text-green-400 mb-6">$500</p>

            <ul className="text-slate-300 space-y-2 mb-8">
              <li>✓ Premium Design</li>
              <li>✓ Responsive</li>
              <li>✓ SEO Ready</li>
              <li>✓ Fast Performance</li>
            </ul>

            <button
              onClick={() => {
                localStorage.setItem("selectedPackage", "Landing Page — $500");
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500 transition"
            >
              Get Started — $500
            </button>
          </div>

          {/* BUSINESS WEBSITE */}
          <div className="rounded-3xl border border-blue-600 bg-blue-900/20 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Business Website</h3>
            <p className="text-4xl font-black text-blue-400 mb-6">from $1000+</p>

            <ul className="text-slate-300 space-y-2 mb-8">
              <li>✓ Everything in Landing</li>
              <li>✓ Multiple Pages</li>
              <li>✓ Contact Forms</li>
              <li>✓ Animations</li>
              <li>✓ CMS Ready</li>
            </ul>

            <button
              onClick={() => {
                localStorage.setItem("selectedPackage", "Business Website — from $1000+");
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              Get Started — from $1000+
            </button>
          </div>

          {/* CUSTOM SOLUTION */}
          <div className="rounded-3xl border border-purple-600 bg-purple-900/20 p-8 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Custom Solution</h3>
            <p className="text-4xl font-black text-purple-400 mb-6">$100–$300</p>

            <ul className="text-slate-300 space-y-2 mb-8">
              <li>✓ AI Integration</li>
              <li>✓ Telegram Bot</li>
              <li>✓ CRM System</li>
              <li>✓ API Integration</li>
            </ul>

            <button
              onClick={() => {
                localStorage.setItem("selectedPackage", "Custom Solution — $100 to $300");
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-500 transition"
            >
              Get Started — $100 to $300
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
