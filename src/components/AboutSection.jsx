import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="max-w-[1110px] mx-auto px-6 py-24 grid md:grid-cols-2 items-center gap-12 text-center md:text-left">
      <div>
        <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold uppercase mb-8">
          Bringing you the <span className="text-orange-400">best</span> audio gear
        </h2>
        <p className="text-black/75 text-[15px] leading-6">
          Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Best audio gear"
          width={540}
          height={588}
          className="rounded-lg w-full object-cover"
        />
      </div>
    </section>
  );
}
