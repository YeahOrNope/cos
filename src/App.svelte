<script lang="ts">
  import { HfInference, imageClassification } from "@huggingface/inference"; // importujemy potrzebne narzędzie z biblioteki HuggingFace
  let userInput: string;
  let imagePromise: Promise<string>;

  const hf = new HfInference(import.meta.env.VITE_HUGGING_FACE_ACCESS_TOKEN); // konfigurujemy narzędzie z naszym kluczem dostępu

  async function ask() {
    const blob = await hf.textToImage({
      // interesujący nas sposób interakcji z danym modelem - w tym wypadku wpisany tekst zamieniany na wygenerowany obraz
      model: "stabilityai/stable-diffusion-xl-base-1.0", // konkretny model ze strony HuggingFace
      inputs: userInput, // dane wejściowe użytkownika
    });
    return URL.createObjectURL(blob);
  }

  function generateImage() {
    imagePromise = ask();
  }
</script>

<main>
    <div class="centered">
      <div>
        <input bind:value={userInput} />
        <button on:click={generateImage}>Generate</button>
      </div>
      <div class="generated-image">
        {#if imagePromise}
          {#await imagePromise}
          Loading...
          {:then result}
          <img width=320 height=320 src={result} alt="Ai generated image"/>
          {:catch}
          Oops! Failed to generate the Image
          {/await}
        {:else}
          No image generated
      {/if}
      <input bind:value={userInput} />
      <button on:click={generateImage}>Generate</button>
      {#if imagePromise}
        {#await imagePromise}
          Loading...
        {:then result}
          <img width=320 height=320 src={result} alt="Ai generated image"/>
        {:catch}
          Oopse! Failed to generate the Image
          {/await}
      {:else}
        No image generated
      {/if}
      </div>
    </div>
</main>

<style>
  main {
    background-color: #afdeeb;
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    /* Tu znajdzie się kod odpowiadający za wygląd strony */

  input {
    padding: 4px;
    border: solid;
    border-radius: 1000px;
    text-align: center;
  }

  button {
    padding: 4px;
    border: solid;
    border-radius: 1000px;
    text-align: center;
  }

  .centered {
    background-color: aquamarine;
    padding: 20px;
    border: solid;
  }
  
  .generated-image {
    color: white;
    text-align: center;
    margin: 100px;
  }
</style>