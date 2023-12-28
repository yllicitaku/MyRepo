// logout.js

// Function to log out the user
function logoutUser() {
    // Remove the token from localStorage
    localStorage.removeItem('token');
  
    // Redirect to the login page or any other page as needed
    window.location.href = '/Login/login.html';
  }
  
  // Event listener for the "Log Out" button
  document.getElementById('logoutButton').addEventListener('click', function () {
    logoutUser();
  });
  