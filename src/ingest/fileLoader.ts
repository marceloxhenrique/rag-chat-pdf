import { TextLoader } from "langchain/document_loaders/fs/text";

export async function fileLoader(filePath: string) {
  const loader = new TextLoader(filePath);
  const file = await loader.load();
  return file;
}
