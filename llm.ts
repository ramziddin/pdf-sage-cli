import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { similaritySearch } from "./embeddings";
import { config } from "./config";

export async function ask(question: string) {
  console.time("similaritySearch");
  const results = await similaritySearch(question);
  const context = results.map(result => result.pageContent).join("\n\n");
  console.timeEnd("similaritySearch");

  const promptValue = await promptTemplate.invoke({
    context,
    question,
  });

  console.time("model");
  const response = await model.stream(promptValue);
  console.timeEnd("model");

  return response;
}

const model = new ChatOllama({
  model: config.ollamaModel,
  baseUrl: config.ollamaBaseUrl,
});

const systemTemplate = "Answer user's question based on the following infromation:\n\n{context}";

const promptTemplate = ChatPromptTemplate.fromMessages([
  ["system", systemTemplate],
  ["user", "{question}"],
]);
