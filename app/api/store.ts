import { readFile } from "fs/promises";
import { Document, VectorStoreIndex } from "llamaindex";
export const Store = new Map<string, VectorStoreIndex>();

export async function createVectorStore(filepath: string, id: string) {
  // Load essay from abramov.txt in Node
  const essay = await readFile(filepath, "utf-8");

  // Create Document object with essay
  const document = new Document({ text: essay });

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await VectorStoreIndex.fromDocuments([document]);

  // // Query the index
  // const queryEngine = index.asQueryEngine();
  // const response = await queryEngine.query(
  //   "What did the author do in college?"
  // );
  Store.set(id, index);
}
