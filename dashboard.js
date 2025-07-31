
if (document.getElementById('current-year')) {
  document.getElementById('current-year').textContent = new Date().getFullYear();
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
 
  document.addEventListener('click', function(e) {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        e.target !== mobileMenuButton) {
      mobileMenu.classList.remove('active');
    }
  });
}

const tabTriggers = document.querySelectorAll('.tabs-trigger');
const tabPanels = document.querySelectorAll('.tab-panel');

tabTriggers.forEach(trigger => {
  trigger.addEventListener('click', function() {
   
    tabTriggers.forEach(t => t.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    
    this.classList.add('active');

    const tabId = this.getAttribute('data-tab');
    document.getElementById(`${tabId}-panel`).classList.add('active');
  });
});

const completeButtons = document.querySelectorAll('.card-content button');

completeButtons.forEach(button => {
  button.addEventListener('click', function() {
    const taskElement = this.closest('.space-y-4');
    const progressBar = taskElement.querySelector('.progress-bar');
    
  
    progressBar.style.width = '100%';
    

    const taskTitle = taskElement.querySelector('.font-medium');
    taskTitle.style.textDecoration = 'line-through';
    taskTitle.style.color = 'var(--muted-foreground)';
    
    
    this.disabled = true;
    this.textContent = 'Completed';
  });
});
