import { HOST } from "@/lib/const";
export default async function Detail({ params }: { params: { id: string } }) {
  const res = await fetch(`${HOST}/query?id=${params.id}`, {
    cache: "no-cache",
  });
  const sum = await res.text();

  return (
    <p className="mt-12 font-mono text-black text-base tracking-wider leading-normal">
      {sum}
    </p>
  );
}
