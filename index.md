<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
  </head>
  <body>
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