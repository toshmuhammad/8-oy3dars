import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "HEADPHONES",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    href: "/headphones",
  },
  {
    name: "SPEAKERS",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    href: "/speakers",
  },
  {
    name: "EARPHONES",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    href: "/earphones",
  },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 py-24 grid gap-8 md:grid-cols-3 text-center">
      {categories.map((cat) => (
        <div key={cat.name} className="bg-[#f1f1f1] rounded-lg relative pt-20 pb-6 flex flex-col items-center">
          <Image
            src={cat.image}
            alt={cat.name}
            width={122}
            height={160}
            className="absolute -top-16"
          />
          <h3 className="text-[15px] font-bold uppercase mb-4 tracking-widest">{cat.name}</h3>
          <Link
            href={cat.href}
            className="text-black/50 text-[13px] uppercase font-bold tracking-[1px] flex items-center gap-2 hover:text-orange-400"
          >
            Shop
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.322 1l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" fillRule="evenodd" />
            </svg>
          </Link>
        </div>
      ))}
    </section>
  );
}
