<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    section {
        text-align: center;
    }
    .nes-field {
        margin-bottom: 20px;
    }
    </style>
  </head>
  <body> 
  <section >
        <div class="nes-field is-inline">
            <label for="error_field">Name</label>
                <input type="text" id="error_field" class="nes-input is-error" placeholder="What's Your Name ?">
        </div>
      <a class="nes-btn is-error" href="{{ site.baseurl }}/story" id="myButton">PLAY NOW</a>
    </section>
      <audio id="hoverSound" src="audio/sfx/start.mp3"></audio>
    <script>
      var hoverSound = document.getElementById("hoverSound");
      var myButton = document.getElementById("myButton");
      var inputField = document.getElementById("error_field");
      myButton.addEventListener("mouseenter", playHoverSound);
      myButton.addEventListener("click", saveInputValue);
      function playHoverSound() {
        hoverSound.currentTime = 0; // Reset the playback position to the beginning
        hoverSound.play();
      }
      function saveInputValue(event) {
        event.preventDefault();
        var name = inputField.value;
        // Send the data to the server
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/save-name", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Handle the server response here
            console.log(xhr.responseText);
            // Redirect to the next page
            window.location.href = "{{ site.baseurl }}/story";
          }
        };
        xhr.send(JSON.stringify({ name: name }));
      }
    </script>
  </body>
</html>
