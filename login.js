
document.getElementById('current-year').textContent = new Date().getFullYear();


const loginForm = document.getElementById('login-form');
const errorAlert = document.getElementById('error-alert');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const remember = document.getElementById('remember').checked;
  

  const submitButton = this.querySelector('button[type="submit"]');
  const originalButtonContent = submitButton.innerHTML;
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <div class="flex items-center justify-center">
      <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
      <span>Logging in...</span>
    </div>
  `;
  

  errorAlert.classList.add('hidden');
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    window.location.href = 'dashboard.html';
    
  } catch (err) {
   
    errorMessage.textContent = 'Invalid email or password. Please try again.';
    errorAlert.classList.remove('hidden');
    
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
  }
});


document.addEventListener('DOMContentLoaded', function() {

});
