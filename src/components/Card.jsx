import Link from "next/link";
import Image from "next/image";

export default function Card({
  slug = "yx1-earphones",
  name = "YX1 Wireless Earphones",
  image = {
    mobile: "/assets/product-yx1-earphones/mobile/image-product.jpg",
    tablet: "/assets/product-yx1-earphones/tablet/image-product.jpg",
    desktop: "/assets/product-yx1-earphones/desktop/image-product.jpg",
  },
  category = "earphones",
  isNew = true,
  description = "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  reverse = false,
}) {
  return (
    <section className="max-w-[1110px] mx-auto px-4 py-24 flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:gap-28">
      <div className={`w-full md:w-1/2 ${reverse ? "md:order-2" : ""}`}>
        <Image
          src={image.desktop}
          alt={name}
          width={540}
          height={560}
          className="rounded-lg w-full object-cover"
        />
      </div>

      <div className={`w-full md:w-1/2 flex flex-col justify-center items-center md:items-start mt-10 md:mt-0`}>
        {isNew && (
          <p className="text-sm text-orange-400 tracking-[10px] uppercase mb-4">
            New Product
          </p>
        )}
        <h2 className="text-[32px] md:text-[40px] lg:text-[56px] font-bold uppercase mb-6 leading-tight">
          {name}
        </h2>
        <p className="text-[15px] text-black/75 leading-[25px] mb-8 max-w-[400px]">
          {description}
        </p>
        <Link
          href={`/${category}/${slug}`}
          className="bg-[#D87D4A] hover:bg-orange-600 text-white text-[13px] font-semibold uppercase tracking-[1px] px-8 py-4"
        >
          See Product
        </Link>
      </div>
    </section>
  );
}