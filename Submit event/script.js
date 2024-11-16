const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('name');
const output = document.getElementById('outputText');

nameForm.addEventListener('submit', (e) => {
    e.preventDefault();

    output.textContent = `Teks yang keluar ${nameInput.value}`;

    nameInput.value = '';

});