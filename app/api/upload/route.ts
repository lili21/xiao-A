import { nanoid } from "nanoid";
import { writeFile } from "fs/promises";
import path from "path";
import { createVectorStore } from "../store";
import { NextRequest, NextResponse } from "next/server";
// export const runtime = "nodejs"; // default

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const id = nanoid(7);
    const p = path.join("/", "tmp", id);
    await writeFile(p, buffer);

    // await createVectorStore(p, id);
    console.log("success ----");

    return NextResponse.json({ id });
  }
  return NextResponse.json({ msg: "no file" });
}
