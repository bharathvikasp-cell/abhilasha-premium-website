import Link from "next/link";

export default function ContactSuccessPage() {
  return (
    <section className="bg-premium-radial px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white/90 p-8 text-center shadow-glow backdrop-blur sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Message Sent</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-plum sm:text-5xl">
          Thank you for reaching out.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-plum/65">
          The Abhilasha team has received your message and will get back to you as soon as possible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-lavender-700 px-7 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-lavender-800"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
