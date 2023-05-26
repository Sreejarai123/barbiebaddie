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
.instagram-post {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center the Instagram post */
  width: 600px; /* Increase the width */
  height: 600px; /* Increase the height */
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

<h1>Post Babs!</h1>

Please follow the steps below to insert a girly image from your computer:

1. Click the **Choose File** button below.
2. Select the image file you want to insert.
3. Wait for the image to upload.
4. Show off your beautiful babs!

<div class="instagram-post">
  <img id="uploaded-image" alt="Image Caption">
  <div class="caption">Image Description</div>
  <div class="stats">
    <span class="like">Like 10</span>
    <span class="comment">Comment 5</span>
  </div>
</div>

<input type="file" accept="image/*" onchange="previewImage(event)">
<script>
function previewImage(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var output = document.getElementById('uploaded-image');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}
</script>
