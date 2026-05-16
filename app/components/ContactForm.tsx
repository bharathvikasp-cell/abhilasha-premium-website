"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const nextUrl = useMemo(() => {
    if (typeof window === "undefined") {
      return "https://www.abhilashakids.com/contact/success";
    }
    return `${window.location.origin}/contact/success`;
  }, []);

  return (
    <form
      action="https://formsubmit.co/abhilashatrusthyd@gmail.com"
      method="POST"
      onSubmit={() => setSubmitting(true)}
      className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-soft backdrop-blur sm:p-8"
    >
      <input type="hidden" name="_subject" value="New enquiry from Abhilasha website" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={nextUrl} />
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-plum">
          Name
          <input
            name="name"
            required
            className="rounded-2xl border border-lavender-100 bg-lavender-50/70 px-4 py-3 outline-none transition focus:border-lavender-500 focus:bg-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-plum">
          Phone
          <input
            name="phone"
            required
            inputMode="tel"
            className="rounded-2xl border border-lavender-100 bg-lavender-50/70 px-4 py-3 outline-none transition focus:border-lavender-500 focus:bg-white"
            placeholder="7981520245"
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-plum">
        Email
        <input
          name="email"
          required
          type="email"
          className="rounded-2xl border border-lavender-100 bg-lavender-50/70 px-4 py-3 outline-none transition focus:border-lavender-500 focus:bg-white"
          placeholder="you@example.com"
        />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-semibold text-plum">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          className="min-h-36 rounded-2xl border border-lavender-100 bg-lavender-50/70 px-4 py-3 outline-none transition focus:border-lavender-500 focus:bg-white"
          placeholder="How can we help?"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-full bg-deep-purple px-7 py-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
      <p className="mt-4 text-sm leading-6 text-plum/58">
        This form submits securely through FormSubmit. You may receive a first-time email confirmation from FormSubmit.
      </p>
    </form>
  );
}
