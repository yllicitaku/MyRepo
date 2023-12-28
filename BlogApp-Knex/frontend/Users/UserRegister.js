
// Register form 
document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const formData = new FormData(this);
  
    try {
      const response = await fetch('http://localhost:4040/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log(data.message); 
        this.reset();
         // Redirect to the main route after successful registration
        window.location.href = 'http://127.0.0.1:5500/';
      } else {
        console.log(`Error: ${data.error}`); 
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  
  });