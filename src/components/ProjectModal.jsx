import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-[90%] max-w-4xl rounded-3xl bg-slate-900 p-8 border border-slate-700 shadow-2xl"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Галерея — теперь показывает ВСЕ фото категории */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-40 object-cover rounded-xl"
            />
          ))}
        </div>

        {/* Заголовок */}
        <h2 className="text-4xl font-black text-white">{project.title}</h2>
        <p className="mt-2 text-blue-400 font-semibold">{project.category}</p>

        {/* Описание */}
        <p className="mt-6 text-slate-300 leading-relaxed">
          This project includes a modern responsive design, premium animations,
          optimized performance and a fully functional business system created
          specifically for the client's needs. The goal was to create a fast,
          beautiful and effective digital solution that increases conversions and
          improves user experience.
        </p>

        {/* Кнопки */}
        <div className="mt-8 flex gap-4">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500 transition shadow-[0_0_25px_rgba(37,99,235,0.45)]"
          >
            Hire Me
          </button>

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
