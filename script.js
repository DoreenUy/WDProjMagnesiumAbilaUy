document.addEventListener("DOMContentLoaded", () => {
  const houseColors = ["#740001", "#1A472A", "#EEE117", "#0E1A40"]; // Gryffindor, Slytherin, Hufflepuff, Ravenclaw
  let colorIndex = 0;

  function changeColor() {
    const nextIndex = (colorIndex + 1) % houseColors.length;
    let step = 0;
    const steps = 50;
    const interval = setInterval(() => {
      step++;
      const ratio = step / steps;
      
      const currentColor = hexToRgb(houseColors[colorIndex]);
      const nextColor = hexToRgb(houseColors[nextIndex]);
      const blended = {
        r: Math.round(currentColor.r + (nextColor.r - currentColor.r) * ratio),
        g: Math.round(currentColor.g + (nextColor.g - currentColor.g) * ratio),
        b: Math.round(currentColor.b + (nextColor.b - currentColor.b) * ratio),
      };
      document.body.style.backgroundColor = `rgb(${blended.r}, ${blended.g}, ${blended.b})`;

      if(step >= steps) {
        clearInterval(interval);
        colorIndex = nextIndex;
        setTimeout(changeColor, 3000);
      }
    }, 50);
  }

  function hexToRgb(hex) {
    hex = hex.replace("#",""); 
    return {
      r: parseInt(hex.substring(0,2),16),
      g: parseInt(hex.substring(2,4),16),
      b: parseInt(hex.substring(4,6),16)
    };
  }

  changeColor();
const sortingHat = document.querySelector(".sorting-hat");
const houses = document.querySelectorAll(".house");
const resultText = document.getElementById("house-result");

sortingHat.addEventListener("click", () => {
  // Reset previous effects
  houses.forEach(house => {
    house.classList.remove("selected", "shake");
  });
  sortingHat.classList.remove("shake-hat");
  resultText.style.opacity = 0;

  // Start shaking
  houses.forEach(house => house.classList.add("shake"));
  sortingHat.classList.add("shake-hat");
  resultText.textContent = "The Sorting Hat is thinking...";
  resultText.style.opacity = 1;

  setTimeout(() => {
    houses.forEach(house => house.classList.remove("shake"));
    sortingHat.classList.remove("shake-hat");

    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    randomHouse.classList.add("selected");

    // Get house name from class
    if (randomHouse.classList.contains("gryffindor")) {
      resultText.textContent = "Gryffindor!";
    } else if (randomHouse.classList.contains("slytherin")) {
      resultText.textContent = "Slytherin!";
    } else if (randomHouse.classList.contains("hufflepuff")) {
      resultText.textContent = "Hufflepuff!";
    } else if (randomHouse.classList.contains("ravenclaw")) {
      resultText.textContent = "Ravenclaw!";
    }
  }, 2500);
});
});