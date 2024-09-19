function displayRecipe(response) {
  new Typewriter("#recipe-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInstructionsInput = document.querySelector("#user-instructions");
  let apiKey = "at12a73f4a384odff22ab003eefa9af8";
  let prompt = `User instructions: Generate a quick whole foods recipe ${userInstructionsInput.value} .`;
  let context =
    "You are an expert in nutrition and whole food recipes AI assistant. You goal is give the user a recipe recommendation of 7 lines that is budget friendly and quick and easy. display the recipe with a title in a strong element, seperate each line with <br>. Make sure that you follow the user's instructions. Seperate the <strong>ingredients</strong> list from the <stong>instructions</strong> of the recipe,";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeOutput = document.querySelector("#recipe-output");
  recipeOutput.classList.remove("hidden");
  recipeOutput.innerHTML = `⏳Generating the recipe - ${userInstructionsInput.value}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe);
