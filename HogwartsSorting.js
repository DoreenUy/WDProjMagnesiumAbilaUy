document.getElementById('hogwartsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const house = document.getElementById('house').value;

  const traits = Array.from(document.querySelectorAll('input[name="traits"]:checked'))
                      .map(el => el.value);

  const classes = Array.from(document.querySelectorAll('input[name="classes"]:checked'))
                       .map(el => el.value);

  const userData = { name, house, traits, classes };
  localStorage.setItem('hogwartsUser', JSON.stringify(userData));

  const confirmationDiv = document.getElementById('confirmation');

  let html = `
    Welcome <strong>${name}</strong>! You have been sorted into <strong>${house}</strong>.<br>
    Traits selected: ${traits.join(', ')}<br>
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