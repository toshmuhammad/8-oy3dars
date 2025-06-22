"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black w-full">
      <div className="max-w-[1110px] mx-auto px-6 py-8 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="text-white text-[28px] font-bold uppercase tracking-[2px]">
          audiophile
        </Link>

        <nav className="hidden md:flex gap-8 text-white text-[13px] uppercase tracking-[2px]">
          <Link href="/" className="hover:text-orange-400">Home</Link>
          <Link href="/headphones" className="hover:text-orange-400">Headphones</Link>
          <Link href="/speakers" className="hover:text-orange-400">Speakers</Link>
          <Link href="/earphones" className="hover:text-orange-400">Earphones</Link>
        </nav>

        <Link href="/cart" className="cursor-pointer">
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="Cart"
            width={23}
            height={20}
          />
        </Link>
      </div>
    </header>
  );
}
