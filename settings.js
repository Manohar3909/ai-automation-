document.addEventListener('DOMContentLoaded', function() {

  const profileForm = document.querySelector('#profile-panel form');
  const saveButton = document.querySelector('#profile-panel .button');
  
  if (saveButton) {
    saveButton.addEventListener('click', function() {
 
      const originalText = this.innerHTML;
      this.disabled = true;
      this.innerHTML = `
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          <span>Saving...</span>
        </div>
      `;
      

      setTimeout(() => {
   
        this.disabled = false;
        this.innerHTML = originalText;
        
       
        alert('Profile updated successfully!');
      }, 1000);
    });
  }
  
 
  const updatePasswordBtn = document.querySelector('#account-panel .button');
  
  if (updatePasswordBtn) {
    updatePasswordBtn.addEventListener('click', function() {
      const currentPassword = document.getElementById('current-password').value;
      const newPassword = document.getElementById('new-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Please fill in all password fields');
        return;
      }
      
      if (newPassword !== confirmPassword) {
        alert('New passwords do not match');
        return;
      }
      
  
      const originalText = this.textContent;
      this.disabled = true;
      this.textContent = 'Updating...';
      
      setTimeout(() => {
       
        this.disabled = false;
        this.textContent = originalText;
        
        document.getElementById('current-password').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('confirm-password').value = '';
        

        alert('Password updated successfully!');
      }, 1000);
    });
  }
  
  
  const deleteAccountBtn = document.querySelector('.button-destructive');
  
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', function() {
      const confirmed = confirm('Are you sure you want to delete your account? This action cannot be undone.');
      
      if (confirmed) {
        
        alert('Account deletion initiated. You will receive a confirmation email.');
      }
    });
  }
});
