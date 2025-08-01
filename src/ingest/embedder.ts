import { OpenAIEmbeddings } from "@langchain/openai";

export async function embeddings(chunks: string[]) {
  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });
  return await embeddings.embedDocuments(chunks);
}
