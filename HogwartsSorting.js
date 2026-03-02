document.getElementById('hogwartsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const preferredHouse = document.getElementById('house').value;

  const traits = Array.from(document.querySelectorAll('input[name="traits"]:checked'))
                      .map(el => el.value);

  const classes = Array.from(document.querySelectorAll('input[name="classes"]:checked'))
                       .map(el => el.value);

  const houseTraits = {
    Gryffindor: ['Brave', 'Determined', 'Courageous'],
    Hufflepuff: ['Loyal', 'Hardworking', 'Patient'],
    Ravenclaw: ['Wise', 'Creative', 'Intelligent'],
    Slytherin: ['Cunning', 'Ambitious', 'Determined']
  };

  let houseScores = { Gryffindor: 0, Hufflepuff: 0, Ravenclaw: 0, Slytherin: 0 };

  traits.forEach(trait => {
    for (let house in houseTraits) {
      if (houseTraits[house].includes(trait)) {
        houseScores[house]++;
      }
    }
  });

  let recommendedHouse = Object.keys(houseScores).reduce((a, b) => houseScores[a] >= houseScores[b] ? a : b);

  const userData = {
    name,
    preferredHouse,
    traits,
    classes,
    recommendedHouse
  };

  localStorage.setItem('hogwartsUser', JSON.stringify(userData));

  const confirmationDiv = document.getElementById('confirmation');

  let html = `
    Welcome <strong>${name}</strong>!<br>
    Preferred House: <strong>${preferredHouse || 'None selected'}</strong><br>
    Recommended House based on traits: <strong>${recommendedHouse}</strong><br>
    Traits selected: ${traits.join(', ')}
  `;

  if (classes.length > 0) {
    html += `<h3>Your Magical Class Schedule</h3>`;
    html += `<div class="schedule-cards">`;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    classes.forEach((cls, index) => {
      const day = days[index % days.length];
      html += `
        <div class="class-card">
          <div class="class-day">${day}</div>
          <div class="class-name">${cls}</div>
        </div>
      `;
    });
    html += `</div>`;
  }

  confirmationDiv.innerHTML = html;

  this.reset();
});