import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-deep-purple p-8 text-white shadow-glow sm:p-12 md:p-16">
        <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-100">Stand with Abhilasha</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-5xl">
              Help every child move toward confidence, dignity, and independence.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              Your support helps provide therapy, learning materials, assistive care, and a nurturing
              environment for children and families who need consistent guidance.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link href="/donate" className="rounded-full bg-white px-7 py-4 text-center text-sm font-bold text-lavender-800 shadow-soft transition hover:-translate-y-0.5">
              Donate Now
            </Link>
            <Link href="/contact" className="rounded-full border border-white/35 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10">
              Speak With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
