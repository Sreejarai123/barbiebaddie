<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/74b8c9745c.js" crossorigin="anonymous"></script>
  <title>Stardew Dress Up</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="scroll.css">
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
      <button id="man-btn" onclick="man()">
        <i class="fas fa-mars fa-5x"></i>
      </button>
      <button id="woman-btn" onclick="woman()">
        <i class="fas fa-venus fa-5x"></i>
      </button>
      <button id="woman-btn" onclick="woman()">
        <i class="fas fa-venus fa-5x"></i>
      </button>
    </div>
  </div>

  <div id="setting">
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
    <div id="content">
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
              <div class="body-arrow" id="L-arrow">
                <i class="fa fa-solid fa-angle-left fa-3x" id="accessory-L" onclick="accessorybtnL()"></i>
              </div>
              <canvas id="accessoryDcanvas"></canvas>
              <div class="body-arrow" id="R-arrow">
                <i class="fa fa-solid fa-angle-right fa-3x" id="accessory-R" onclick="accessorybtnR()"></i>
              </div>
            </div>
            <div id="accessory-setting">
              <div><button id="accessoryundo" onclick="accessoryundobtn()">취소하기</button></div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-item" id="shirt-content">
        <table>
          <tr>
            <td><button onclick="shirtbtn(1)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/db/Shirt000.png" alt="전형적인 멜빵바지"></button></td>
          </tr>
          <tr>
            <td><button onclick="shirtbtn(223)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/ff/Shirt222.png" alt="황금 테두리 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(224)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/46/Shirt223.png" alt="무지갯빛 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(225)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/7f/Shirt224.png" alt="펜던트 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(226)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/88/Shirt225.png" alt="고온 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(227)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4f/Shirt226.png" alt="불꽃 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(228)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/f2/Shirt227.png" alt="고대 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(229)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/bb/Shirt228.png" alt="부드러운 화살표 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(230)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1f/Shirt229.png" alt="인형 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(231)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/63/Shirt230.png" alt="장신구 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(232)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/0c/Shirt231.png" alt="캔버스 재킷"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(233)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2a/Shirt232.png" alt="쓰레기통 셔츠"></button></td>       
          </tr>
          <tr>
            <td><button onclick="shirtbtn(234)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/8d/Shirt233.png" alt="녹슨 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(235)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/da/Shirt234.png" alt="회로판 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(236)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/15/Shirt235.png" alt="푹신한 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(237)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/dc/Shirt236.png" alt="소스 묻은 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(238)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/9f/Shirt237.png" alt="갈색 정장"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(239)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a1/Shirt238.png" alt="황금 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(240)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/49/Shirt239.png" alt="선장 유니폼"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(241)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fb/Shirt240.png" alt="경찰 유니폼"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(242)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/13/Shirt241.png" alt="삼림 관리원 유니폼"></button></td>       
          </tr>
          <tr>
            <td><button onclick="shirtbtn(243)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2c/Shirt242.png" alt="긴 파란 조끼"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(244)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fc/Shirt243.png" alt="제왕의 망토"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(245)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/13/Shirt244.png" alt="유물 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(246)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/0b/Shirt245.png" alt="보보 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(247)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4d/Shirt246.png" alt="계란 프라이 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(248)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/5d/Shirt247.png" alt="버거 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(249)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/ad/Shirt248.png" alt="	깃 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(250)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/3f/Shirt249.png" alt="토스트 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(251)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/57/Shirt250.png" alt="잉어 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(252)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/f0/Shirt251.png" alt="붉은 플란넬 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(253)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/90/Shirt252.png" alt="또띠야 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(254)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/23/Shirt253.png" alt="따뜻한 플란넬 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(255)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/75/Shirt254.png" alt="설탕 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(256)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d6/Shirt255.png" alt="녹색 플란넬 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(257)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/21/Shirt256.png" alt="기름 얼룩 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(258)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/cb/Shirt257.png" alt="	곰보 셔츠"></button></td>            
          </tr>
          <tr>
            <td><button onclick="shirtbtn(259)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1b/Shirt258.png" alt="	봄 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(260)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/36/Shirt259a.png" alt="선원 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(261)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1b/Shirt260.png" alt="우비"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(262)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/3d/Shirt261a.png" alt="선원 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(263)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/85/Shirt262a.png" alt="어두운 반다나 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(264)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/91/Shirt263a.png" alt="어두운 하이라이트 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(265)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/90/Shirt264.png" alt="옴니 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(266)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/5d/Shirt265.png" alt="신부 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(267)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/f0/Shirt266.png" alt="갈색 멜빵바지"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(268)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/79/Shirt267.png" alt="주황색 나비넥타이 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(269)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/7a/Shirt268.png" alt="흰색 멜빵바지"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(270)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/42/Shirt269.png" alt="포어-오버 셔츠"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(271)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/14/Shirt270.png" alt="녹색 재킷 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(272)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/bb/Shirt271a.png" alt="짧은 재킷"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(273)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/57/Shirt272.png" alt="물방울무늬 셔츠"></button></td>       
          </tr>
          <tr>
            <td><button onclick="shirtbtn(274)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a3/Shirt273.png" alt="흰 물방울무늬 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(275)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e7/Shirt274.png" alt="위장색 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(276)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e6/Shirt275.png" alt="	흙 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(277)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/05/Shirt276.png" alt="게살 케이크 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(278)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/27/Shirt277a.png" alt="실크 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(279)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2d/Shirt278a.png" alt="파란 단추 조끼"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(280)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/94/Shirt279.png" alt="색 바랜 데님 셔츠"></button></td>            
          </tr>
          <tr>
            <td><button onclick="shirtbtn(281)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/74/Shirt280a.png" alt="붉은 단추 조끼"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(282)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/5a/Shirt281a.png" alt="초록 단추 조끼"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(283)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/7e/Shirt282.png" alt="토마토 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(284)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b9/Shirt283a.png" alt="술 달린 조끼"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(285)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a5/Shirt284a.png" alt="방울 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(286)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4b/Shirt285.png" alt="자정의 개 재킷"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(287)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/3c/Shirt286.png" alt="새우 애호가 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(288)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/44/Shirt287.png" alt="티' 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(289)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/76/Shirt288a.png" alt="무지갯빛 셔츠 (흰 소매)"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(290)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1b/Shirt289a.png" alt="무지갯빛 셔츠 (검은 소매)"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(291)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/70/Shirt290.png" alt="장신구 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(292)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d3/Shirt291.png" alt="어둠의 정장"></button></td>        
          </tr>
          <tr>
            <td><button onclick="shirtbtn(293)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a6/Mineral_Dog_Jacket.png" alt="미네랄 도그 재킷"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(294)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b5/Magenta_Shirt.png" alt="자홍색 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(295)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/eb/Ginger_Overalls.png" alt="진저 멜빵바지"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(296)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a6/Banana_Shirt.png" alt="바나나 셔츠"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(297)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/aa/Yellow_Suit.png" alt="노란 양복"></button></td>          
          </tr>
          <tr>
            <td><button onclick="shirtbtn(298)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2f/Hot_Pink_Shirt.png" alt="핫 핑크 셔츠"></button></td>         
          </tr>
          <tr>
            <td><button onclick="shirtbtn(299)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/9c/Tropical_Sunrise_Shirt.png" alt="열대 일출 셔츠"></button></td>           
          </tr>
          <tr>
            <td><button onclick="shirtbtn(300)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/cb/Island_Bikini.png" alt="아일랜드 비키니"></button></td>           
          </tr>
        </table>
      </div>
      <div class="content-item" id="pants-content">
        <table>
          <tr>
            <td><button onclick="pantsbtn(1)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/78/Farmer_Pants.png" alt="	농부 바지"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(2)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c5/Shorts.png" alt="반바지"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(3)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/9e/Long_Dress.png" alt="롱 드레스"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(4)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fa/Skirt.png" alt="치마"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(5)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/92/Pleated_Skirt.png" alt="주름치마"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(6)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/8d/Dinosaur_Pants.png" alt="공룡 바지"></button></td>         
          </tr>
          <tr>
            <td><button onclick="pantsbtn(7)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a4/Grass_Skirt.png" alt="잔디 치마"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(8)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/8a/Genie_Pants.png" alt="지니 바지"></button></td>          
          </tr>
          <tr>
            <td><button onclick="pantsbtn(9)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/26/Baggy_Pants.png" alt="헐렁한 바지"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(10)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d2/Simple_Dress.png" alt="	간단한 드레스"></button></td>           
          </tr>
          <tr>
            <td><button onclick="pantsbtn(11)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1e/Relaxed_Fit_Pants.png" alt="편안한 바지"></button></td>            
          </tr>
          <tr>
            <td><button onclick="pantsbtn(12)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4a/Relaxed_Fit_Shorts.png" alt="편안한 반바지"></button></td>            
          </tr>
        </table>
      </div>
      <div class="content-item" id="shoes-content">
        <table>
          <tr>
            <td><button onclick="shoesbtn(1)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/ad/Sneakers.png" alt="운동화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(2)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e8/Rubber_Boots.png" alt="고무 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(3)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fd/Leather_Boots.png" alt="가죽 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(4)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/53/Work_Boots.png" alt="노동 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(5)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/63/Combat_Boots.png" alt="전투 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(6)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/93/Tundra_Boots.png" alt="툰트라 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(7)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e0/Leprechaun_Shoes.png" alt="레프러콘 신발"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(8)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4e/Thermal_Boots.png" alt="보온 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(9)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/15/Cowboy_Boots.png" alt="카우보이 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(10)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/8d/Dark_Boots.png" alt="어둠의 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(11)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fa/Firewalker_Boots.png" alt="불길 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(12)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/98/Genie_Shoes.png" alt="지니 신발"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(13)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/6e/Space_Boots.png" alt="우주 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(14)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/ac/Emily%27s_Magic_Boots.png" alt="에밀리의 마법 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(15)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/94/Cinderclown_Shoes.png" alt="잉걸불광대 신발"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(16)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/98/Mermaid_Boots.png" alt="인어 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(17)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fb/Dragonscale_Boots.png" alt="용비늘 장화"></button></td>
          </tr>
          <tr>
            <td><button onclick="shoesbtn(18)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/69/Crystal_Shoes.png" alt="수정 신발"></button></td>
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