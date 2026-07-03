import heroVideo from "../assets/videos/hero.mp4";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-transparent to-slate-950/60" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold text-blue-400 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            🚀 Premium Websites • Telegram Bots • AI Solutions
          </motion.div>

          <motion.h1
            className="mt-8 text-6xl font-black leading-tight md:text-8xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Build Your
            <br />

            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital Business
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-xl leading-9 text-slate-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            We create premium websites, CRM systems, Telegram bots and AI
            solutions that help businesses grow faster and look world-class.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-wrap gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            <button
              onClick={scrollToContact}
              className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold shadow-[0_0_35px_rgba(37,99,235,0.45)] transition duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Start Project
            </button>

            <button
              onClick={scrollToPortfolio}
              className="rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold backdrop-blur-md transition duration-300 hover:border-blue-500 hover:bg-white/10"
            >
              View Portfolio
            </button>
          </motion.div>

          <motion.div
            className="mt-20 flex gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div>
              <h3 className="text-4xl font-black text-blue-400">50+</h3>
              <p className="mt-2 text-slate-300">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-400">25+</h3>
              <p className="mt-2 text-slate-300">Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-400">99%</h3>
              <p className="mt-2 text-slate-300">Success Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}