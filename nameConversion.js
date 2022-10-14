const inputArea = document.querySelector("#text");
const button = document.querySelector("#convert-btn");
const snakeCase = document.querySelector("#snake-case");
const kebabCase = document.querySelector("#kebab-case");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");

// function to convert string into camelCase;
const toCamelCase = (string) => {
  const textArray = string.split(" ");
  const array = textArray.map((word, index) => {
    if (index === 0) {
      return (word = word.toLowerCase());
    } else {
      const initialLetter = word.slice(0, 1);
      const remaining = word.slice(1);
      return initialLetter.toUpperCase() + remaining;
    }
  });
  return array.join("");
};
// function to convert string into camelCase;
const toPascalCase = (string) => {
  const textArray = string.split(" ");
  const array = textArray.map((word) => {
  const initialLetter = word.slice(0, 1);
  const remainingLetter = word.slice(1);
    return initialLetter.toUpperCase() + remainingLetter;
  });
  return array.join("");
};
// function to convert string into snakeCase;
const toSnakeCase = (string) => {
  const textArray = string.split(" ");
  const array = textArray.map((word) => {
  const letter = word.toLowerCase();
  return letter;
  });
  return array.join("_");
};
// function to convert string into screamingSnakeCase;
const toScreamingSnakeCase = (string) => {
  const textArray = string.split(" ");
  const array = textArray.map((word) => {
  const letter = word.toUpperCase();
  return letter;
  });
  return array.join("_");
};

// function to convert string into kebabCase;
const toKebabCase = (string) => {
  const textArray = string.split(" ");
  const array = textArray.map((word) => {
  const letter = word.toLowerCase();
  return letter;
  });
  return array.join("-");
};
// function to convert string into screamingKebabCase;
const toScreamingKebabCase = (string) => {
  const textArray = string.split(" ");
  const array = textArray.map((word) => {
  const letter = word.toUpperCase();
  return letter;
  });
  return array.join("-");
};

// to Display output on screen
button.addEventListener("click",()=>{
  camelCase.innerHTML=toCamelCase(inputArea.value)
  snakeCase.innerHTML=toSnakeCase(inputArea.value)
  kebabCase.innerHTML=toKebabCase(inputArea.value)
  pascalCase.innerHTML=toPascalCase(inputArea.value)
  screamingKebabCase.innerHTML=toScreamingKebabCase(inputArea.value)
  screamingSnakeCase.innerHTML=toScreamingSnakeCase(inputArea.value)
})

