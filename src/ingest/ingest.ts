import { fileLoader } from "./fileLoader";
import { chunker } from "./chunker";
import { embeddings } from "./embedder";
import { vectorStore } from "./vectorStore";

const path = "./public/text.txt";

export async function ingest() {
  try {
    const file = await fileLoader(path);
    const textChunks = await chunker(file);
    const texts = textChunks.map((chunks) => chunks.pageContent);
    const vectors = await embeddings(texts);
    await vectorStore(vectors, texts);
  } catch (error) {
    console.error("Failed during ingestion: ", error);
  }
}
