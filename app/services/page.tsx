import CTA from "../components/CTA";
import ServiceCard from "../components/ServiceCard";

const services = [
  ["Special Education", "Personalized learning plans that support communication, cognition, social readiness, and school participation."],
  ["Speech Therapy", "Communication support focused on expression, comprehension, speech clarity, and functional interaction."],
  ["Physiotherapy", "Movement, posture, balance, strengthening, and physical confidence through guided therapeutic routines."],
  ["Early Intervention", "Developmental support for young children during the most important years of growth and adaptation."],
  ["Behavioral Support", "Gentle behavior guidance that builds routines, emotional regulation, and positive participation."],
  ["Emotional Development", "Safe, patient support for confidence, social connection, self-expression, and emotional resilience."],
  ["Parent Guidance", "Practical family guidance to continue learning, therapy routines, and emotional support at home."],
  ["Life Skills", "Daily living skills that help children participate more independently in routines and community life."],
  ["Vocational Training", "Age-appropriate preparation for meaningful activity, responsibility, and skill-based confidence."],
  ["Independence Training", "Structured support for self-care, communication, decision-making, and everyday confidence."],
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-premium-radial px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Services</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-7xl">
            Integrated therapy and learning support for holistic development.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-plum/68 sm:text-lg">
            Our services are designed to support children’s educational, physical, communication, emotional,
            social, and independence goals.
          </p>
        </div>
      </section>
      <section className="bg-white px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, description]) => (
            <ServiceCard key={title} title={title} description={description} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
