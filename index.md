<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <style>
      body {
        padding: 150px;
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
      @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      .blinking-text {
        animation: blink 1s infinite;
      }
      body {
      padding: 150px;
      background-color: black;
      color: white;
      }
      #preloader{
        background-color: #fff;
        background-size: cover;
      }
    </style>
  </head>
  <body onclick="window.location.href='{{ site.baseurl }}/logo'">
    <div class="center">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <label class="blinking-text" href="{{ site.baseurl }}/logo">( CLICK ANYWHERE TO CONTINUE )</label>
      <audio id="btnSound" src="audio/sfx/start.mp3"></audio>
    </div>
    <script>
      var btnSound = document.getElementById("btnSound");
            btnSound.play();
      }
        //loader                    
      var loader = document.getElementById("preloader");
          window.addEventListener("load", function(){
          loader.style.display = "none";
      })
    </script>
  </body>
</html>
