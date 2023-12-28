// Fetch all Posts
document.addEventListener('DOMContentLoaded', () => {
  fetchPosts();
});

// Event listener for the delete buttons
document.getElementById('postList').addEventListener('click', async (event) => {
  if (event.target.classList.contains('deleteButton')) {
    const postId = event.target.dataset.postId;
      await deletePost(postId);
    
  }
});

// Function to delete posts
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
      fetchPosts(); // Refresh post list after delete
    } else {
      console.log('Error deleting post');
    }
  } catch (error) {
    console.error('Error deleting post:', error);
  }
}


// Function to fetch Posts
async function fetchPosts() {
  try {
    const response = await fetch('http://localhost:4040/posts');
    const posts = await response.json();

    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
  <h3>${post.title}</h3>
  <p>${post.body}</p>
  ${isAuthenticated() ? `
    <button class="likeButton" data-post-id="${post.id}" onclick="likePost(${post.id})">Like</button>
    <span class="likesCount" data-post-id="${post.id}" onclick="showLikedUsers(${post.id})">${post.likes} Likes</span>
    ` : '' }
  <hr>
`;
      postList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; 
};

if (isAuthenticated()) {
  document.getElementById('myPostsButton').style.display = 'block';
  document.getElementById('addPostButton').style.display = 'block';
  document.getElementById('logoutButton').style.display = 'block';

} else {
  document.getElementById('myPostsButton').style.display = 'none';
  document.getElementById('logoutButton').style.display = 'none';
  document.getElementById('addPostButton').style.display = 'none';

}



// Function to like a post
async function likePost(postId) {
  try {
    const token = localStorage.getItem('token');

    const response = await fetch(`http://localhost:4040/posts/${postId}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (response.ok) {
      console.log('Post liked successfully.');
      fetchPosts(); // Refresh post list after like
    } else {
      const errorData = await response.json();
      if (response.status === 400 && errorData.error === 'User has already liked this post') {
        alert('You have already liked this post.');
      } else {
        console.error('Error liking post:', errorData.error);
      }
    }
  } catch (error) {
    console.error('Error liking post:', error);
  }
}


// Function to show users who liked a post
async function showLikedUsers(postId) {
  try {
    const response = await fetch(`http://localhost:4040/posts/${postId}/likes`);
    const data = await response.json();

    const likedUsers = data.usernames.join(', '); // Assuming usernames is an array in the response

    // Display a modal or alert with the list of liked users
    alert(`Liked: ${likedUsers}`);
  } catch (error) {
    console.error('Error fetching liked users:', error);
  }
}

// Open the modal
function showModal() {
  document.getElementById('likedUsersModal').style.display = 'block';
}


// Function to close the modal
const closeModal = () => {
  const modal = document.getElementById('likedUsersModal');
  modal.style.display = 'none';
};

// Event listener for the close button
const closeModalBtn = document.getElementById('closeModalBtn');
closeModalBtn.addEventListener('click', closeModal);


// Function to show liked users in a modal
async function showLikedUsers(postId) {
  try {
    const response = await fetch(`http://localhost:4040/posts/${postId}/likes`);
    const data = await response.json();

    const likedUsers = data.usernames;

    const modalContent = document.getElementById('likedUsersContent');

    if (likedUsers && likedUsers.length > 0) {
      // Display each liked user in the modal content
      modalContent.innerHTML = `
      <p>Liked by:</p>
      <div id="likedUsersList">${likedUsers.map(username => `<p>${username}</p>`).join('')}</div>
    `;      console.log(likedUsers);

    } else {
      modalContent.innerHTML = '<p>No likes yet.</p>';
    }

    // Show the modal
    const modal = document.getElementById('likedUsersModal');
    modal.style.display = 'block';
  } catch (error) {
    console.error('Error fetching liked users:', error);
  }
}
