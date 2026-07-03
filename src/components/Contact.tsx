import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-[9999]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-white tracking-tight">
          Leave a request
        </h2>

        <ContactForm />
      </div>
    </section>
  );
}
