# pdf-sage-cli

To install dependencies:

```bash
bun install
```

## Running

```bash
docker compose up
bun index.ts --file ./data/nke-10k-2023.pdf --question "Tell me about Nike's 2023 stocks
```

## macOS

Ollama's macOS client is optimized for Apple Sillicon. So it's best to use the macOS client, instead of the Ollama's Docker image.

```bash
docker compose up pgvector # run only pgvector
bun index.ts --file ./data/nke-10k-2023.pdf --question "Tell me about Nike's 2023 stocks
```
