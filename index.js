const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

const monthsByDaysLong = [
  { month: 'January', days: 31 },
  { month: 'February', days: 28 },
  { month: 'March', days: 31 },
  { month: 'April', days: 30 },
  { month: 'May', days: 31 },
  { month: 'June', days: 30 },
  { month: 'July', days: 31 },
  { month: 'August', days: 31 },
  { month: 'September', days: 30 },
  { month: 'October', days: 31 },
  { month: 'November', days: 30 },
  { month: 'December', days: 31 },
];  

select.addEventListener('change', () => {
  const choice = select.value;
  const days = monthsByDaysLong.filter(calendarMonth => calendarMonth.month === choice).map(calendarMonth => calendarMonth.days)
  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');