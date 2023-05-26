<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <style>
      .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 50px;
      }
      .typing {
        width: 22ch;
        animation: typing 2s steps(22);
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: Press+Start+2P;
        font-size: 2em;
      }
      @keyframes typing {
        from {
          width: 0;
        }
      }
      @keyframes blink {
        50% {
          border-color: transparent;
        }
      }
      .typing2 {
        width: 22ch;
        animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
        white-space: nowrap;
        animation-delay: 5s;
        overflow: hidden;
        border-right: 3px solid;
        font-family: Press+Start+2P;
        font-size: 2em;
      }
      #preloader {
        background-color: #fff;
        background-size: cover;
      }
    </style>
  </head>
  <body>
    <br>
    <br>
    <div class="nes-container is-rounded">
      <section class="message-list">
        <!--Boyfriend-->
        <section class="message -left">
          <i class="nes-bcrikko"></i>
          <!-- Balloon -->
          <div class="nes-balloon from-left">
            <p>Hey, I need to be honest with you. I cheated on you.</p>
          </div>
        </section>
        <!--Boyfriend-->
        <section class="message -left">
          <i class="nes-bcrikko"></i>
          <!-- Balloon -->
          <div class="nes-balloon from-left">
            <p>Honestly, they are better than you anyways.</p>
          </div>
        </section>
        <section align="right" class="message -right">
          <!-- Balloon -->
          <div class="nes-balloon from-right">
            <p id="contentDisplay"><span id="inputMessage"></span></p>
          </div>
          <i class="nes-bcrikko"></i>
          <div align="right" id="nameDisplay"></div>
        </section>
      </section>
      <div class="nes-field">
        <label for="name_field"></label>
        <input type="text" id="name_field" class="nes-input" id="textInput" onkeydown="handleKeyPress(event)" placeholder="Click ENTER key to send">
        <!--<button type="button" class="nes-btn is-primary" onclick="printMessage()">send</button>-->
      </div>
    </div>
    <div class="center">
      <a class="nes-btn is-primary" href="{{ site.baseurl }}/game" onload="startGame()" id="myButton">Continue &gt;</a>
      <audio id="hoverSound" src="audio/sfx/start.mp3"></audio>
    </div>
    <script>
      var hoverSound = document.getElementById("hoverSound");
      var myButton = document.getElementById("myButton");
      var printedMessage = document.getElementById("printedMessage");
      var inputField = document.getElementById("name_field");
      myButton.addEventListener("mouseenter", playHoverSound);
      function playHoverSound() {
        hoverSound.currentTime = 0; // Reset
      }
      // var params = new URLSearchParams(window.location.search);
      // var name = params.get("name");
      // // Display the name on the page
      // var nameElement = document.createElement("p");
      // if (name) {
      //   nameElement.textContent = "Welcome, " + name + "!";
      // } else {
      //   nameElement.textContent = "Welcome!";
      // }
      // document.body.appendChild(nameElement);
      var savedName = localStorage.getItem("userName");
      if (savedName) {
          document.getElementById("nameDisplay").textContent = savedName;
      } else {
          document.getElementById("nameDisplay").textContent = "User";
      }
      function handleKeyPress(event) {
      if (event.keyCode === 13) {
          event.preventDefault();
          displayContent();
          }
        }
      function displayContent() {
          var input = document.getElementById("textInput").value;
          document.getElementById("contentDisplay").textContent = input;
          document.getElementById("textInput").value = ""; // Reset input value
        }
    </script>