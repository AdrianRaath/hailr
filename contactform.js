// Function to auto-resize the textarea
function autoResizeTextarea() {
  this.style.height = "auto"; // Reset the height to auto
  this.style.height = this.scrollHeight + 2 + "px"; // Set the height to fit the content
}

// Attach the auto-resize function to all textareas with the 'form-input' class
var textareas = document.querySelectorAll(".form-input");
textareas.forEach(function (textarea) {
  textarea.addEventListener("input", autoResizeTextarea);
});

// Select the textarea element by its ID or class
var textarea = document.getElementById("Message"); // Replace "yourTextareaId" with the actual ID of your textarea

// Set the resize property to "none"
textarea.style.resize = "none";
// Set the column-count property to the desired value (e.g., 1)

// Get references to the open and close buttons by their IDs
const actualButton = document.getElementById("form-submit");
const visibleButton = document.getElementById("form-button");

// Add a click event listener to the close button
visibleButton.addEventListener("click", function () {
  // Trigger a click event on the open button
  actualButton.click();
});

document.getElementById("Message").setAttribute("rows", "1");

$(document).ready(function () {
  // Listen for change events on select inputs with the specified class
  $(".form-input.is-select-input").on("change", function () {
    var selectedValue = $(this).val();

    if (selectedValue === "Default") {
      // Set the font color to #b6b6b6
      $(this).css("color", "#b6b6b6");
    } else {
      // Set the font color to black
      $(this).css("color", "black");
    }
  });
});
