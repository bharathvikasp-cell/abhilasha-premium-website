import CTA from "./components/CTA";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";

const provide = [
  ["Special Education", "Individualized learning support designed around each child’s pace, strengths, and communication style."],
  ["Therapy Support", "Speech, physiotherapy, behavioral, and emotional development support in a patient environment."],
  ["Life Skills", "Daily living, independence, social participation, and confidence-building activities."],
];

const reasons = [
  "Family-centered guidance",
  "Patient and consistent routines",
  "Holistic child development",
  "Respect for dignity and individuality",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Who We Are</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-plum sm:text-5xl">
              A calm, nurturing space for children and families to grow with confidence.
            </h2>
          </div>
          <p className="text-base leading-8 text-plum/68 sm:text-lg">
            Abhilasha Rehabilitation Center supports children with special needs through compassionate
            education, therapy, emotional care, and practical life-skill development. Every child is met
            with patience, dignity, and a belief in their unique possibilities.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">What We Provide</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-plum sm:text-5xl">
              Integrated care that supports learning, therapy, and everyday independence.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {provide.map(([title, description]) => (
              <ServiceCard key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-6 shadow-soft sm:p-10 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Why Families Choose Abhilasha</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-plum sm:text-5xl">
                Gentle structure. Real progress. Human care.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="rounded-3xl bg-lavender-50 p-5 text-sm font-bold text-plum shadow-sm">
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-lavender-50 to-white px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {["Speech and communication", "Movement and physical confidence", "Emotional and social growth"].map((item) => (
              <div key={item} className="rounded-[2rem] border border-white bg-white/75 p-8 shadow-soft backdrop-blur">
                <p className="font-serif text-2xl font-semibold text-plum">{item}</p>
                <p className="mt-4 text-sm leading-7 text-plum/64">
                  Therapy and learning highlights are planned to help children participate more fully in home,
                  school, and community life.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      <section className="px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Testimonials</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-plum sm:text-5xl">
            Stories from families will be shared here with consent.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-plum/64">
            This section is prepared for future parent stories, progress reflections, and community voices.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
