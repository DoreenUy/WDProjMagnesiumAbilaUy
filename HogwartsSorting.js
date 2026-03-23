const form = document.getElementById('hogwartsForm');
const confirmation = document.getElementById('confirmation');

function getFormData() {
    const name = document.getElementById('name').value;
    const house = document.getElementById('house').value;
    const traits = Array.from(document.querySelectorAll('input[name="traits"]:checked')).map(cb => cb.value);
    const classes = Array.from(document.querySelectorAll('input[name="classes"]:checked')).map(cb => cb.value);

    return { name, house, traits, classes };
}

function showConfirmation(message, type = "success") {
    confirmation.textContent = message;
    confirmation.style.color = type === "success" ? "green" : "red";
    setTimeout(() => { confirmation.textContent = ""; }, 3000);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = getFormData();
    localStorage.setItem('hogwartsUser', JSON.stringify(data));
    showConfirmation("Your data has been saved!");
});

function populateForm() {
    const data = JSON.parse(localStorage.getItem('hogwartsUser'));
    if (!data) return;

    document.getElementById('name').value = data.name;
    document.getElementById('house').value = data.house;

    document.querySelectorAll('input[name="traits"]').forEach(cb => cb.checked = data.traits.includes(cb.value));
    document.querySelectorAll('input[name="classes"]').forEach(cb => cb.checked = data.classes.includes(cb.value));
}

function updateData() {
    const saved = JSON.parse(localStorage.getItem('hogwartsUser'));
    if (!saved) {
        showConfirmation("No data to update!", "error");
        return;
    }
    const data = getFormData();
    localStorage.setItem('hogwartsUser', JSON.stringify(data));
    showConfirmation("Your data has been updated!");
}

function deleteData() {
    const saved = JSON.parse(localStorage.getItem('hogwartsUser'));
    if (!saved) {
        showConfirmation("No data to delete!", "error");
        return;
    }
    if (confirm("Are you sure you want to delete your data?")) {
        localStorage.removeItem('hogwartsUser');
        form.reset();
        showConfirmation("Your data has been deleted!");
    }
}

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === "u") updateData(); // Ctrl + U for update
    if (e.ctrlKey && e.key === "d") deleteData(); // Ctrl + D for delete
});

window.addEventListener('load', populateForm);