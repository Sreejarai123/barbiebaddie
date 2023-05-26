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
        <section class="message -right">
          <!-- Balloon -->
          <div class="nes-balloon from-right">
            <p id="printedMessage"><span id="inputMessage"></span></p>
          </div>
          <i class="nes-bcrikko"></i>
        </section>
      </section>
      <div class="nes-field">
        <label for="name_field"></label>
        <input type="text" id="name_field" class="nes-input">
        <button type="button" class="nes-btn is-primary" onclick="printMessage()">send</button>
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
    </script>