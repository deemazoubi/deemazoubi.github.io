const dreamForm = document.getElementById('dream-form');
const dreamEntry = document.getElementById('dream-entry');
const dreamList = document.getElementById('dream-list');


let dreams = JSON.parse(localStorage.getItem('dreams')) || [];

function displayDreams() {
  dreamList.innerHTML = ''; 
  dreams.forEach((dream, index) => {
    const dreamItem = document.createElement('div');
    dreamItem.classList.add('dream-item');
    
    const dreamText = document.createElement('p');
    dreamText.textContent = dream;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteDream(index));

    dreamItem.appendChild(dreamText);
    dreamItem.appendChild(deleteButton);

    dreamList.appendChild(dreamItem);
  });
}

function saveDream(event) {
  event.preventDefault(); 

  const dreamText = dreamEntry.value.trim();
  if (dreamText) {
    dreams.push(dreamText); 
    localStorage.setItem('dreams', JSON.stringify(dreams)); 
    dreamEntry.value = ''; 
    displayDreams(); 
  }
}

function deleteDream(index) {
  dreams.splice(index, 1); 
  localStorage.setItem('dreams', JSON.stringify(dreams)); 
  displayDreams(); 
}

dreamForm.addEventListener('submit', saveDream);

displayDreams();
