# pdf-sage-cli

To install dependencies:

```bash
bun install
```

To run the script it needs Ollama and PostgreSQL db with pgvector plugin. The `docker-compose.yml` file already contains everything that's needed. Run `docker compose up`, wait for the ollama models to be pulled, then run:

```bash
bun index.ts
```
