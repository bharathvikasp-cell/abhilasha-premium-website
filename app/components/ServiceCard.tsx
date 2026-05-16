import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon?: LucideIcon;
  accent?: string;
};

export default function ServiceCard({
  title,
  description,
  Icon,
  accent = "from-lavender-600 via-lavender-500 to-saffron",
}: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-lavender-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lavender-100/70 transition duration-300 group-hover:scale-125" />
      <div className={`relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-glow`}>
        {Icon ? <Icon className="h-8 w-8" strokeWidth={1.8} /> : null}
      </div>
      <h3 className="text-xl font-bold text-plum">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-plum/65">{description}</p>
    </article>
  );
}
