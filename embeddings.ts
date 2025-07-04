import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters"
import { Document } from "@langchain/core/documents";
import { OllamaEmbeddings } from "@langchain/ollama";
import { PGVectorStore } from "@langchain/community/vectorstores/pgvector";
import { config, getPgConnectionOptions } from "./config";

export async function addPdf(path: string) {
  const pdfLoader = new PDFLoader(path);
  const docs: Document[] = await pdfLoader.load();
  const splits = await splitter.splitDocuments(docs);
  vectorStore.addDocuments(splits);
}

export async function similaritySearch(query: string) {
  return vectorStore.similaritySearch(query);
}

const embeddings = new OllamaEmbeddings({
  baseUrl: config.ollamaBaseUrl,
  model: config.ollamaEmbeddingModel,
});

const vectorStore = await PGVectorStore.initialize(embeddings, {
  postgresConnectionOptions: getPgConnectionOptions(),
  tableName: config.pgVectorEmbeddingsTableName,
});

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
