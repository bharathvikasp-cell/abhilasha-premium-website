import CTA from "../components/CTA";
import ServiceCard from "../components/ServiceCard";
import { Activity, BookOpenCheck, Brain, HeartHandshake, MessageCircle, Puzzle, Sprout, UserRoundCheck } from "lucide-react";

const services = [
  { title: "Special Education", description: "Personalized learning plans that support communication, cognition, social readiness, and school participation.", Icon: BookOpenCheck },
  { title: "Speech Therapy", description: "Communication support focused on expression, comprehension, speech clarity, and functional interaction.", Icon: MessageCircle },
  { title: "Physiotherapy", description: "Movement, posture, balance, strengthening, and physical confidence through guided therapeutic routines.", Icon: Activity },
  { title: "Occupational Therapy", description: "Functional independence, sensory support, fine-motor development, and daily living participation.", Icon: Puzzle },
  { title: "Behaviour Modification", description: "Positive behavior guidance that builds routine, regulation, social readiness, and emotional safety.", Icon: Brain },
  { title: "Psychology & Counselling", description: "Compassionate counselling and emotional support for children, parents, and caregivers.", Icon: HeartHandshake },
  { title: "Life Skills", description: "Daily living skills that help children participate more independently in routines and community life.", Icon: UserRoundCheck },
  { title: "Early Intervention", description: "Developmental support for young children during the most important years of growth and adaptation.", Icon: Sprout },
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
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} Icon={service.Icon} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
