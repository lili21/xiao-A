import { HOST } from "@/lib/const";

export async function Summary({ id }: { id: string }) {
  const res = await fetch(`${HOST}/query?id=${id}`, {
    cache: "no-cache",
  });
  const sum = await res.text();
  return <p className="font-mono tracking-wider leading-normal">{sum}</p>;
}
