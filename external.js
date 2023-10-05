// Get references to the open and close buttons by their IDs
const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");

// Add a click event listener to the close button
closeButton.addEventListener("click", function () {
  // Trigger a click event on the open button
  openButton.click();
});

//Functionality to invert nav colors when over a dark/light element
const fixedLogo = document.getElementById("fixed-logo");
const fixedButtons = document.getElementById("fixed-buttons");
const darkElements = document.querySelectorAll('[color="dark"]');

function checkOverlap() {
  const fixedLogoRect = fixedLogo.getBoundingClientRect();
  const fixedButtonsRect = fixedButtons.getBoundingClientRect();

  // Check if any dark element overlaps with the logo or buttons
  let isOverlapping = false;
  darkElements.forEach((element) => {
    const elementRect = element.getBoundingClientRect();
    if (
      (elementRect.right >= fixedLogoRect.left &&
        elementRect.left <= fixedLogoRect.right &&
        elementRect.bottom >= fixedLogoRect.top &&
        elementRect.top <= fixedLogoRect.bottom) ||
      (elementRect.right >= fixedButtonsRect.left &&
        elementRect.left <= fixedButtonsRect.right &&
        elementRect.bottom >= fixedButtonsRect.top &&
        elementRect.top <= fixedButtonsRect.bottom)
    ) {
      isOverlapping = true;
    }
  });

  // Add or remove the 'invert' class based on the overlap
  if (isOverlapping) {
    fixedLogo.classList.add("invert");
    fixedButtons.classList.add("invert");
  } else {
    fixedLogo.classList.remove("invert");
    fixedButtons.classList.remove("invert");
  }
}

// Check for overlap when the page scrolls or resizes
window.addEventListener("scroll", checkOverlap);
window.addEventListener("resize", checkOverlap);

// Initial check
checkOverlap();

// Get all elements with the class name "campaigns_link-block"
const campaignBlocks = document.querySelectorAll(".campaigns_link-block");

// Add hover event listeners to each element
campaignBlocks.forEach((campaignBlock) => {
  campaignBlock.addEventListener("mouseenter", () => {
    // Add the "data-color" attribute with the value "dark" on hover
    campaignBlock.setAttribute("color", "dark");
  });

  campaignBlock.addEventListener("mouseleave", () => {
    // Remove the "data-color" attribute on hover out
    campaignBlock.removeAttribute("color");
  });
});
