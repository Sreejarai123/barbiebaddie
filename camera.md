<style>
  /* CSS styles for girly look */
  body {
    background-color: #ffe6f2;
    font-family: "Arial", sans-serif;
    color: #f06292;
  }

  h1 {
    color: #c2185b;
    text-align: center;
  }

  input[type="file"] {
    margin: 10px 0;
    padding: 10px;
    background-color: #fce4ec;
    border: none;
    border-radius: 5px;
    color: #c2185b;
    font-weight: bold;
  }

  img {
    display: block;
    margin: 20px auto;
    max-width: 100%;
    border: 5px solid #f06292;
    border-radius: 10px;
  }

  /* CSS styles for cute Instagram post */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .instagram-post {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 600px;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff4f7;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .instagram-post img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .instagram-post .caption {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    color: #ff66a3;
  }

  .instagram-post .stats {
    color: #999999;
    font-size: 16px;
  }

  .instagram-post .like,
  .instagram-post .comment {
    margin-right: 10px;
  }
  </style>
  <style>
  /* CSS styles for the video container */
  .video-container {
    position: relative;
    width: 100%;
    max-height: 200px; /* Adjust the max-height as per your requirement */
    overflow: hidden;
  }

  /* CSS styles for the video element */
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: 100%;
  }
</style>

<div class="video-container">
  <video src="Instagram.mp4" autoplay loop muted></video>
</div>
<div class="video-container">
  <video src="Instagram.mp4" autoplay loop muted>
    Your browser does not support the video tag.
  </video>
</div>

<div class="container">
  <div class="instagram-post">
    <img id="uploaded-image" alt="Image Caption">
    <div class="caption">Image Description</div>
    <div class="button-container">
      <button class="like-button" onclick="incrementLikes()">Like</button>
      <button class="comment-button" onclick="addComment()">Comment</button>
    </div>
    <div class="stats">
      <span class="like">Like 0</span>
      <span class="comment">Comment 0</span>
    </div>
  </div>
</div>


<input type="file" accept="image/*" onchange="previewImage(event)">

<script>
  // Function to increment the like count
var likeCount = 0;

function incrementLikes() {
  likeCount++;
  var likeElement = document.querySelector('.like');
  likeElement.textContent = 'Like ' + likeCount;
}

// Function to add a comment
function addComment() {
  var commentInput = document.getElementById('comment-input');
  var comment = commentInput.value;
  var commentElement = document.createElement('div');
  commentElement.classList.add('comment-bubble');
  commentElement.textContent = comment;
  var buttonContainer = document.querySelector('.button-container');
  buttonContainer.parentNode.insertBefore(commentElement, buttonContainer);
  commentInput.value = '';
}
// Event listener for Enter key press
var commentInput = document.getElementById('comment-input');
commentInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent form submission
    addComment();
  }
});