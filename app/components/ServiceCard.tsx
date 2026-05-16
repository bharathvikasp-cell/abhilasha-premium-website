type ServiceCardProps = {
  title: string;
  description: string;
  accent?: string;
};

export default function ServiceCard({ title, description, accent = "from-lavender-100 to-white" }: ServiceCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-lavender-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className={`mb-5 h-14 w-14 rounded-2xl bg-gradient-to-br ${accent}`} />
      <h3 className="text-xl font-bold text-plum">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-plum/65">{description}</p>
    </article>
  );
}
