const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let dreamCount = 0; 


const monthDisplay = document.querySelector('.month-display');
const prevMonthBtn = document.querySelector('.prev-month');
const nextMonthBtn = document.querySelector('.next-month');
const dreamCountDisplay = document.querySelector('.dream-count'); 

function createCalendar(year, month) {

  monthDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

  const calendarDays = document.querySelector('.calendar-days');
  calendarDays.innerHTML = '';

  
  const firstDayOfMonth = new Date(year, month, 1).getDay();


  const daysInMonth = new Date(year, month + 1, 0).getDate();

  
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.innerHTML += '<div class="day"></div>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.textContent = i;
    dayDiv.setAttribute('data-date', `${year}-${month + 1}-${i}`);
    dayDiv.addEventListener('click', () => recordDream(`${year}-${month + 1}-${i}`));
    calendarDays.appendChild(dayDiv);
  }
}


function recordDream(date) {
  const dayElement = document.querySelector(`.day[data-date="${date}"]`);

  
  if (dayElement.classList.contains('dreamt')) {
    dayElement.classList.remove('dreamt');
    dayElement.classList.add('not-dreamt');
    dreamCount--; 
  } else if (dayElement.classList.contains('not-dreamt')) {
    dayElement.classList.remove('not-dreamt');
    dayElement.classList.add('dreamt');
    dreamCount++; 
  } else {
    dayElement.classList.add('dreamt');
    dreamCount++; 
  }

  
  dreamCountDisplay.textContent = dreamCount;
}


prevMonthBtn.addEventListener('click', () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  createCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener('click', () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  createCalendar(currentYear, currentMonth);
});


createCalendar(currentYear, currentMonth);
