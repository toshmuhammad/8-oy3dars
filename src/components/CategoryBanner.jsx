export default function CategoryBanner({ title = "HEADPHONES" }) {
  return (
    <div className="bg-black text-white w-full">
      <div className="max-w-[1110px] mx-auto px-6 py-20 text-center">
        <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold uppercase tracking-widest">
          {title}
        </h1>
      </div>
    </div>
  );
}
