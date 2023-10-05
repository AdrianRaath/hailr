// Get references to the open and close buttons by their IDs
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

// Add a click event listener to the close button
closeButton.addEventListener("click", function () {
  // Trigger a click event on the open button
  openButton.click();
});
