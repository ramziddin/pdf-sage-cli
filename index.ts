import { Command } from "commander";

const program = new Command();

program
  .name("pdf-sage-cli")
  .description("Summon the ancient wisdom from thy PDF scrolls! The arcane oracle awaits... 🧙✨")
  .option("--file <file>", "The sacred tome from which ancient knowledge shall be extracted 📜✨")
  .option("--question <question>", "The mystical inquiry to channel through the ethereal oracle 🔮")
  .action(async (options) => {
    const { file, question } = options;

    if (!file) {
      return console.log("The ancient tome remains sealed! Bestow upon me a PDF scroll to unveil its secrets! 📜✨");
    }

    if (!question) {
      return console.log("Speak thy query, mortal! The oracle awaits your question to divine the answers! 🔮");
    }

    const { addPdf } = await import("./embeddings");
    const { ask } = await import("./llm");

    console.log(`🌟 Channeling the ethereal energies from ${file}...`);
    await addPdf(file);

    console.log('🔮 The mystic threads weave through dimensions, revealing hidden truths...');
    const answer = await ask(question);
    console.log(answer);
  });

program.parse(process.argv);
