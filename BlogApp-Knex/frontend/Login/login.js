// Function to handle user login
async function loginUser(username, password){
    try {
        const response = await fetch('http://localhost:4040/login',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify({username,password}),
        });
        if(response.ok){
            console.log('Login successful.');

            // Retrieve the token from the response
            const { token } = await response.json();

              // Save the token to localStorage
              localStorage.setItem('token', token);
            console.log('Token:', token);
            //Redirect in the main route
            window.location.href = 'http://127.0.0.1:5500/';
        } else{
            console.log('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Error during login')
    }
}

// Event listener for the form
document.getElementById('loginForm').addEventListener('submit',function (event){
    event.preventDefault(); 

    // Get the value from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value

    // Call the function to login
    loginUser(username, password);

});


