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
    </style>
  </head>
  <body>
    <div class="center">
      <h1>Code Couture</h1>
      <label>Get ready to dress to impress, break the fashion barriers, and let your inner geek shine in Code Couture – the ultimate fusion of computer science and haute couture. It's time to redefine fashion, one line of code at a time!</label>
      <a class="nes-btn is-primary" href="{{ site.baseurl }}/story" onload="startGame()">PLAY NOW</a>
    </div>
    <script>
function startGame() {
    mySound = new sound("bounce.mp3");
}
    </script>
  </body>
</html>
