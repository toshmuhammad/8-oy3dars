import Card from "@/components/Card";
import CategoryBanner from "@/components/CategoryBanner";
import CategoryGrid from "@/components/CategoryGrid";
import AboutSection from "@/components/AboutSection";

export const revalidate = 3600;

export default async function Page({ params }) {
  const { category } = params;

  const req = await fetch(
    `https://json-api.uz/api/project/nextjs/products?category=${category}`
  );
  const { data } = await req.json();

  return (
    <div>
      <CategoryBanner title={category.toUpperCase()} />

      {data.length > 0 ? (
        <ul>
          {data.map((element) => (
            <li key={element.id}>
              <Card {...element} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Bunday categorya mavjud emas</p>
      )}

      <CategoryGrid />
      <AboutSection />
    </div>
  );
}
