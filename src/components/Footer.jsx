import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="bg-orange-400 h-1 w-[101px] mx-auto md:mx-[320px]"></div>

      <div className="max-w-[1110px] mx-auto px-6 py-16 flex flex-col gap-12 md:gap-8">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <Link
            href="/"
            className="text-white text-[28px] font-bold tracking-[2px]"
          >
            audiophile
          </Link>

          <nav className="flex flex-col md:flex-row items-center gap-6 text-white text-[13px] uppercase tracking-[2px]">
            <Link href="/" className="hover:text-orange-400">Home</Link>
            <Link href="/headphones" className="hover:text-orange-400">Headphones</Link>
            <Link href="/speakers" className="hover:text-orange-400">Speakers</Link>
            <Link href="/earphones" className="hover:text-orange-400">Earphones</Link>
          </nav>
        </div>

        <p className="text-white/75 text-[15px] leading-6 max-w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open 7 <br /> days a week.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-[15px]">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex gap-4">
            <Link href="#">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
