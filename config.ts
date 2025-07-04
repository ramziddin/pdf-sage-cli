export const config = {
  ollamaModel: "mistral",
  ollamaEmbeddingModel: "nomic-embed-text",
  ollamaEmbeddingDimensions: 768,
  ollamaBaseUrl: "http://localhost:11434",

  pgHost: "localhost",
  pgPort: 5433,
  pgUser: "postgres",
  pgPassword: "postgres",
  pgDatabase: "postgres",
  pgVectorEmbeddingsTableName: "embeddings",
};

export function getPgConnectionOptions() {
  return {
    type: "postgres",
    host: config.pgHost,
    port: config.pgPort,
    user: config.pgUser,
    password: config.pgPassword,
    database: config.pgDatabase,
  };
}
