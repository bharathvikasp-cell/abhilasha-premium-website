const values = ["Compassion", "Dignity", "Inclusion", "Patience", "Excellence", "Consistency"];

export default function AboutPage() {
  return (
    <div className="bg-premium-radial">
      <section className="px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">About Abhilasha</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-7xl">
            Built on the belief that every child deserves patient, dignified care.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-plum/68 sm:text-lg">
            Abhilasha Rehabilitation Center exists to support children with special needs and their families
            through education, therapy, emotional development, and meaningful everyday progress.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {[
            ["Our Story", "Abhilasha grew from a simple promise: children with special needs deserve a place where care is consistent, progress is celebrated, and families feel supported."],
            ["Mission", "To empower children through special education, therapy, life skills, and compassionate guidance that strengthens independence and self-worth."],
            ["Vision", "To become a trusted rehabilitation centre where every child is seen, heard, included, and encouraged to reach their fullest potential."],
            ["Why We Exist", "Families often need more than appointments. They need a caring ecosystem of teachers, therapists, and support staff who walk alongside them with patience."],
            ["Our Approach", "We combine individualized education, therapeutic support, structured routines, emotional care, and parent guidance to nurture steady development."],
            ["Our Promise", "We honor every child’s pace. We protect dignity. We build confidence through consistency, kindness, and skilled support."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[2rem] border border-white bg-white/82 p-7 shadow-soft backdrop-blur sm:p-8">
              <h2 className="font-serif text-3xl font-semibold text-plum">{title}</h2>
              <p className="mt-4 text-sm leading-8 text-plum/66 sm:text-base">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Core Values</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="rounded-3xl bg-lavender-50 p-7 text-center text-xl font-bold text-plum shadow-sm">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
