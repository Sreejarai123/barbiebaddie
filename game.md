<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/74b8c9745c.js" crossorigin="anonymous"></script>
  <title>CODE COUTURE</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="scroll.css">
  <link rel="stylesheet" href="ness.css">
</head>
<body>
  <!-- Buttons -->
<div id="sex" style="position: fixed; top: -225; left: 1495; z-index: 9999;">
<div class="music-buttons">
    <img onclick="document.getElementById('dialog-rounded').showModal();" src="images/icons/settings.png" alt="Settings" style="width: 95px; height: 95px;"/>
<div class="settingsopen">
  <dialog class="nes-dialog is-rounded" id="dialog-rounded">
    <form method="dialog">
      <p class="title">Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="nes-btn">Close</button>
        <button class="nes-btn is-primary" href="{{ site.baseurl }}/start">Main Menu</button>
      </menu>
    </form>
  </dialog>
</div>
</div>
</div>

<div id="sex" style="position: fixed; top: -125; left: 1495; z-index: 9999;">
<div class="music-buttons">
    <a href="{{ site.baseurl }}/camera">
    <img  src="images/icons/camera.png" alt="Camera" style="width: 95px; height: 95px;"/>
    </a>
</div>
</div>
  <div id="display">
    <div id="canvas">
      <canvas id="base"></canvas>
      <canvas id="shoes"></canvas>
      <canvas id="dress"></canvas>
      <canvas id="pants"></canvas>
      <canvas id="shirtbase"></canvas>
      <canvas id="shirt"></canvas>
      <canvas id="eyes"></canvas>
      <canvas id="hair"></canvas>
      <canvas id="accessories"></canvas>
      <canvas id="blank"></canvas>
      <img id="results">
    </div>
    <audio id="music" src="audio/gametheme.mp3" autoplay loop></audio>
    <div id="sex">
      <button id="man-btn" onclick="medskin()">
        <span class="medskin-icon"></span>
      </button>
      <button id="woman-btn" onclick="lightskin()">
        <span class="lightskin-icon"></span>
      </button>
      <button id="woman-btn" onclick="darkskin()">
        <span class="darkskin-icon"></span>
      </button>
    </div>
  </div>
  <div id="setting" class="absolute">
    <div id="menu">
      <div class="menu-content">
        <button class="menu-btn" id="body-btn" onclick="menu(0, 'orange', 'rgb(255, 233, 172)')">
          <i class="fas fa-meh-blank fa-4x"></i>
        </button>
      </div>
      <div class="menu-content">
        <button class="menu-btn" id="dress-btn" onclick="menu(1, 'orange', 'rgb(255, 233, 172)')">
          <img src="https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/large-dress.png" alt="dress"> 
        </button>
      </div>
      <div class="menu-content">
        <button class="menu-btn" id="shirt-btn" onclick="menu(2, 'orange', 'rgb(255, 233, 172)')">
          <i class="fas fa-tshirt fa-4x"></i>
        </button>
      </div>
      <div class="menu-content">
        <button class="menu-btn" id="pants-btn" onclick="menu(3, 'orange', 'rgb(255, 233, 172)')">
          <img src="https://raw.githubusercontent.com/sele906/StardewDressUp/main/pants.png" alt="pants">
        </button>
      </div>
      <div class="menu-content">
        <button class="menu-btn" id="shoes-btn" onclick="menu(4, 'orange', 'rgb(255, 233, 172)')">
          <i class="fas fa-shoe-prints fa-4x"></i>
        </button>
      </div>
    </div>
    <div id="content" class="relative">
      <div class="content-item" id="body-content">
        <div id="bodyinf">
          <div class="bodyinfwrap" id="bodyinf-Up">
            <h2 class="bodyinfheader">HAIR</h2>
            <div id="hairbox">
              <div class="body-arrow" id="L-arrow">
                <i class="fa fa-solid fa-angle-left fa-3x" id="hairbtn-L" onclick="hairbtnL()"></i>
              </div>
              <canvas id="hairDcanvas"></canvas>
              <div class="body-arrow" id="R-arrow">
                <i class="fa fa-solid fa-angle-right fa-3x" id="hairbtn-R" onclick="hairbtnR()"></i>
              </div>
            </div>
            <div id="hair-setting">
              <div><button id="hairundo" onclick="hairundobtn()"> Remove </button></div>
            </div>
          </div>
          <div class="bodyinfwrap" id="bodyinf-Down">
            <h2 class="bodyinfheader"></h2>
            <div id="accessorybox">
              <canvas id="accessoryDcanvas"></canvas>
            </div>
          </div>
        </div>
      </div>
     <div class="content-item" id="dress-content">
        <table>
          <tr>
            <td><button onclick="dressbtn(0)"><img src="images/dresses/dress1.png" alt="dress1"></button></td>
          </tr>
          <tr>
            <td><button onclick="dressbtn(1)"><img src="images/dresses/dress2.png" alt="dress2"></button></td>
          </tr>
        </table>
      </div>
      <div class="content-item" id="shirt-content">
        <table>
          <tr>
            <td><button onclick="shirtbtn(0)"><img src="images/zcropped/top1c.png" alt="shirt1"></button></td>
          </tr>
          <tr>
            <td><button onclick="shirtbtn(1)"><img src="images/zcropped/top2c.png" alt="shirt2"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(2)"><img src="images/zcropped/top3c.png" alt="shirt3"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(3)"><img src="images/zcropped/top4c.png" alt="shirt4"></button></td>           
          </tr>
        </table>
      </div>
      <div class="content-item" id="pants-content">
        <table>
          <tr>
            <td><button onclick="pantsbtn(0)"><img src="images/zcropped/bottom1c.png" alt="pants1"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(1)"><img src="images/zcropped/bottom2c.png" alt="pants2"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(2)"><img src="images/zcropped/bottom3c.png" alt="pants3"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(3)"><img src="images/zcropped/bottom4c.png" alt="pants4"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(4)"><img src="images/zcropped/bottom5c.png" alt="pants5"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(5)"><img src="images/zcropped/bottom6c.png" alt="pants6"></button></td>         
          </tr>
        </table>
      </div>
      <div class="content-item" id="shoes-content">
        <table>
          <tr>
            <td><button onclick="shoesbtn(0)"><img src="images/zcropped/shoe1c.png" alt="shoe1"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(1)"><img src="images/zcropped/shoe2c.png" alt="shoe2"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(2)"><img src="images/zcropped/shoe3c.png" alt="shoe3"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(3)"><img src="images/zcropped/shoe4c.png" alt="shoe4"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(4)"><img src="images/zcropped/shoe5c.png" alt="shoe5"></button></td>
          </tr>
        </table>
      </div>

<style>
  .music-buttons {
    display: flex;
    justify-content: space-between;
  }
  .settingsopen {
    margin-top: 20px;
  }
</style>

<style>
  .music-buttons {
    display: flex;
    justify-content: space-between;
  }
</style>

<script src="system.js"></script>
<audio id="music" autoplay loop></audio>
<div id="sex">
  <div class="music-buttons">
    <button onclick="changeContent('audio/gametheme.mp3', 'url(images/tops/back.jpeg)')">Baddie</button>
    <button onclick="changeContent('audio/Popmusic.mp3', 'url(images/tops/cutebaddie.jpg)')">Cute Baddie</button>
    <button onclick="changeContent('audio/paris.mp3', 'url(images/tops/pinkcloset.jpeg)')">Chill Baddie</button>
  </div>
</div>

<script>
  var musicElement = document.getElementById('music');

  function changeContent(musicSrc, backgroundSrc) {
    changeMusic(musicSrc);
    changeBackground(backgroundSrc);
  }

  function changeMusic(musicSrc) {
    musicElement.src = musicSrc;
    musicElement.load();
    musicElement.play();
  }

  function changeBackground(backgroundSrc) {
    document.body.style.backgroundImage = backgroundSrc;
  }
</script>