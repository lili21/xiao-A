"use client";
import Link from "next/link";
import { FormEvent, FormEventHandler } from "react";
export default function Test() {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" name="file" />
        <button className="px-4 py-1 bg-cyan-300">submit</button>
      </form>
      {/* <Link href={`/test/${state.id}`}>{state.id}</Link> */}
    </>
  );
}
