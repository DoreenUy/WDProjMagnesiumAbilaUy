const map = document.getElementById("map");
const popup = document.getElementById("popup");
const title = document.getElementById("popup-title");
const text = document.getElementById("popup-text");
const img = document.getElementById("popup-img");
const closeBtn = document.getElementById("closePopup");

document.querySelectorAll(".hotspot").forEach(spot => {
  spot.addEventListener("click", () => {
    const place = spot.dataset.place;

    if (place === "hall") {
      map.style.transform = "scale(2.2) translate(-10%, -15%)";
      title.textContent = "The Great Hall";
      img.src = "assets/great-hall.jpg";
      text.textContent =
        "The Great Hall is the heart of Hogwarts, where feasts, ceremonies, and important announcements take place.";
    }

    if (place === "library") {
      map.style.transform = "scale(2.5) translate(-5%, -25%)";
      title.textContent = "Hogwarts Library";
      img.src = "assets/library.jpg";
      text.textContent =
        "Home to thousands of magical books, the library played a major role in Hermione’s research.";
    }

    if (place === "dungeons") {
      map.style.transform = "scale(2.8) translate(-10%, -5%)";
      title.textContent = "The Dungeons";
      img.src = "assets/dungeons.jpg";
      text.textContent =
        "Located beneath the castle, the dungeons include the Slytherin common room and Potions classroom.";
    }

    if (place === "astronomy") {
      map.style.transform = "scale(2.3) translate(-20%, -40%)";
      title.textContent = "Astronomy Tower";
      img.src = "assets/astronomy-tower.jpg";
      text.textContent =
        "A key location for stargazing classes and one of the most tragic moments in Hogwarts history.";
    }

    if (place === "quidditch") {
      map.style.transform = "scale(2) translate(25%, -30%)";
      title.textContent = "Quidditch Pitch";
      img.src = "assets/quidditch.jpg";
      text.textContent =
        "The site of legendary matches and intense house rivalries.";
    }

    if (place === "entrance") {
  map.style.transform = "scale(2.3) translate(-8%, -18%)";
  title.textContent = "Entrance Hall";
  img.src = "assets/entrance-hall.jpg";
  text.textContent =
    "The Entrance Hall connects the Great Hall to the rest of Hogwarts and is where students first step into the castle.";
}

if (place === "common") {
  map.style.transform = "scale(2.6) translate(-12%, -10%)";
  title.textContent = "Common Rooms";
  img.src = "assets/common-room.jpg";
  text.textContent =
    "Each house has its own common room, offering warmth, safety, and a place to belong.";
}

if (place === "forest") {
  map.style.transform = "scale(1.9) translate(35%, -5%)";
  title.textContent = "Forbidden Forest";
  img.src = "assets/forbidden-forest.jpg";
  text.textContent =
    "Dark and dangerous, the Forbidden Forest is home to magical creatures and many secret encounters.";
}

if (place === "requirement") {
  map.style.transform = "scale(2.7) translate(-20%, -25%)";
  title.textContent = "Room of Requirement";
  img.src = "assets/room-of-requirement.jpg";
  text.textContent =
    "A magical room that appears only when someone truly needs it.";
}

if (place === "hospital") {
  map.style.transform = "scale(2.4) translate(-15%, -20%)";
  title.textContent = "Hospital Wing";
  img.src = "assets/hospital-wing.jpg";
  text.textContent =
    "Madam Pomfrey heals injured students here using powerful magical remedies.";
}

if (place === "office") {
  map.style.transform = "scale(2.5) translate(-10%, -35%)";
  title.textContent = "Headmaster’s Office";
  img.src = "assets/headmasters-office.jpg";
  text.textContent =
    "A mysterious office containing portraits of former headmasters and powerful magical artifacts.";
}

    popup.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  map.style.transform = "scale(1) translate(0, 0)";
});
