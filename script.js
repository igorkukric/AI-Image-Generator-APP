const apiKey = "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";

const maxImages = 4; // Number of images to generate for each prompt
let selectedImageNumber = null;

// Function to generate random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.random(Math.random() * (max - min + 1)) + min;
}

// Function to disable the generate button during proccesing
function disableGenerateButtton() {
  document.getElementById("generate").disabled = true;
}
// Function to enagle the generate button after procces
function disableGenerateButtton() {
  document.getElementById("generate").disabled = false;
}

// Function to clear image grid
function clearImageGrid() {
  const imageGrid = document.getElementById("image-grid");
  imageGrid.innerHTML = "";
}
