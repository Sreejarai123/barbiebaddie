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
  <style>
    div.absolute {
      position: absolute;
      top: 80px;
      right: 0;
      width:50%;
      padding-right:10%;
    }
    div.relative {
      position: relative;
      height:500px;
    }
    body {
      padding-left: 10%;
    }
  </style>
</head>
<body>
  <div id="display">
    <div id="canvas">
      <canvas id="base"></canvas>
      <canvas id="shoes"></canvas>
      <canvas id="pants"></canvas>
      <canvas id="shirtbase"></canvas>
      <canvas id="shirt"></canvas>
      <canvas id="eyes"></canvas>
      <canvas id="hair"></canvas>
      <canvas id="hat"></canvas>
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
        <button class="menu-btn" id="hat-btn" onclick="menu(1, 'orange', 'rgb(255, 233, 172)')">
          <i class="fab fa-redhat fa-5x"></i>
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
            <h2 class="bodyinfheader">Hair</h2>
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
              <div><button id="hairundo" onclick="hairundobtn()">Remove</button></div>
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
     <div class="content-item" id="hat-content">
        <table>
             <tr>
            <td><button onclick="hairbtn(1)"><img src="images/zcropped/hairL-Bla-c.png" alt="shoe1"></button></td>
          </tr>
          <tr>
            <td><button onclick="hairbtn(2)"><img src="images/zcropped/hairL-Blo-c.png" alt="shoe2"></button></td>
          </tr>
          <tr>
            <td><button onclick="hairbtn(3)"><img src="images/zcropped/hairL-Bro-c.png" alt="shoe3"></button></td>
          </tr>
          <tr>
            <td><button onclick="hairbtn(4)"><img src="images/zcropped/hairL-G-c.png" alt="shoe4"></button></td>
          </tr>
          <tr>
            <td><button onclick="hairbtn(5)"><img src="images/zcropped/hairS-Bla-c.png" alt="shoe5"></button></td>
          </tr>
          <tr>
            <td><button onclick="hairbtn(5)"><img src="images/zcropped/hairS-Blo-c.png" alt="shoe5"></button></td>
          </tr>
          <tr>
            <td><button onclick="hairbtn(5)"><img src="images/zcropped/hairS-Bro-c.png" alt="shoe5"></button></td>
          </tr>
           <tr>
            <td><button onclick="hairbtn(5)"><img src="images/zcropped/hairS-G-c.png" alt="shoe5"></button></td>
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

  <script src="system.js"></script>

   <audio id="music" autoplay loop></audio>
    <div id="sex">
      <div class="music-buttons">
        <button id="man-btn" onclick="changeMusic('audio/gametheme.mp3')">Play Music 1</button>
        <button id="woman-btn" onclick="changeMusic('audio/Popmusic.mp3')">Play Music 2</button>
    </div>
  </div>
  <script>
    var musicElement = document.getElementById('music');
    function changeMusic(musicSrc) {
      musicElement.src = musicSrc;
      musicElement.load();
      musicElement.play();
    }
  </script>
   </div>
</div>