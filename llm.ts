import { ChatOllama } from "@langchain/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { similaritySearch } from "./embeddings";
import { config } from "./config";

export async function ask(question: string) {
  const results = await similaritySearch(question);
  const context = results.map(result => result.pageContent).join("\n\n");
  const promptValue = await promptTemplate.invoke({
    context,
    question,
  });
  const response = await model.invoke(promptValue);
  const textResponse = response.content.toString().trim();
  return textResponse;
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
