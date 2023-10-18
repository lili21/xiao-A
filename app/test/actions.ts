"use server";
import { writeFile } from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
import { createVectorStore } from "./store";

export async function upload(prevState: any, formData: FormData) {
  const file = formData.get("file") as File | null;
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const id = nanoid(7);
    const p = path.join("/", "tmp", id);
    await writeFile(p, buffer);

    await createVectorStore(p, id);

    return { id };
  }
  return { msg: "no file" };
}
