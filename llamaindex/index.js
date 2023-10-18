// example.ts
import fs from "fs/promises";
import {
  Document,
  VectorStoreIndex,
  SummaryIndex,
  OpenAI,
  OpenAIEmbedding,
  serviceContextFromDefaults,
  SimpleNodeParser,
  ResponseSynthesizer,
  TreeSummarize,
} from "llamaindex";
import "dotenv/config";
// import { OpenAI } from "llamaindex";
import { HttpsProxyAgent } from "https-proxy-agent";
import { SummaryRetrieverMode } from "llamaindex";
import { SummaryIndexRetriever } from "llamaindex";
import { SummaryIndexLLMRetriever } from "llamaindex";

const agent = new HttpsProxyAgent("http://localhost:8001");

const summaryTemplate = (context, query) => {
  return `以下是一份会议的文字记录，
---------------------
${context}
---------------------
根据会议的文字记录，回答问题.
问题: ${query}
答案:`;
};

async function main() {
  // Load essay from abramov.txt in Node
  const essay = await fs.readFile("./test.txt", "utf-8");

  // Create Document object with essay
  const document = new Document({ text: essay });

  const serviceContext = serviceContextFromDefaults({
    llm: new OpenAI({
      additionalSessionOptions: {
        httpAgent: agent,
      },
    }),
    embedModel: new OpenAIEmbedding({
      additionalSessionOptions: {
        httpAgent: agent,
      },
    }),
    // nodeParser: new SimpleNodeParser({
    //   chunkSize: 100,
    // }),
  });
  console.log("summary index start---");

  // Split text and create embeddings. Store them in a VectorStoreIndex
  const index = await SummaryIndex.fromDocuments([document], {
    serviceContext,
  });

  console.log("summary index end ---");

  // // Query the index
  // const queryEngine = index.asRetriever({
  //   mode: SummaryRetrieverMode.LLM,
  // });
  const summaryRetriever = new SummaryIndexLLMRetriever(index, undefined, 3);
  console.log("query start---");
  const response = await summaryRetriever.retrieve("会议讨论了什么内容");
  console.log("query end---");

  // Output response
  console.log(response);
}

main().catch((e) => console.log("error", e));
