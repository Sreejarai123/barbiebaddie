<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <style>
      body {
        padding: 150px;
        background-image: url("images/icons/background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      h1 {
        text-align: center;
      }
      .center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
       #preloader{
        background-color: #fff;
        background-size: cover;
      }
      @keyframes bobbing {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0);
        }
      }
      .bobbing-image {
        animation: bobbing 3s infinite;
      }
      background {

      }
    </style>
  </head>
  <body> 
    <div class="center" id="overlay">
      <img src="images/icons/name.png" alt="Image" class="bobbing-image" style="display: block; margin: 0 auto;">
      <br>
            <label>Get ready to dress to impress, break the fashion barriers, and let your inner geek shine in Code Couture – the ultimate fusion of computer science and haute couture. It's time to redefine fashion, one line of code at a time!</label>
      <br>
      <br>
      <a class="nes-btn is-error" href="{{ site.baseurl }}/user" id="myButton">PLAY NOW</a>
      <audio id="hoverSound" src="audio/sfx/start.mp3"></audio>
    </div>
    <script>
    var hoverSound = document.getElementById("hoverSound");
    var myButton = document.getElementById("myButton");
    function playHoverSound() {
        hoverSound.currentTime = 0; // Reset the playback position to the beginning
        hoverSound.play();
    }
    myButton.addEventListener("mouseenter", playHoverSound);
    //loader                    
    var loader = document.getElementById("preloader");
        window.addEventListener("load", function(){
        loader.style.display = "none";
    })
    </script>
  </body>
</html>
