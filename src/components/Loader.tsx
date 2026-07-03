import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black tracking-wide"
            >
              NovaCode{" "}
              <span className="text-blue-500">
                Studio
              </span>
            </motion.h1>

            <motion.div
              className="mx-auto mt-10 h-1 w-64 overflow-hidden rounded-full bg-slate-800"
            >
              <motion.div
                className="h-full rounded-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.p
              className="mt-6 text-slate-400 tracking-widest uppercase text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
            >
              Loading Experience...
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}