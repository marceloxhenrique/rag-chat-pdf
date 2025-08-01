import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function chunker(file: Document<Record<string, any>>[]) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 30,
    chunkOverlap: 10,
  });
  const fileSplits = await splitter.splitDocuments(file);
  return fileSplits;
}
