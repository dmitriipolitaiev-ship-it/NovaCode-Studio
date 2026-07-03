export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1
          className="cursor-pointer text-3xl font-black tracking-tight"
          onClick={() => scrollTo("hero")}
        >
          NovaCode <span className="text-blue-500">Studio</span>
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => scrollTo("hero")}
            className="text-slate-300 transition hover:text-blue-400"
          >
            Home
          </button>

          <button
            onClick={() => scrollTo("services")}
            className="text-slate-300 transition hover:text-blue-400"
          >
            Services
          </button>

          <button
            onClick={() => scrollTo("portfolio")}
            className="text-slate-300 transition hover:text-blue-400"
          >
            Portfolio
          </button>

          <button
            onClick={() => scrollTo("pricing")}
            className="text-slate-300 transition hover:text-blue-400"
          >
            Pricing
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="text-slate-300 transition hover:text-blue-400"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500"
        >
          Get Quote
        </button>
      </div>
    </header>
  );
}