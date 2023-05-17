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
          <img src="pants.png" alt="pants">
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
            <h2 class="bodyinfheader">머리</h2>
            <div id="hairbox">
              <div class="body-arrow" id="L-arrow">
                <i class="fa fa-solid fa-angle-left fa-3x" id="hairbtn-L" onclick="hairbtnL()"></i>
                <!--만약 폰트어썸 작동 안되면 앞에 'fa' 한번 더 붙여보기!-->
              </div>
              <canvas id="hairDcanvas"></canvas>
              <div class="body-arrow" id="R-arrow">
                <i class="fa fa-solid fa-angle-right fa-3x" id="hairbtn-R" onclick="hairbtnR()"></i>
              </div>
            </div>
            <div id="hair-setting">
              <div><button id="hairundo" onclick="hairundobtn()">취소하기</button></div>
            </div>
          </div>
          <div class="bodyinfwrap" id="bodyinf-Down">
            <h2 class="bodyinfheader">악세사리</h2>
            <div id="accessorybox">
              <canvas id="accessoryDcanvas"></canvas>
            </div>
          </div>
        </div>
      </div>
     <div class="content-item" id="hat-content">
        <table>
          <tr>
            <td><button onclick="hatbtn(1)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/db/Shirt000.png" alt="hat1"></button></td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(2)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/ff/Shirt222.png" alt="hat2"></button></td>          
          </tr>
          <tr>
            <td><button onclick="hatbtn(3)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/46/Shirt223.png" alt="hat4"></button></td>        
          </tr>
          <tr>
            <td><button onclick="hatbtn(4)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/7f/Shirt224.png" alt="hat5"></button></td>           
          </tr>
          <tr>
            <td><button onclick="hatbtn(5)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/88/Shirt225.png" alt="hat6"></button></td>        
          </tr>
        </table>
      </div>
      <div class="content-item" id="shirt-content">
        <table>
          <tr>
            <td><button onclick="shirtbtn(1)"><img src="images/tops/top1.png" alt="shirt1"></button></td>
          </tr>
          <tr>
            <td><button onclick="shirtbtn(2)"><img src="images/tops/top2.png" alt="shirt2"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(3)"><img src="images/tops/top3.png" alt="shirt3"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(4)"><img src="images/tops/top4.png" alt="shirt4"></button></td>           
          </tr>
        </table>
      </div>
      <div class="content-item" id="pants-content">
        <table>
          <tr>
            <td><button onclick="pantsbtn(1)"><img src="images/bottoms/bottom1.png" alt="pants1"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(2)"><img src="images/bottoms/bottom2.png" alt="pants2"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(3)"><img src="images/bottoms/bottom3.png" alt="pants3"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(4)"><img src="images/bottoms/bottom4.png" alt="pants4"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(5)"><img src="images/bottoms/bottom5.png" alt="pants5"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(6)"><img src="images/bottoms/bottom6.png" alt="pants6"></button></td>         
          </tr>
        </table>
      </div>
      <div class="content-item" id="shoes-content">
        <table>
          <tr>
            <td><button onclick="shoesbtn(1)"><img src="images/shoes/shoe1.png" alt="shoe1"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(2)"><img src="images/shoes/shoe2.png" alt="shoe2"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(3)"><img src="images/shoes/shoe3.png" alt="shoe3"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(4)"><img src="images/shoes/shoe4.png" alt="shoe4"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(5)"><img src="images/shoes/shoe5.png" alt="shoe5"></button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <script src="system.js"></script>

</body>

<!--<a href="https://www.flaticon.com/free-icons/pet" title="pet icons">Pet icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/accessories" title="accessories icons">Accessories icons created by Victoruler - Flaticon</a>-->
</html>