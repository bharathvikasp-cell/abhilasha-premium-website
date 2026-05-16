const groups = [
  {
    title: "Therapists",
    people: [
      ["C. Bhavani", "Physiotherapist", "MPT (Cardiorespiratory)"],
      ["Uday Teja", "Speech Therapist", ""],
    ],
  },
  {
    title: "Special Education",
    people: [
      ["Gouthami", "Teacher", "MA, B.Ed"],
      ["Laxmi Lavanya", "Early Intervention & Vocational Training", "MA, B.Ed"],
    ],
  },
  {
    title: "Support Staff",
    people: [
      ["Pampari Uma", "Support Staff", ""],
      ["Priya A", "Support Staff", ""],
      ["Sandhaya", "Support Staff", ""],
    ],
  },
  {
    title: "Principal",
    people: [["P. R. Aruna Jyothi", "Principal", "MA, B.Ed (HI)"]],
  },
];

export default function GuidingHandsPage() {
  return (
    <div className="bg-premium-radial">
      <section className="px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Our Guiding Hands</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-7xl">
            A caring team walking beside every child and family.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-plum/68 sm:text-lg">
            Our teachers, therapists, principal, and support staff bring patience, skill, and compassion to the
            everyday work of rehabilitation and learning.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 md:pb-24">
        <div className="mx-auto max-w-7xl space-y-10">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="font-serif text-3xl font-semibold text-plum sm:text-4xl">{group.title}</h2>
              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.people.map(([name, role, qualification]) => (
                  <article key={name} className="rounded-[2rem] border border-white bg-white/85 p-7 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="mb-6 h-16 w-16 rounded-3xl bg-gradient-to-br from-lavender-200 to-white" />
                    <h3 className="text-2xl font-bold text-plum">{name}</h3>
                    <p className="mt-2 text-sm font-semibold text-lavender-700">{role}</p>
                    {qualification ? <p className="mt-3 text-sm text-plum/60">{qualification}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
