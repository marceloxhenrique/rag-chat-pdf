import { Pinecone } from "@pinecone-database/pinecone";

const PINECONE_API_KEY: string = process.env.PINECONE_API_KEY ?? "pinecone_api_key";
export const pc = new Pinecone({ apiKey: PINECONE_API_KEY });
const indexName = "index-name";

export async function vectorStore(vectors: number[][], texts: string[]) {
  const records = vectors.map((values, i) => ({
    id: `chunk-${i}`,
    values,
    metadata: {
      text: texts[i],
    },
  }));
  console.log("Ready to upsert", records);
  const index = pc.index(indexName).namespace("example-namespace");
  await index.upsert(records);
}
