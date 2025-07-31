document.addEventListener('DOMContentLoaded', function() {
 
  const markAllReadBtn = document.querySelector('.button-outline');
  
  if (markAllReadBtn) {
    markAllReadBtn.addEventListener('click', function() {
      
      const unreadNotifications = document.querySelectorAll('.bg-primary/5');
      
      unreadNotifications.forEach(notification => {
        notification.classList.remove('bg-primary/5');
       
        const title = notification.querySelector('h3');
        if (title) {
          title.classList.remove('font-semibold');
          title.classList.add('font-medium');
        }
      });
      
    
      const unreadBadge = document.querySelector('[data-tab="unread"] .badge');
      if (unreadBadge) {
        unreadBadge.textContent = '0';
      }
    });
  }
  
  
  const toggleSwitches = document.querySelectorAll('.switch input');
  
  toggleSwitches.forEach(toggle => {
    toggle.addEventListener('change', function() {
    
      console.log(`${this.closest('.flex').querySelector('h4').textContent} setting changed to ${this.checked}`);
    });
  });
});
