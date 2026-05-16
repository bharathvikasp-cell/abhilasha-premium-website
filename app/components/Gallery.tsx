import Image from "next/image";
import Link from "next/link";

export const googleDriveFolderUrl =
  "https://drive.google.com/drive/u/0/mobile/folders/1r-_Kwp-ecAu_xkcvVOQntGJCD2M2RYUB?pli=1";

const galleryItems = [
  { src: "/gallery/abhilasha-gallery-01.jpg", title: "Community care" },
  { src: "/gallery/abhilasha-gallery-02.jpg", title: "Learning moments" },
  { src: "/gallery/abhilasha-gallery-03.jpg", title: "Shared progress" },
  { src: "/gallery/abhilasha-gallery-04.jpg", title: "Creative participation" },
  { src: "/gallery/abhilasha-gallery-05.jpg", title: "Guided activities" },
  { src: "/gallery/abhilasha-gallery-06.jpg", title: "Everyday milestones" },
  { src: "/gallery/abhilasha-gallery-07.jpg", title: "Centre life" },
  { src: "/gallery/abhilasha-gallery-08.jpg", title: "Focused support" },
  { src: "/gallery/abhilasha-gallery-09.jpg", title: "Celebrations" },
  { src: "/gallery/abhilasha-gallery-10.jpg", title: "Confidence building" },
  { src: "/gallery/abhilasha-gallery-11.jpg", title: "Joyful participation" },
  { src: "/gallery/abhilasha-gallery-12.jpg", title: "Group activities" },
  { src: "/gallery/abhilasha-gallery-13.jpg", title: "Therapy support" },
  { src: "/gallery/abhilasha-gallery-14.jpg", title: "Learning with care" },
  { src: "/gallery/abhilasha-gallery-15.jpg", title: "Gentle guidance" },
  { src: "/gallery/abhilasha-gallery-16.jpg", title: "Holistic development" },
  { src: "/gallery/abhilasha-gallery-17.jpg", title: "Life skills" },
  { src: "/gallery/abhilasha-gallery-18.jpg", title: "Together at Abhilasha" },
  { src: "/gallery/abhilasha-gallery-19.jpg", title: "Care in action" },
  { src: "/gallery/abhilasha-gallery-20.jpg", title: "Daily learning" },
  { src: "/gallery/abhilasha-gallery-21.jpg", title: "Independent steps" },
  { src: "/gallery/abhilasha-gallery-22.jpg", title: "Nurturing routines" },
  { src: "/gallery/abhilasha-gallery-23.jpg", title: "Patient support" },
  { src: "/gallery/abhilasha-gallery-24.jpg", title: "Shared encouragement" },
  { src: "/gallery/abhilasha-gallery-25.jpg", title: "Therapy and learning" },
  { src: "/gallery/abhilasha-gallery-26.jpg", title: "Moments that matter" },
];

export default function Gallery() {
  const items = [...galleryItems, ...galleryItems];
  const featuredItems = [galleryItems[0], galleryItems[3], galleryItems[18]];

  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-lavender-700">Gallery</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-plum sm:text-5xl">
              Real moments of learning, courage, celebration, and gentle progress.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-plum/68">
              A closer look at the warm everyday environment where children are supported with patience,
              dignity, therapy, education, and care.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {featuredItems.map((item, index) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-[1.75rem] border border-white bg-lavender-50 shadow-card ${
                  index === 1 ? "aspect-[3/4] translate-y-6" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={`${item.title} at Abhilasha Rehabilitation Centre`}
                  fill
                  sizes="(min-width: 1024px) 18vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/35 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-lavender-100 bg-lavender-50/60 py-5 shadow-soft">
          <div className="flex w-max gap-5 animate-gallery-scroll">
            {items.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="group relative h-64 w-72 flex-shrink-0 overflow-hidden rounded-[1.5rem] bg-white shadow-card sm:h-72 sm:w-96"
              >
                <Image
                  src={item.src}
                  alt={`${item.title} at Abhilasha Rehabilitation Centre`}
                  fill
                  sizes="(min-width: 640px) 384px, 288px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/70 via-plum/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">Abhilasha moments</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
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
