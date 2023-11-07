<script lang="ts">
  import { HfInference } from "@huggingface/inference"; // importujemy potrzebne narzędzie z biblioteki HuggingFace
  let userInput: string;
  const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN); // konfigurujemy narzędzie z naszym kluczem dostępu

  async function ask() {
    const blob = await hf.textToImage({
      // interesujący nas sposób interakcji z danym modelem - w tym wypadku wpisany tekst zamieniany na wygenerowany obraz
      model: "stabilityai/stable-diffusion-xl-base-1.0", // konkretny model ze strony HuggingFace
      inputs: userInput, // dane wejściowe użytkownika
    });
    return URL.createObjectURL(blob);
  }
</script>

<main>
    <!-- Tutaj wpisz własny kod układu strony -->
</main>

<style>
    /* Tu znajdzie się kod odpowiadający za wygląd strony */
</style>
