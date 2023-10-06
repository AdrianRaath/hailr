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

$(document).ready(function () {
  $(".form-input")
    .on("focus", function () {
      // When the input is focused, make the sibling label visible and move it above the input
      $(this).siblings(".form-field-top-label").css({
        visibility: "visible",
        left: "0",
        opacity: "1",
      });
    })
    .on("blur", function () {
      // When the input loses focus, check its value. If it's empty, reset the label's position.
      if ($(this).val().length === 0 || $(this).val() === "Default") {
        $(this).siblings(".form-field-top-label").css({
          visibility: "hidden",
          left: "-20px",
          opacity: "0",
        });
      }
    });
});

// For text inputs
$(".form-input").on("blur", function () {
  if ($(this).val().length > 0 && $(this).val() !== "Default") {
    $(this).addClass("has-value");
  } else {
    $(this).removeClass("has-value");
  }
});

// For select input
$("select.form-input").on("change blur", function () {
  if ($(this).val() !== "Default" && $(this).val() !== "") {
    $(this).addClass("has-value");
  } else {
    $(this).removeClass("has-value");
  }
});
