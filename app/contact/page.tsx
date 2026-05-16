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
          <div className="mt-8 space-y-4 rounded-[2rem] bg-white/85 p-7 shadow-soft backdrop-blur">
            <p className="font-bold text-plum">Andhra Pradesh, India</p>
            <p className="text-plum/65">abhilasha@example.com</p>
            <p className="text-plum/65">+91 XXXXX XXXXX</p>
            <a href="https://wa.me/910000000000" className="inline-flex rounded-full bg-lavender-700 px-6 py-3 text-sm font-bold text-white shadow-glow">
              WhatsApp Us
            </a>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white bg-white/88 p-6 shadow-soft backdrop-blur sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-plum">
              Name
              <input className="rounded-2xl border border-lavender-100 bg-lavender-50/60 px-4 py-3 outline-none focus:border-lavender-400" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-plum">
              Phone
              <input className="rounded-2xl border border-lavender-100 bg-lavender-50/60 px-4 py-3 outline-none focus:border-lavender-400" placeholder="+91" />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-plum">
            Email
            <input className="rounded-2xl border border-lavender-100 bg-lavender-50/60 px-4 py-3 outline-none focus:border-lavender-400" placeholder="you@example.com" />
          </label>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-plum">
            Message
            <textarea className="min-h-36 rounded-2xl border border-lavender-100 bg-lavender-50/60 px-4 py-3 outline-none focus:border-lavender-400" placeholder="How can we help?" />
          </label>
          <button type="button" className="mt-6 w-full rounded-full bg-lavender-700 px-7 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-lavender-800 sm:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
