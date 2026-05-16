import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-premium-radial px-6 py-12 sm:px-10 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-lavender-200 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-lavender-700 shadow-sm">
            Rehabilitation · Therapy · Special Education
          </p>
          <h1 className="mt-7 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-plum sm:text-5xl md:text-6xl lg:text-7xl">
            Empowering Special Lives Through Compassionate Care
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-plum/70 sm:text-lg">
            Abhilasha Rehabilitation Center is dedicated to supporting children with special needs through
            education, therapy, holistic development, dignity, and independence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="rounded-full bg-lavender-700 px-7 py-4 text-center text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-lavender-800">
              Explore Our Services
            </Link>
            <Link href="/contact" className="rounded-full border border-lavender-200 bg-white px-7 py-4 text-center text-sm font-bold text-lavender-800 shadow-sm transition hover:-translate-y-0.5">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="relative min-h-[340px] overflow-hidden rounded-[2.25rem] border border-white bg-white/70 p-4 shadow-glow backdrop-blur md:min-h-[380px]">
          <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-lavender-100 via-white to-blush p-6">
            <div className="grid h-full grid-rows-[1fr_auto] gap-5">
              <div className="rounded-[1.5rem] bg-white/80 p-6 shadow-soft">
                <div className="grid h-full place-items-center rounded-[1.25rem] bg-gradient-to-br from-lavender-200 via-white to-blush text-center">
                  <div className="px-4">
                    <p className="font-serif text-5xl text-lavender-700 sm:text-6xl">Care</p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-plum/60">
                      with patience and dignity
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Therapy", "Learning", "Life Skills"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-4 text-center text-xs font-bold text-lavender-800 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
