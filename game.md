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
    <div id="arrows">
      <i class="fas fa-long-arrow-alt-left fa-4x" onclick="arrowL()"></i>
      <i class="fas fa-long-arrow-alt-right fa-4x" onclick="arrowR()"></i>
    </div>
    <div id="sex">
      <button id="man-btn" onclick="man()">
        <i class="fas fa-mars fa-5x"></i>
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
      <div class="content-item" id="hat-content">
        <table>
          <tr>
            <th>사진</th>
            <th>이름</th>
            <th>설명</th>
            <th>얻는 방법</th>
            <th>염색 여부</th>
          </tr>
          <tr>
            <td><button onclick="hatbtn(1)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/99/Cowboy_Hat.png" alt="카우보이 모자"></button></td>
            <td>카우보이 모자</td>
            <td>가죽이 오래되고 갈라졌지만, 놀랍도록 부드럽습니다. 퀴퀴한 냄새가 납니다.</td>
            <td><a href="https://ko.stardewvalleywiki.com/박물관" target="_blank">박물관</a> 소장품 모두 완성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(2)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e1/Bowler_Hat.png" alt="중절모"></button></td>
            <td>중절모</td>
            <td>부드러운 펠트로 만들어졌습니다.</td>
            <td>1,000,000골드 벌기</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(3)"><img src="https://stardewvalleywiki.com/mediawiki/images/8/8d/Top_Hat.png" alt="실크해트"></button></td>
            <td>실크해트</td>
            <td>신사의 고전적인 모자.</td>
            <td>미스터 치 <a href="https://ko.stardewvalleywiki.com/카지노" target="_blank">카지노</a>에서 치 코인 8,000으로 구매</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(4)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1c/Sombrero.png" alt="솜브레로"></button></td>
            <td>솜브레로</td>
            <td>밀짚을 엮어서 만든 축제용 모자.</td>
            <td>10,000,000골드 벌기</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(5)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b2/Straw_Hat.png" alt="밀짚모자"></button></td>
            <td>밀짚모자</td>
            <td>가볍고 시원함, 농부의 기쁨입니다.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/달걀 축제" target="_blank">달걀 축제</a>에서 우승 </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(6)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b4/Official_Cap.png" alt="공무원 모자"></button></td>
            <td>공무원 모자</td>
            <td>우체부 혹은 경찰이 쓰던 모자 같습니다. 어느 쪽이든, 아직 많이 부드럽고 냄새도 괜찮습니다.</td>
            <td>24가지 물고기 잡기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(7)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/ba/Blue_Bonnet.png" alt="파란 보닛"></button></td>
            <td>파란 보닛</td>
            <td>모든 게 좀 더 간단했던 시대의 초원용 보닛.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/박물관" target="_blank">박물관</a>에 40가지 다른 아이템 기증하기. </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(8)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/99/Plum_Chapeau.png" alt="자두색 샤포"></button></td>
            <td>자두색 샤포</td>
            <td>괜찮아 보입니다.</td>
            <td>25가지 요리 만들기. </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(9)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/12/Skeleton_Mask.png" alt="해골 가면"></button></td>
            <td>해골 가면</td>
            <td>신기하게도 눈이 붉게 빛납니다.</td>
            <td>몬스터 박멸 목표 - 해골 50마리 처치 </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(10)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/91/Goblin_Mask.png" alt="고블린 가면"></button></td>
            <td>고블린 가면</td>
            <td>이 오싹한 가면으로 동네 사람들을 깜짝 놀라게 해보세요. 효과적인 표현을 위해 귀가 고무로 제작되었습니다.</td>
            <td>모든 아이템 운송하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(11)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/99/Chicken_Mask.png" alt="닭 가면"></button></td>
            <td>닭 가면</td>
            <td>이거면 분명 그들을 웃게 만들 거예요.</td>
            <td>'도움 필요함' 요청 40개 완수.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(12)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/ca/Earmuffs.png" alt="귀마개"></button></td>
            <td>귀마개</td>
            <td>귀를 따뜻하게 해줍니다. 캐슬 빌리지의 장인의 벨벳이 덧대어져 있습니다.	</td>
            <td>주민 20명과 친밀도 5 하트 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(13)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/38/Delicate_Bow.png" alt="섬세한 리본"></button></td>
            <td>섬세한 리본</td>
            <td>잘 보면 작은 분홍 보석들이 반짝이는 게 보입니다.</td>
            <td>10가지 요리 만들기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(14)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/5a/Tropiclip.png" alt="열대클립"></button></td>
            <td>열대클립</td>
            <td>작은 야자수 모양을 하고 있습니다.</td>
            <td>집 업그레이드하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(15)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/01/Butterfly_Bow.png" alt="나비 리본"></button></td>
            <td>나비 리본</td>
            <td>아주 부드럽습니다.</td>
            <td>주민 한 명과 친밀도 5 하트 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(16)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c9/Hunter%27s_Cap.png" alt="사냥꾼모자"></button></td>
            <td>사냥꾼모자</td>
            <td>양털 덕에 숲 깊은 곳에서도 따뜻할 것 같습니다.</td>
            <td>집 최대 크기로 업그레이드하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(17)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2f/Trucker_Hat.png" alt="트럭 운전수 모자"></button></td>
            <td>트럭 운전수 모자</td>
            <td>뒷부분이 망사라 머리가 시원합니다.</td>
            <td>30가지 아이템 제작하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(18)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/45/Sailor%27s_Cap.png" alt="선원 모자"></button></td>
            <td>선원 모자</td>
            <td>깔끔하고 뻣뻣합니다.</td>
            <td>얼음 축제에서 낚시 대회에서 우승</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(19)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1e/Good_Ol%27_Cap.png" alt="편한 모자"></button></td>
            <td>편한 모자</td>
            <td>챙에 주름이 간 헐렁한 모자. 많은 우여곡절을 겪은 듯합니다.</td>
            <td>15,000골드 벌기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(20)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/5e/Fedora.png" alt="페도라"></button></td>
            <td>페도라</td>
            <td>전형적인 도시인의 모자.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/스타듀 밸리 품평회" target="_blank">스타듀 밸리 품평회</a>에서 500골드에 구매. </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(21)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/69/Cool_Cap.png" alt="쿨 캡"></button></td>
            <td>쿨 캡</td>
            <td>색이 많이 바랬지만, 한때 강렬한 파란색이었습니다.</td>
            <td>250,000골드 벌기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(22)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/71/Lucky_Bow.png" alt="럭키 리본"></button></td>
            <td>럭키 리본</td>
            <td>중간 부분 재질이 순금입니다.</td>
            <td>50,000골드 벌기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(23)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b6/Polka_Bow.png" alt="땡땡이 리본"></button></td>
            <td>땡땡이 리본</td>
            <td>이거라면 시선을 끌 수 있을 겁니다.</td>
            <td>'도움 필요함' 요청 10개 완수.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(24)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/26/Gnome%27s_Cap.png" alt="노움의 모자"></button></td>
            <td>노움의 모자</td>
            <td>노움 머리가 많이 컸나 봅니다.</td>
            <td>모든 아이템 제작하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(25)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fb/Eye_Patch.png" alt="안대"></button></td>
            <td>안대</td>
            <td>진짜인지 그냥 의상의 일부였는지 분간하기 어렵습니다.</td>
            <td>모든 종류의 물고기 잡기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(26)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e6/Santa_Hat.png" alt="산타 모자"></button></td>
            <td>산타 모자</td>
            <td>마법 같은 계절을 기념하세요.</td>
            <td>주민 10명과 친밀도 5 하트 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(27)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/6c/Tiara.png" alt="티아라"></button></td>
            <td>티아라</td>
            <td>금 테두리가 있는 큰 자수정이 있습니다.</td>
            <td>주민 4명과 친밀도 5 하트 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(28)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/08/Hard_Hat.png" alt="안전모"></button></td>
            <td>안전모</td>
            <td>머리를 한조각으로 지켜주세요.</td>
            <td>몬스터 박멸 목표 - <a href="https://ko.stardewvalleywiki.com/더기" target="_blank">더기</a> 30마리 처치</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(29)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/f0/Sou%27wester.png" alt="방수모"></button></td>
            <td>방수모</td>
            <td>폭풍우가 휘몰아칠 때 선원들을 건조하게 지킬 수 있는 형태입니다.</td>
            <td>10가지 물고기 잡기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(30)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c1/Daisy.png" alt="민들레"></button></td>
            <td>민들레</td>
            <td>머리에 꽂을 수 있는 신선한 봄날의 민들레꽃입니다.</td>
            <td>15가지 아이템 제작하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(31)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b7/Watermelon_Band.png" alt="수박 머리띠"></button></td>
            <td>수박 머리띠</td>
            <td>여름철의 과일을 영감으로 삼아 색을 골랐습니다.</td>
            <td>물고기 100마리 잡기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(32)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/05/Mouse_Ears.png" alt="쥐 귀"></button></td>
            <td>쥐 귀</td>
            <td>합성 소재로 만들었습니다.</td>
            <td>주민 한 명과 친밀도 10 하트 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(33)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/ab/Cat_Ears.png" alt="고양이 귀	"></button></td>
            <td>고양이 귀	</td>
            <td>수염도 포함되어 있습니다.</td>
            <td>주민 8명과 친밀도 10 하트 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(34)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e7/Cowgal_Hat.png" alt="카우걸 모자"></button></td>
            <td>카우걸 모자</td>
            <td>띠 부분에 가짜 다이아몬드가 박혀있습니다.</td>
            <td>한가지 작물 300개 배송하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(35)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4e/Cowpoke_Hat.png" alt="소몰이 모자"></button></td>
            <td>소몰이 모자</td>
            <td>소 전문가를 위하여.</td>
            <td>각 작물 15개씩 배송하기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(36)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/18/Archer%27s_Cap.png" alt="궁수의 모자"></button></td>
            <td>궁수의 모자</td>
            <td>궁수가 아니더라도 멋진 모자입니다.</td>
            <td>모든 요리 만들기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(37)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/3a/Panda_Hat.png" alt="판다 모자	"></button></td>
            <td>판다 모자	</td>
            <td>사랑스러운 판다 모자.</td>
            <td>TGP 독점 콘텐츠</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(38)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/73/Blue_Cowboy_Hat.png" alt="파란 카우보이 모자	"></button></td>
            <td>파란 카우보이 모자	</td>
            <td>데님 재질의 시원한 파란색 카우보이 모자.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/해골 동굴" target="_blank">해골 동굴</a>의 보물 상자에서 무작위로 발견되었습니다. </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(39)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fc/Red_Cowboy_Hat.png" alt="붉은 카우보이 모자"></button></td>
            <td>붉은 카우보이 모자</td>
            <td>붉은 스웨드로 만들어진 시선이 가는 붉은 카우보이 모자.</td>
            <td><a href="https://ko.stardewvalleywiki.com/해골 동굴" target="_blank">야시장</a>의 보물 상자에서 무작위로 발견되었습니다.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(40)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d5/Cone_Hat.png" alt="고깔모자"></button></td>
            <td>고깔모자</td>
            <td>먼 땅으로부터 온 신기한 모자.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/야시장" target="_blank">야시장</a>의 마법 상점 보트에서 구입 </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(41)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/95/Living_Hat.png" alt="살아있는 모자"></button></td>
            <td>살아있는 모자</td>
            <td>두피로부터 수분을 흡수합니다. 따로 물을 줄 필요가 없습니다!	</td>
            <td><ul><li>잡초 자를 때 0.001 % 확률로 발견</li><li><a href="https://ko.stardewvalleywiki.com/야생 골렘" target="_blank">야생 골렘</a>에서 0.01 % 확률로 발견</li></ul></td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(42)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a4/Emily%27s_Magic_Hat.png" alt="에밀리의 마법 모자"></button></td>
            <td>에밀리의 마법 모자</td>
            <td>에밀리가 사랑을 담아 만든 모자. 100% 천연소재로 만들었습니다! 버섯 캡	흙 향기가 납니다.</td>
            <td> <a href="" target="_blank">에밀리</a>의 14 개의 하트 이벤트 </td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(43)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/71/Mushroom_Cap.png" alt="버섯 캡"></button></td>
            <td>버섯 캡</td>
            <td>흙 향기가 납니다.</td>
            <td><a href="https://ko.stardewvalleywiki.com/버섯 나무" target="_blank">버섯 나무</a>를 벨 때 1%의 확률</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(44)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/25/Dinosaur_Hat.png" alt="공룡 모자"></button></td>
            <td>공룡 모자</td>
            <td>작은 공룡처럼 보이도록 만들어진 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/공룡알" target="_blank">공룡알</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(45)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/cc/Totem_Mask.png" alt="토템 가면"></button></td>
            <td>토템 가면</td>
            <td>걱정하지 마세요, 얼굴을 순간 이동시키진 않을 겁니다...</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/비의 토템" target="_blank">비의 토템</a> 조합<br>
              옷감과 <a href="https://ko.stardewvalleywiki.com/워프 토템: 농장" target="_blank">워프 토템: 농장</a> 조합<br>
              옷감과 <a href="https://ko.stardewvalleywiki.com/워프 토템: 산" target="_blank">워프 토템: 산</a> 조합<br>
              옷감과 <a href="https://ko.stardewvalleywiki.com/워프 토템: 해변" target="_blank">워프 토템: 해변</a> 조합<br>
              옷감과 <a href="https://ko.stardewvalleywiki.com/워프 토템: 사막" target="_blank">워프 토템: 사막</a> 조합</td>
              <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(46)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/ca/Logo_Cap.png" alt="로고 캡"></button></td>
            <td>로고 캡</td>
            <td>앞쪽에 로고가 있는 붉은 캡.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/용암 장어" target="_blank">용암 장어</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(47)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/36/Wearable_Dwarf_Helm.png" alt="대형 드워프 투구"></button></td>
            <td>대형 드워프 투구</td>
            <td>인간용 크기로 만든 드워프들이 쓰는 투구.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/드워프 투구" target="_blank">드워프 투구</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/드워프 도구" target="_blank">드워프 도구</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(48)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/69/Fashion_Hat.png" alt="패션 모자"></button></td>
            <td>패션 모자</td>
            <td>챙에 깃털이 있는 멋쟁이를 위한 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/캐비아" target="_blank">캐비아</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(49)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/ba/Pumpkin_Mask.png" alt="호박 가면"></button></td>
            <td>호박 가면</td>
            <td>한때 정말 큰 호박이었던 것 같습니다...</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/호박등" target="_blank">호박등</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(50)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/cb/Hair_Bone.png" alt="뼈 장식"></button></td>
            <td>뼈 장식</td>
            <td>선사시대의 머리 리본.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/선사 시대 경골" target="_blank">선사 시대 경골</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(51)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/62/Knight%27s_Helmet.png" alt="기사의 투구"></button></td>
            <td>기사의 투구</td>
            <td>진짜 투구와 똑같아 보입니다!</td>
            <td>몬스터 박멸 목표 - <a href="https://ko.stardewvalleywiki.com/기사의 투구" target="_blank">페퍼 렉스</a> 50마리 처치</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(52)"><img src="https://stardewvalleywiki.com/mediawiki/images/7/70/Squire%27s_Helmet.png" alt="종자의 투구"></button></td>
            <td>종자의 투구</td>
            <td>공기가 흐를 수 있도록 얼굴이 노출되어 있습니다.</td>
            <td><a href="https://ko.stardewvalleywiki.com/종자의 투구" target="_blank">메탈 헤드</a>에서 무작위 몬스터 드롭</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(53)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a7/Spotted_Headscarf.png" alt="물방울무늬 머리 스카프"></button></td>
            <td>물방울무늬 머리 스카프</td>
            <td>머리를 묶는 용도로 사용되는 붉은 물방울무늬 스카프.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/붉은 버섯" target="_blank">붉은 버섯</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(54)"><img src="https://stardewvalleywiki.com/mediawiki/images/5/51/Beanie.png" alt="비니"></button></td>
            <td>비니</td>
            <td>딱 맞는 따뜻한 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/도토리" target="_blank">도토리</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/단풍 씨앗" target="_blank">단풍 씨앗</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/솔방울" target="_blank">솔방울</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(55)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/0d/Floppy_Beanie.png" alt="헐렁한 비니"></button></td>
            <td>헐렁한 비니</td>
            <td>느슨하게 맞는 따뜻한 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/메이플 시럽" target="_blank">메이플 시럽</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/참나무 수지" target="_blank">참나무 수지</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/소나무 타르" target="_blank">소나무 타르</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(56)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d8/Fishing_Hat.png" alt="낚시용 모자"></button></td>
            <td>낚시용 모자</td>
            <td>넓은 챙이 강가에서 낚시할 때 태양을 가려줍니다.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/쑥치" target="_blank">쑥치</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/아이스핍" target="_blank">아이스핍</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/전갈 잉어" target="_blank">전갈 잉어</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/통안어" target="_blank">통안어</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/자정오징어" target="_blank">자정오징어</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/공허의 연어" target="_blank">공허의 연어</a> 조합<br>옷감과 <a href="https://ko.stardewvalleywiki.com/슬라임잭" target="_blank">슬라임잭</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(57)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a5/Blobfish_Mask.png" alt="블롭피쉬 가면"></button></td>
            <td>블롭피쉬 가면</td>
            <td>진짜 블롭피쉬처럼 말랑말랑합니다!</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/블롭피쉬" target="_blank">블롭피쉬</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(58)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/96/Party_Hat_%28red%29.png" alt="파티 모자"></button></td>
            <td>파티 모자</td>
            <td>즐거운 일을 축하할 때 기분을 낼 수 있는 우스꽝스러운 붉은 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/피자" target="_blank">피자</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(59)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fe/Party_Hat_%28blue%29.png" alt="파티 모자"></button></td>
            <td>파티 모자</td>
            <td>즐거운 일을 축하할 때 기분을 낼 수 있는 우스꽝스러운 파란 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/초콜릿 케이크" target="_blank">초콜릿 케이크</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(60)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c5/Party_Hat_%28green%29.png" alt="파티 모자"></button></td>
            <td>파티 모자</td>
            <td>즐거운 일을 축하할 때 기분을 낼 수 있는 우스꽝스러운 녹색 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/생선 타코" target="_blank">생선 타코</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(61)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c7/Arcane_Hat.png" alt="신비한 모자"></button></td>
            <td>신비한 모자</td>
            <td>마법사가 쓰는 카우보이용 모자의 일종.</td>
            <td>몬스터 박멸 목표 - <a href="https://ko.stardewvalleywiki.com/미라" target="_blank">미라</a> 10마리 처치</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(62)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/3b/Chef_Hat.png" alt="셰프 모자"></button></td>
            <td>셰프 모자</td>
            <td>전통적으로 셰프가 쓰는 모자.</td>
            <td>모든 요리 만들기.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(63)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/04/Pirate_Hat.png" alt="해적모"></button></td>
            <td>해적모</td>
            <td>앞면에 끔찍한 두개골이 있는 선장용 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/보물상자" target="_blank">보물상자</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(64)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e0/Flat_Topped_Hat.png" alt="플랫 톱 모자"></button></td>
            <td>플랫 톱 모자</td>
            <td>한때 유행했던 오래된 스타일의 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/크랜베리 소스" target="_blank">크랜베리 소스</a><br>옷감과 <a href="https://ko.stardewvalleywiki.com/요리용 속" target="_blank">요리용 속</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(65)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/3d/Elegant_Turban.png" alt="우아한 터번"></button></td>
            <td>우아한 터번</td>
            <td>금색 테두리가 있는 고급 검은 비단으로 만든 터번.</td>
            <td>모든 업적 달성.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(66)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/60/White_Turban.png" alt="흰색 터번"></button></td>
            <td>흰색 터번</td>
            <td>푸른색 테두리가 있는 고급 흰색 비단으로 만든 터번.</td>
            <td><ul><li>옷감과 <a href="https://ko.stardewvalleywiki.com/달콤보석베리" target="_blank">달콤보석베리</a> 조합</li><li><a href="https://ko.stardewvalleywiki.com/해골 동굴" target="_blank">해골 동굴</a>의 보물 상자에서 무작위로 발견되었습니다.</li></ul></td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(67)"><img src="https://stardewvalleywiki.com/mediawiki/images/a/a9/Garbage_Hat.png" alt="쓰레기 모자"></button></td>
            <td>쓰레기 모자</td>
            <td>모자로 '새활용'된 쓰레기통 뚜껑...</td>
            <td>쓰레기통 20개 열어본 후에 펠리컨 마을 쓰레기 통에서 0.2 % 확률로 발견</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(68)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c7/Golden_Mask_%28hat%29.png" alt="황금 가면"></button></td>
            <td>황금 가면</td>
            <td>칼리코 사막 유물을 정확하게 재현한 가면!</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/황금 가면" target="_blank">황금 가면</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(69)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/96/Propeller_Hat.png" alt="프로펠러 모자"></button></td>
            <td>프로펠러 모자</td>
            <td>꼭대기에 프로펠러가 있는 우스꽝스러운 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/광부의 간식" target="_blank">광부의 간식</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(70)"><img src="https://stardewvalleywiki.com/mediawiki/images/0/05/Bridal_Veil.png" alt="신부의 면사포"></button></td>
            <td>신부의 면사포</td>
            <td>신부를 위한 전통적인 장식품.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/진주" target="_blank">진주</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(71)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/18/Witch_Hat.png" alt="마녀 모자"></button></td>
            <td>마녀 모자</td>
            <td>마녀들이 애용하는 끝이 뾰족한 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/황금 호박" target="_blank">황금 호박</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(72)"><img src="https://stardewvalleywiki.com/mediawiki/images/f/fc/Copper_Pan_%28hat%29.png" alt="구리 냄비"></button></td>
            <td>구리 냄비</td>
            <td>구리 냄비를 머리에 씁니다...</td>
            <td>인벤토리 메뉴에서 농부 스프라이트 옆의 모자 슬롯에 <a href="https://ko.stardewvalleywiki.com/구리 선광 냄비" target="_blank">구리 선광 냄비</a>를 놓습니다.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(73)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d0/Green_Turban.png" alt="녹색 터번"></button></td>
            <td>녹색 터번</td>
            <td>황금 장식이 있는 녹색 비단으로 만든 터번.</td>
            <td><a href="https://ko.stardewvalleywiki.com/사막 상인" target="_blank">사막 상인</a></td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(74)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/60/Magic_Cowboy_Hat.png" alt="마법 카우보이 모자"></button></td>
            <td>마법 카우보이 모자</td>
            <td>무지갯빛 에너지로 일렁이고 있습니다</td>
            <td> <a href="https://ko.stardewvalleywiki.com/사막 상인" target="_blank">사막 상인</a>, 달력의 홀수인 날</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(75)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/65/Magic_Turban.png" alt="마법 터번"></button></td>
            <td>마법 터번</td>
            <td>무지갯빛 에너지로 일렁이고 있습니다</td>
            <td> <a href="https://ko.stardewvalleywiki.com/사막 상인" target="_blank">사막 상인</a>, 달력의 짝수인 날</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(76)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c6/Golden_Helmet.png" alt="황금 투구"></button></td>
            <td>황금 투구</td>
            <td>황금 코코넛 반쪽입니다.</td>
            <td><a href="https://ko.stardewvalleywiki.com/사막 상인" target="_blank">황금 코코넛</a> (5% 확률)</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(77)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/cb/Deluxe_Pirate_Hat.png" alt="디럭스 해적모"></button></td>
            <td>디럭스 해적모</td>
            <td>가장 악명 높은 해적에게만 어울리는 모자입니다.</td>
            <td><a href="https://ko.stardewvalleywiki.com/화산 던전" target="_blank">화산 던전</a> 상자</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(78)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4e/Pink_Bow.png" alt="핑크 리본"></button></td>
            <td>핑크 리본</td>
            <td>이 거대한 리본으로 독특한 스타일을 완성하세요!</td>
            <td><a href="https://ko.stardewvalleywiki.com/화산 던전" target="_blank">화산 던전</a>의 드워프가 판매</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(79)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d1/Frog_Hat.png" alt="개구리 모자"></button></td>
            <td>개구리 모자</td>
            <td>머리 위의 미끈미끈한 친구.</td>
            <td>진저 섬의 미식가 개구리 동굴에서 낚시</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(80)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1a/Small_Cap.png" alt="작은 캡"></button></td>
            <td>작은 캡</td>
            <td>공기 역학적 모자.</td>
            <td>월요일에 <a href="https://ko.stardewvalleywiki.com/섬 상인" target="_blank">섬 상인</a>이 토란 30개에 판매.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(81)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2b/Bluebird_Mask.png" alt="파랑새 가면"></button></td>
            <td>파랑새 가면</td>
            <td>섬 상인처럼 보일 수 있는 모자.</td>
            <td>수요일에 <a href="https://ko.stardewvalleywiki.com/섬 상인" target="_blank">섬 상인</a>이 토란 30개에 판매.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(82)"><img src="https://stardewvalleywiki.com/mediawiki/images/b/b9/Deluxe_Cowboy_Hat.png" alt="디럭스 카우보이 모자"></button></td>
            <td>디럭스 카우보이 모자</td>
            <td>더 극단적인 모양의 카우보이 모자.</td>
            <td>금요일에 <a href="https://ko.stardewvalleywiki.com/섬 상인" target="_blank">섬 상인</a>이 토란 30개에 판매.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(83)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/ed/Mr._Qi%27s_Hat.png" alt="미스터 치 모자"></button></td>
            <td>미스터 치 모자</td>
            <td>미스터 치의 상징적인 모자의 모사품.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/치의 호두 방" target="_blank">치의 호두 방</a>에서 치 보석 5개에 판매</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(84)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/d5/Dark_Cowboy_Hat.png" alt="어두운 카우보이 모자"></button></td>
            <td>어두운 카우보이 모자</td>
            <td>멋들어진 검은색 카우보이 모자.</td>
            <td> <a href="https://ko.stardewvalleywiki.com/해골 동굴" target="_blank">해골 동굴</a>의 보물 상자에서 확률적으로 드랍</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(85)"><img src="https://stardewvalleywiki.com/mediawiki/images/4/4d/Radioactive_Goggles.png" alt="방사능 고글"></button></td>
            <td>방사능 고글</td>
            <td>실제 방사능 차단 효과는 없습니다.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/방사능 주괴" target="_blank">방사능 주괴</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(86)"><img src="https://stardewvalleywiki.com/mediawiki/images/c/c4/Swashbuckler_Hat.png" alt="스워시버클러 모자"></button></td>
            <td>스워시버클러 모자</td>
            <td>고전적인 액션 사극 주인공의 모자.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/용의 이빨" target="_blank">용의 이빨</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(87)"><img src="https://stardewvalleywiki.com/mediawiki/images/d/dd/Qi_Mask.png" alt="치의 가면"></button></td>
            <td>치의 가면</td>
            <td>???</td>
            <td>옷감과 치 열매 조합</td>
              <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(88)"><img src="https://stardewvalleywiki.com/mediawiki/images/2/2a/Star_Helmet.png" alt="스타 헬멧"></button></td>
            <td>스타 헬멧</td>
            <td>별이 그려진 붉은 모자.</td>
            <td>옷감과 버섯나무 씨앗 조합</td>
              <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(89)"><img src="https://stardewvalleywiki.com/mediawiki/images/9/92/Sunglasses.png" alt="선글라스"></button></td>
            <td>선글라스</td>
            <td>느긋한 인상을 줍니다.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/잉걸불 파편" target="_blank">잉걸불 파편</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(90)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1a/Goggles.png" alt="고글"></button></td>
            <td>고글</td>
            <td>아주 안전해 보입니다.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/벌레 스테이크" target="_blank">벌레 스테이크</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(91)"><img src="https://stardewvalleywiki.com/mediawiki/images/3/30/Forager%27s_Hat.png" alt="채집가의 모자"></button></td>
            <td>채집가의 모자</td>
            <td>채집가의 기쁨입니다.</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/생강" target="_blank">생강</a> 조합</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(92)"><img src="https://stardewvalleywiki.com/mediawiki/images/e/e2/Tiger_Hat.png" alt="호랑이 모자"></button></td>
            <td>호랑이 모자</td>
            <td>아름다운 호랑이의 모습을 할 수 있습니다.</td>
            <td>호랑 슬라임이 확률 드랍</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(93)"><img src="https://stardewvalleywiki.com/mediawiki/images/1/1a/ConcernedApe_Hat.png" alt="???"></button></td>
            <td>???</td>
            <td>???</td>
            <td>완벽 100% 달성 후 화산 꼭대기에 있는 원숭이에게 대화.</td>
            <td>불가능</td>
          </tr>
          <tr>
            <td><button onclick="hatbtn(94)"><img src="https://stardewvalleywiki.com/mediawiki/images/6/68/Warrior_Helmet.png
              " alt="전사의 투구"></button></td>
            <td>전사의 투구</td>
            <td>타조알 껍데기를 개조해서 만든 투구</td>
            <td>옷감과 <a href="https://ko.stardewvalleywiki.com/타조알" target="_blank">타조알</a> 조합</td>
            <td>불가능</td>
          </tr>
        </table>
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