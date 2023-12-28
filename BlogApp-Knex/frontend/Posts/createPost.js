
// Function to create a new post
async function createPost(title, body) {
    try {
        const token = localStorage.getItem('token');
        console.log('Token:', token);


        const response = await fetch('http://localhost:4040/posts', {
            method: 'POST',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                
            },
            body: JSON.stringify({ title, body }),
        });

        if (response.ok) {
            console.log('Post created successfully.');

            //Reset the form fields
            document.getElementById('postForm').reset();

         // Redirect to the main route after successful adding post
         window.location.href = 'http://127.0.0.1:5500/';

        } else {
            console.log('Error creating post');
        }
    } catch (error) {
        console.error('Error creating post:', error);
    }
}

// Event listener for the form submission
document.getElementById('postForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    // Call the function to create a new post
    createPost(title, body);
});
