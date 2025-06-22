import Card from "@/components/Card";

export const revalidate = 3600;

export default async function page({ params }) {
  const { slug } = params;

  const req = await fetch(
    `https://json-api.uz/api/project/nextjs/products?slug=${slug}`
  );
  const { data } = await req.json();

  const result = data[0];

  return (
    <div>
      {data.length > 0 ? (
        <Card {...result} />
      ) : (
        <p>Bunday tur mavjud emas</p>
      )}
    </div>
  );
}