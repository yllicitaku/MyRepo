// Check if the user is authenticated
const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; 
};
// Event listener for the delete buttons
document.getElementById('myPostList').addEventListener('click', async (event) => {
    if (event.target.classList.contains('deleteButtons')) {
      const postId = event.target.dataset.postId;
        await deletePost(postId);
      
    }
  });

  async function deletePost(postId) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:4040/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
  
      if (response.ok) {
        console.log('Post deleted successfully.');
        fetchMyPosts(); // Refresh post list after delete
      } else {
        console.log('Error deleting post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }


// Function to fetch and display posts made by the currently logged-in user
async function fetchMyPosts() {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:4040/specificposts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });

        if (response.ok) {
            const posts = await response.json();

            const postList = document.getElementById('myPostList');
            postList.innerHTML = '';

            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                  <h3>${post.title}</h3>
                  <textarea readonly>${post.body}</textarea>
                  ${isAuthenticated() ? `<button class="editButton" data-post-id="${post.id}">Edit</button>` : ''}
                  ${isAuthenticated() ? `<button class="deleteButtons" data-post-id="${post.id}">Delete</button>` : ''}

                  <hr>
                `;
                postList.appendChild(listItem);
            });

             // Add event listeners for the edit buttons
      document.querySelectorAll('.editButton').forEach(editButton => {
        editButton.addEventListener('click', (event) => {
          const postId = event.target.dataset.postId;
          editPost(postId);
        });
      });
            console.log('My Posts:', posts);
        } else {
            console.log('Error fetching my posts');
        }
    } catch (error) {
        console.error('Error fetching my posts:', error);
    }
}

// Function to edit a post
async function editPost(postId) {
    console.log(`Editing post with ID ${postId}`);
  }

// Trigger the function when the page loads
document.addEventListener('DOMContentLoaded', function () {
    fetchMyPosts();
});
