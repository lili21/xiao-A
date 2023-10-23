export async function Summary({ id }: { id: string }) {
  const res = await fetch(`${process.env.API_HOST}/query?id=${id}`, {
    cache: "no-store",
  });
  const sum = await res.text();
  return <p className="font-mono tracking-wider leading-normal">{sum}</p>;
}
