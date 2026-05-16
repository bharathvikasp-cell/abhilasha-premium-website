import Image from "next/image";
import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Our Guiding Hands", "/guiding-hands"],
  ["Contact", "/contact"],
  ["Donate", "/donate"],
];

export default function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Abhilasha logo" width={52} height={52} className="rounded-2xl bg-white" />
            <div>
              <p className="font-serif text-xl font-semibold">Abhilasha Rehabilitation Center</p>
              <p className="text-sm text-white/70">Compassionate care for special lives</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Supporting children with special needs through education, therapy, emotional development,
            life skills, and patient family-centered care.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lavender-200">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="text-sm text-white/75 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-lavender-200">Connect</h3>
          <div className="mt-5 space-y-3 text-sm text-white/75">
            <p>Andhra Pradesh, India</p>
            <p>abhilasha@example.com</p>
            <p>+91 XXXXX XXXXX</p>
            <p className="pt-2 text-white/55">Instagram · Facebook · YouTube</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/55">
        © {new Date().getFullYear()} Abhilasha Rehabilitation Center. All rights reserved.
      </div>
    </footer>
  );
}
