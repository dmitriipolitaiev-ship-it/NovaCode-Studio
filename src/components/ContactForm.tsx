import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telegram: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    setStatus("loading");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.log("ERROR:", err);
      setStatus("error");
    }
  };

  /* SUCCESS SCREEN */
  if (status === "success") {
    return (
      <div className="relative w-full max-w-4xl mx-auto py-24 text-center">

        <div className="
          absolute inset-0 
          animate-ping 
          bg-cyan-400/40 
          rounded-full 
          blur-3xl 
          scale-150
        " />

        <div className="
          absolute inset-0 
          bg-cyan-500/30 
          rounded-full 
          blur-2xl 
          animate-pulse
        " />

        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-white mb-6">
            Request Sent!
          </h1>

          <p className="text-white/80 text-xl">
            I will contact you within 1 hour.
          </p>

          <button
            onClick={() => setStatus("idle")}
            className="
              mt-10 px-10 py-4 
              bg-gradient-to-r from-cyan-500 to-blue-600
              hover:from-cyan-400 hover:to-blue-500
              text-white font-semibold rounded-2xl
              shadow-[0_0_40px_rgba(34,211,238,0.8)]
              transition-all duration-300
              active:scale-95
            "
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  /* FORM SCREEN */
  return (
    <div className="relative w-full max-w-5xl mx-auto p-12 rounded-3xl">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none z-[1]">
        <video
          src="/src/assets/videos/99278-653943177_medium.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute inset-0 w-full h-full 
            object-cover 
            opacity-100
            scale-125
          "
        />
      </div>

      {/* TRANSPARENT GLASS WITHOUT BLUR */}
      <div
        className="
          absolute inset-0 
          bg-black/20
          backdrop-blur-none
          rounded-3xl
          pointer-events-none
          z-[2]
        "
      />

      {/* FORM CONTENT */}
      <div className="relative z-[10]">
        <h3 className="text-4xl font-bold mb-10 text-white tracking-wide">
          Project details
        </h3>

        <Field label="Your Name" name="name" value={form.name} onChange={handleChange} />
        <Field label="Email" name="email" value={form.email} onChange={handleChange} />
        <Field label="Telegram (@username)" name="telegram" value={form.telegram} onChange={handleChange} />
        <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
        <FieldTextarea label="Describe your project" name="message" value={form.message} onChange={handleChange} />

        <button
          type="submit"
          onClick={handleSubmit}
          className="
            w-full px-10 py-4 mt-10
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-400 hover:to-blue-500
            text-white font-semibold rounded-2xl
            shadow-[0_0_50px_rgba(34,211,238,0.8)]
            hover:shadow-[0_0_90px_rgba(34,211,238,1)]
            transition-all duration-300 active:scale-95
          "
        >
          {status === "loading" ? "Sending..." : "Submit Request"}
        </button>
      </div>
    </div>
  );
}

/* SUPER VISIBLE FIELD */
function Field({ label, name, value, onChange }) {
  return (
    <div className="mb-8">
      <label className="text-white text-xl font-bold mb-3 block">
        {label}
      </label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="
          w-full px-5 py-4 
          bg-black/50
          border-2 border-cyan-400
          rounded-xl text-white 
          text-lg
          focus:outline-none 
          focus:border-cyan-200
          transition-all duration-300
          placeholder-white/70
          focus:placeholder-transparent
          shadow-[0_0_25px_rgba(0,255,255,0.4)]
        "
      />
    </div>
  );
}

/* SUPER VISIBLE TEXTAREA */
function FieldTextarea({ label, name, value, onChange }) {
  return (
    <div className="mb-8">
      <label className="text-white text-xl font-bold mb-3 block">
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        className="
          w-full px-5 py-4 
          bg-black/50
          border-2 border-cyan-400
          rounded-xl text-white 
          text-lg
          h-48
          focus:outline-none 
          focus:border-cyan-200
          transition-all duration-300
          placeholder-white/70
          focus:placeholder-transparent
          shadow-[0_0_25px_rgba(0,255,255,0.4)]
        "
      />
    </div>
  );
}
