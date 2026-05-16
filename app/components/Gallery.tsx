import Link from "next/link";

export const googleDriveFolderUrl =
  "https://drive.google.com/drive/u/0/mobile/folders/1r-_Kwp-ecAu_xkcvVOQntGJCD2M2RYUB?pli=1";

const galleryItems = [
  "Therapy moments",
  "Creative learning",
  "Group activities",
  "Parent guidance",
  "Life skills",
  "Celebrations",
];

export default function Gallery() {
  const items = [...galleryItems, ...galleryItems];

  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Gallery</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-plum sm:text-5xl">
            Moments of learning, courage, and gentle progress.
          </h2>
        </div>
        <div className="mt-10 overflow-hidden">
          <div className="flex w-max gap-5 animate-gallery-scroll">
            {items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="h-64 w-72 flex-shrink-0 rounded-[2rem] border border-lavender-100 bg-gradient-to-br from-lavender-100 via-white to-blush p-5 shadow-soft sm:w-80"
              >
                <div className="flex h-full items-end rounded-[1.5rem] bg-white/55 p-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-lavender-700">Preview</p>
                    <h3 className="mt-2 text-xl font-bold text-plum">{item}</h3>
                    <p className="mt-2 text-sm text-plum/60">Local placeholder for future center photography.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Link
            href={googleDriveFolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-lavender-700 px-7 py-4 text-sm font-bold text-white shadow-glow transition hover:bg-lavender-800"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
