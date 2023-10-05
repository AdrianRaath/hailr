// Function to update the Cape Town time and background class
function updateCapeTownTimeAndBackground() {
  const capeTownTime = luxon.DateTime.now().setZone("Africa/Johannesburg");
  const CThour = capeTownTime.hour;

  // Determine whether it's morning, daytime, or nighttime
  let timeOfDayClass;
  if (CThour >= 6 && CThour < 12) {
    timeOfDayClass = "CTmorning";
  } else if (CThour >= 12 && CThour < 18) {
    timeOfDayClass = "CTdaytime";
  } else {
    timeOfDayClass = "CTnighttime";
  }

  // Update the class of the locationImage element for Cape Town
  const capeTownImageElement = document.getElementById("ctImage");
  capeTownImageElement.className = `locations_image-wrapper ${timeOfDayClass}`;

  // Update the Cape Town time display
  const formattedCapeTownTime = capeTownTime.toFormat(`(hh:mm:ss a)`);
  document.getElementById("capeTownTime").textContent = formattedCapeTownTime;
}

// Function to update the London time and background class
function updateLondonTimeAndBackground() {
  const londonTime = luxon.DateTime.now().setZone("Europe/London");
  const LondonHour = londonTime.hour;

  // Determine whether it's morning, daytime, or nighttime
  let timeOfDayClass;
  if (LondonHour >= 6 && LondonHour < 12) {
    timeOfDayClass = "LDmorning";
  } else if (LondonHour >= 12 && LondonHour < 18) {
    timeOfDayClass = "LDdaytime";
  } else {
    timeOfDayClass = "LDnighttime";
  }

  // Update the class of the ldImage element for London
  const londonImageElement = document.getElementById("ldImage");
  londonImageElement.className = `locations_image-wrapper ${timeOfDayClass}`;

  // Update the London time display
  const formattedLondonTime = londonTime.toFormat(`(hh:mm:ss a)`);
  document.getElementById("londonTime").textContent = formattedLondonTime;
}

// Update the Cape Town time and background class every second
setInterval(updateCapeTownTimeAndBackground, 1000);

// Update the London time and background class every second
setInterval(updateLondonTimeAndBackground, 1000);

// Initial update for both locations
updateCapeTownTimeAndBackground();
updateLondonTimeAndBackground();
