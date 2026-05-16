import Image from "next/image";

const impacts = [
  ["Therapy Support", "Help children access consistent therapy routines and developmental support."],
  ["Learning Materials", "Provide education tools, activity resources, and adaptive learning aids."],
  ["Daily Care", "Support a calm, safe, and encouraging environment for children and families."],
];

export default function DonatePage() {
  return (
    <div className="bg-premium-radial">
      <section className="px-6 py-16 sm:px-10 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Donate</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-plum sm:text-5xl md:text-7xl">
            Your kindness can become a child’s next step forward.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-plum/68 sm:text-lg">
            Contributions help sustain therapy, learning support, care materials, and daily programs that
            nurture confidence and independence.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {impacts.map(([title, text]) => (
              <div key={title} className="rounded-[2rem] bg-white/88 p-7 shadow-soft backdrop-blur">
                <h2 className="text-2xl font-bold text-plum">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-plum/65">{text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white bg-white p-7 text-center shadow-glow sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">UPI Donation</p>
            <div className="mx-auto mt-6 max-w-xs rounded-[1.75rem] bg-lavender-50 p-4">
              <Image src="/UPI.jpeg" alt="UPI QR code for donation" width={420} height={420} className="h-auto w-full rounded-[1.25rem]" />
            </div>
            <p className="mt-6 text-sm text-plum/60">UPI ID</p>
            <p className="mt-1 break-words text-2xl font-bold text-plum">7981520245@ptsbi</p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-plum/62">
              Please share payment details with the center team after completing your donation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
