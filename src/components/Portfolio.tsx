import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

// BEAUTY
import beauty1 from "../assets/projects/beauty/beauty1.jpg";
import beauty2 from "../assets/projects/beauty/beauty2.jpg";
import beauty3 from "../assets/projects/beauty/beauty3.jpg";

// RESTAURANT
import restaurant1 from "../assets/projects/restaurant/restaurant1.jpg";
import restaurant2 from "../assets/projects/restaurant/restaurant2.jpg";
import restaurant3 from "../assets/projects/restaurant/restaurant3.jpg";

// DENTAL
import dental1 from "../assets/projects/dental/dental1.jpg";
import dental2 from "../assets/projects/dental/dental2.jpg";
import dental3 from "../assets/projects/dental/dental3.jpg";

// TELEGRAM BOT
import telegram1 from "../assets/projects/telegram/telegram1.jpg";
import telegram2 from "../assets/projects/telegram/telegram2.jpg";
import telegram3 from "../assets/projects/telegram/telegram3.jpg";

// CONSTRUCTION
import construction1 from "../assets/projects/construction/construction1.jpg";
import construction2 from "../assets/projects/construction/construction2.jpg";
import construction3 from "../assets/projects/construction/construction3.jpg";

// FITNESS
import fitness1 from "../assets/projects/fitness/fitness1.jpg";
import fitness2 from "../assets/projects/fitness/fitness2.jpg";
import fitness3 from "../assets/projects/fitness/fitness3.jpg";

interface Project {
  title: string;
  category: string;
  image: string;
  gallery: string[];
  description: string;
}

const projects: Project[] = [
  {
    title: "Luxury Beauty Salon",
    category: "Premium Website",
    image: beauty1,
    gallery: [beauty1, beauty2, beauty3],
    description:
      "A refined and elegant website crafted to elevate beauty services into a luxurious digital experience.",
  },
  {
    title: "Restaurant Landing",
    category: "Landing Page",
    image: restaurant1,
    gallery: [restaurant1, restaurant2, restaurant3],
    description:
      "A flavorful landing page designed to capture the atmosphere, emotion, and irresistible charm of the restaurant.",
  },
  {
    title: "Dental Clinic",
    category: "Corporate Website",
    image: dental1,
    gallery: [dental1, dental2, dental3],
    description:
      "A clean, trustworthy medical website built to inspire confidence and deliver clarity for every patient.",
  },
  {
    title: "Telegram CRM Bot",
    category: "Automation",
    image: telegram1,
    gallery: [telegram1, telegram2, telegram3],
    description:
      "A smart automation system with a sleek interface that boosts sales, simplifies workflows, and responds instantly.",
  },
  {
    title: "Construction Company",
    category: "Business Website",
    image: construction1,
    gallery: [construction1, construction2, construction3],
    description:
      "A strong and reliable business website showcasing expertise, completed projects, and professional craftsmanship.",
  },
  {
    title: "Fitness Club",
    category: "Premium Landing",
    image: fitness1,
    gallery: [fitness1, fitness2, fitness3],
    description:
      "A dynamic and energetic landing page that motivates visitors to take action and join the fitness movement.",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-500">
          Portfolio
        </p>

        <h2 className="text-5xl font-black text-white">Our Latest Projects</h2>

        <p className="mt-5 text-slate-400">
          Websites, landing pages and automation systems created for our clients.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="
              group overflow-hidden rounded-3xl border border-slate-800 
              bg-slate-900 transition-all duration-500 
              hover:-translate-y-2 hover:border-blue-500
              hover:shadow-[0_0_40px_rgba(37,99,235,0.35)]
              cursor-pointer
            "
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.03 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-72 overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.15, y: -10 }}
                transition={{ duration: 0.6 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  {project.category}
                </span>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-slate-400">{project.description}</p>

              <button className="mt-6 font-semibold text-blue-500 transition hover:text-blue-300">
                View Project →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
