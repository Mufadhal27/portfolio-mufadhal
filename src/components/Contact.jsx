import { useState } from "react";
import { FaEnvelope, FaUser, FaCommentDots, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="py-16 container mx-auto px-4" id="contact">
      <h2 className="text-2xl mt-5 md:text-3xl font-bold mb-6 text-blue-400 text-center">Contact</h2>
      <div className="grid mt-15 md:grid-cols-2 items-start gap-8 mb-10">
        {/* Kiri: Info Kontak */}
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-blue-400 hover:bg-blue-400/20">
            <FaEnvelope className="text-yellow-400 text-xl" />
            <q>You can contact me anytime through this form.</q>
          </div>
          <h2 className="text-4xl font-bold mb-4">My Contact</h2>
          <p className="text-base mb-6 opacity-50 max-w-xl">
            Want to collaborate or have questions? Send me a message via this form, and I'll respond promptly.
          </p>
          {/* Info Email, Phone, Location */}
          <div className="flex flex-col gap-3 mt-8">
            <div className="flex items-center gap-3 text-zinc-300">
              <FaEnvelope className="text-blue-400" />
              <span>temufadhal@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <FaPhoneAlt className="text-blue-400" />
              <span>+62 838 4557 7870</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Kanan: Form */}
        <div>
          {isSubmitted && (
            <div className="mb-6 bg-green-600 text-white px-4 py-3 rounded-md text-sm transition-all">
              ✅ Message sent successfully. Thank you!
            </div>
          )}

          <form
            className="grid gap-4"
            action="https://formspree.io/f/xrbkdjvp"
            method="POST"
            onSubmit={() => setIsSubmitted(true)}
          >
            <div className="flex flex-col">
              <label className="text-sm mb-1 flex items-center gap-2">
                <FaUser /> Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md text-sm text-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 flex items-center gap-2">
                <FaEnvelope /> Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md text-sm text-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 flex items-center gap-2">
                <FaCommentDots /> Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-md text-sm text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-fit bg-blue-500 hover:bg-blue-400 px-6 py-2 rounded-xl text-sm font-medium transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;