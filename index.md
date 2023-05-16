<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
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
    </style>
  </head>
  <body>
    <div class="center">
      <h1>Code Couture</h1>
      <label>Get ready to dress to impress, break the fashion barriers, and let your inner geek shine in Code Couture – the ultimate fusion of computer science and haute couture. It's time to redefine fashion, one line of code at a time!</label>
      <a class="nes-btn is-primary" href="{{ site.baseurl }}/story">PLAY NOW</a>
    </div>
    <script>
      var myGamePiece;
      var myObstacles = [];
      var mySound;
      var myMusic;
      function startGame() {
        myGamePiece = new component(30, 30, "red", 10, 120);
        mySound = new sound("bounce.mp3");
        myMusic = new sound("gametheme.mp3");
        myMusic.play();
        myGameArea.start();
      }
    </script>
  </body>
</html>
