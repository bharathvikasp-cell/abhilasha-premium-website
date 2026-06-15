import ContactForm from "../components/ContactForm";
import { Mail, MapPin, Navigation, Phone, Globe2, MessageCircle } from "lucide-react";

const mapsUrl = "https://share.google/tMJ8vtlJnBkLuPyq2";

export default function ContactPage() {
  return (
    <div className="bg-premium-radial px-6 py-16 sm:px-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Contact</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-7xl">
            Begin a conversation with care and clarity.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-plum/68 sm:text-lg">
            Reach out to learn more about services, appointments, parent guidance, and ways to support Abhilasha.
          </p>
          <div className="mt-8 space-y-5 rounded-[2rem] bg-white/90 p-7 shadow-soft backdrop-blur">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-lavender-700" />
              <p className="font-semibold leading-7 text-plum">
                Plot No. 27, Opp Kharkhana KFC, Behind HDFC Bank, Vikrampuri,
                Secunderabad - 500009, Telangana, India
              </p>
            </div>
            <p className="flex items-center gap-3 text-plum/70"><Phone className="h-5 w-5 text-lavender-700" /> 7981520245</p>
            <p className="flex items-center gap-3 text-plum/70"><Mail className="h-5 w-5 text-lavender-700" /> abhilashatrusthyd@gmail.com</p>
            <p className="flex items-center gap-3 text-plum/70"><Globe2 className="h-5 w-5 text-lavender-700" /> www.abhilasharehabilitationcenter.org</p>
            <a href="https://wa.me/917981520245" className="inline-flex items-center gap-2 rounded-full bg-lavender-700 px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-lavender-800">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block overflow-hidden rounded-[2rem] border border-white bg-white/90 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className="rounded-[1.5rem] bg-gradient-to-br from-lavender-700 via-lavender-500 to-saffron p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/18">
                  <Navigation className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/75">Find Us</p>
                  <p className="mt-1 text-xl font-bold">Open in Google Maps</p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
