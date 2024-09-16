function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-output", {
    strings: `This is your recipe`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeGeneratorElement = document.querySelector("#recipe-generator");
recipeGeneratorElement.addEventListener("submit", generateRecipe);
