echo "Starting Ollama server..."
ollama serve &

echo "Waiting for Ollama server to be ready..."
until ollama list &>/dev/null
do
  sleep 1
done

echo "Pulling models..."
ollama pull mistral:latest
ollama pull nomic-embed-text:latest
