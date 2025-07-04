echo "Starting Ollama server..."
ollama serve &
OLLAMA_PID=$!

echo "Waiting for Ollama server to be ready..."
until ollama list &>/dev/null
do
  echo "Ollama not ready yet, retrying in 3 seconds..."
  sleep 3
done

echo "Ollama server is ready!"

echo "Pulling models..."
ollama pull mistral:latest
ollama pull nomic-embed-text:latest

echo "Ollama server ready with models loaded"
wait $OLLAMA_PID
