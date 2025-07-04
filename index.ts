import { addPdf } from "./embeddings";
import { ask } from "./llm";

await addPdf("./data/nke-10k-2023.pdf");
const question = "At July 12, 2023, how many holders of NIKE's Class B Common Stock were there?";
const answer = await ask(question);
console.log(answer);
