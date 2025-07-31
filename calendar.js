document.addEventListener('DOMContentLoaded', function() {
 
  const calendarDays = document.querySelectorAll('.calendar-day');
  
  calendarDays.forEach(day => {
    day.addEventListener('click', function() {
     
      calendarDays.forEach(d => {
        d.classList.remove('bg-primary', 'text-primary-foreground');
      });
     
      this.classList.add('bg-primary', 'text-primary-foreground');
      
     
      const selectedDay = this.textContent;
      const monthYear = document.querySelector('.calendar-header h3').textContent;
      document.querySelector('.card-header h2').textContent = `Wednesday, March ${selectedDay}, 2025`;
    });
  });
  
 
  const todayBtn = document.getElementById('today-btn');
  
  if (todayBtn) {
    todayBtn.addEventListener('click', function() {
      
      const today = document.querySelector('.calendar-day.bg-primary');
      
     
      window.scrollTo({
        top: document.querySelector('.card-content').offsetTop - 100,
        behavior: 'smooth'
      });
    });
  }
  

  const viewButtons = document.querySelectorAll('.card-header .button');
  
  viewButtons.forEach(button => {
    button.addEventListener('click', function() {
  
      viewButtons.forEach(btn => {
        btn.classList.remove('button-outline');
        btn.classList.add('button-outline');
      });
      
      this.classList.remove('button-outline');
      
  
    });
  });
});

const calendarDates = document.querySelector('.calendar-dates');
const monthYear = document.getElementById('month-year');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar(month, year) {
  calendarDates.innerHTML = '';
  monthYear.textContent = `${months[month]} ${year}`;

 
  const firstDay = new Date(year, month, 1).getDay();


  const daysInMonth = new Date(year, month + 1, 0).getDate();

 
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    calendarDates.appendChild(blank);
  }


  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.textContent = i;
    calendarDates.appendChild(day);
  }
}
renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});
