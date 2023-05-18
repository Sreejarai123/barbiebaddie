function startGame() {
  myGamePiece = new component(30, 30, "red", 10, 120);
  mySound = new sound("bounce.mp3");
  myMusic = new sound("gametheme.mp3");
  myMusic.play();
  myGameArea.start();
}

var menuButtons = document.getElementsByClassName('menu-content');
var contentItem = document.getElementsByClassName('content-item');

function menu(index, Mcolorcode, Ccolorcode) {
  Array.from(menuButtons).forEach((x) => {
    x.style.backgroundColor = 'rgb(255, 233, 172)';
  })
  menuButtons[index].style.backgroundColor = Mcolorcode;
  Array.from(contentItem).forEach((x) => {
    x.style.display = 'none';
    x.style.backgroundColor = '';
  })
  contentItem[index].style.display = 'inline-block';
  contentItem[index].style.backgroundColor = Ccolorcode;
}

menu(0, 'orange', 'rgb(255, 233, 172)');

//내용

//악세사리 버튼 클릭시
var accessorySX = 0;
var accessorySY = 0;
var accessoryPositionY = 0;
var accessoryheight = 0;

var accessorycanvas = document.getElementById('accessories');
var accessorycontext = accessorycanvas.getContext('2d');

var accessoryDcanvas = document.getElementById('accessoryDcanvas');
var accessoryDcontext = accessoryDcanvas.getContext('2d');

var accessoryimg = new Image();
accessoryimg.crossOrigin="anonymous";

k = 0;
var accessorystylenum = 0;

function accessorybtnL() {
  k--;
  if (k < 1) {
    k = 19;
  }
  accessorystylenum = k;

  accessorybtn();
}

function accessorybtnR() {
  k++;
  if (k > 19) {
    k = 1;
  }
  accessorystylenum = k;

  accessorybtn();
}

/* function accessorybtn() {
  
  if (accessoryundo === true) {
    document.querySelector('#accessoryundo').innerHTML = '취소하기'
    accessoryundo = false;
  }

  document.getElementById("accessoryDcanvas").style.background = 'none';
  accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  accessoryDcontext.clearRect(0, 0, canvas.width, canvas.height);

  if (accessorystylenum % 8 === 1) {
    accessorySX = 0 * 16;
  } else if (accessorystylenum % 8 === 2) {
    accessorySX = 1 * 16;
  } else if (accessorystylenum % 8 === 3) {
    accessorySX = 2 * 16;
  } else if (accessorystylenum % 8 === 4) {
    accessorySX = 3 * 16;
  } else if (accessorystylenum % 8 === 5) {
    accessorySX = 4 * 16;
  } else if (accessorystylenum % 8 === 6) {
    accessorySX = 5 * 16;
  } else if (accessorystylenum % 8 === 7) {
    accessorySX = 6 * 16;
  } else if (accessorystylenum % 8 === 0) {
    accessorySX = 7 * 16;
  }

  if (accessorystylenum / 8 <= 1) {
    accessoryPositionY = 0 * 32;
  } else if (accessorystylenum / 8 <= 2) {
    accessoryPositionY = 1 * 32;
  } else if (accessorystylenum / 8 <= 3) {
    accessoryPositionY = 2 * 32;
  }

  if (i === 0) {
    accessorySY = 0 + accessoryPositionY;
  } else if (i === 1) {
    accessorySY = 16 + accessoryPositionY;
  } else if (i === 2) {
    accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  } else if (i === 3) {
    accessorySY = 16 + accessoryPositionY;
  } 

  accessoryimg.onload = function() {
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY, 17, 20, 62, 35 + accessoryheight, 200, 65);    
    accessoryDcontext.drawImage(accessoryimg, accessorySX, accessoryPositionY, 17, 20, 63, 0, 170, 150);   
  }
  accessoryimg.src = 'https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/accessories/accessories.png';
}
*/

var accessoryundo = false;

function accessoryundobtn() {
  if (accessoryundo === false) {
  accessorycontext.clearRect(0, 0, canvas.width, canvas.height);
  accessoryundo = true;
  document.querySelector('#accessoryundo').innerHTML = '적용하기';
  } else if (accessoryundo === true) {
    accessorycontext.drawImage(accessoryimg, accessorySX, accessorySY + accessoryPositionY, 17, 20, 62, 35 + accessoryheight, 200, 65); 
    accessoryundo = false;
    document.querySelector('#accessoryundo').innerHTML = '취소하기';
  }
}

//머리 버튼 클릭시 

var haircanvas = document.getElementById('hair');
var haircontext = haircanvas.getContext('2d');

var hairImages = [
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairL-Bla.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairL-Blo.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairL-Bro.png',
  "https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairL-G.png",
  "https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairS-Bla.png",
  "https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairS-Blo.png",
  "https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairS-Bro.png",
  "https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/hairs/hairS-G.png",
  ];

var hairImage = new Image();
var hairIndex = -1; // Track the current hair index
var hairVisible = false; // Flag to track hair visibility

function hairbtnL() {
  hairIndex--;
  if (hairIndex < 0) {
    hairIndex = hairImages.length - 1;
  }
  hairbtn(hairIndex);
}

function hairbtnR() {
  hairIndex++;
  if (hairIndex >= hairImages.length) {
    hairIndex = 0;
  }
  hairbtn(hairIndex);
}

function hairbtn(index) {
  if (hairundo === true) {
    document.querySelector('#hairundo').innerHTML = 'remove';
    hairundo = false;
  }
  if (index === hairIndex) {
    // Same button clicked again
    if (hairVisible) {
      haircontext.clearRect(0, 0, haircanvas.width, haircanvas.height);
      hairVisible = false;
    } else {
      haircontext.drawImage(hairImage, 0, 0, haircanvas.width, haircanvas.height);
      hairVisible = true;
    }
  } else {
    // Different button clicked, update the current index and display the hair
    hairIndex = index;
    hairImage.onload = function() {
      haircontext.clearRect(0, 0, haircanvas.width, haircanvas.height);
      haircontext.drawImage(hairImage, 0, 0, haircanvas.width, haircanvas.height);
      hairVisible = true;
    };
    hairImage.src = hairImages[index];
  }
}

var hairundo = false;

function hairundobtn() {
  if (hairundo === false) {
  haircontext.clearRect(0, 0, canvas.width, canvas.height);
  hairundo = true;
  document.querySelector('#hairundo').innerHTML = 'remove';
  } else if (hairundo === true) {
    haircontext.drawImage(0, 0, canvas.width, canvas.height);
    hairundo = false;
    document.querySelector('#hairundo').innerHTML = 'remove';
  }
}

//두번 클릭시 취소
var hatundo = false;

function samebutton(num, numrepeat) {

  if (num.length <= 1 ) {
    return false;
  } else if (num[num.length - 1] != num[num.length - 2]) {
    numrepeat = 1;
    return false;
  } else {
    if (numrepeat % 2 != 0) {
      return false;
    } else {
      return true;
    }
  }
}

//모자 버튼 클릭시
var hatnum = [];
var hatnumrepeat = 0;
var ShareHat = 1;
var hatSX = 0;
var hatSY = 0;
var hatheight = 0;

function hatSYwithI(n) {
  return (-40/3 * n * n * n) + (50 * n * n) + (-50/3 * n);
}

var hatcanvas = document.getElementById('hat');
var hatcontext = hatcanvas.getContext('2d');
var hatimg = new Image();
hatimg.crossOrigin="anonymous";

function hatbtn(n) {
  hatnumrepeat++;
  hatnum.push(n);
  if (hatnum.length > 10) {
    hatnum.splice(0, hatnum.length - 10);
  }

  if (samebutton(hatnum, hatnumrepeat) === true) {
    hatcontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {

  hatcontext.clearRect(0, 0, canvas.width, canvas.height);

  if (n % 12 === 1) {
    hatSX = 0;
  } else if (n % 12 === 2) {
    hatSX = 20;
  } else if (n % 12 === 3) {
    hatSX = 40;
  } else if (n % 12 === 4) {
    hatSX = 60;
  } else if (n % 12 === 5) {
    hatSX = 80;
  } else if (n % 12 === 6) {
    hatSX = 100;
  } else if (n % 12 === 7) {
    hatSX = 120;
  } else if (n % 12 === 8) {
    hatSX = 140;
  } else if (n % 12 === 9) {
    hatSX = 160;
  } else if (n % 12 === 10) {
    hatSX = 180;
  } else if (n % 12 === 11) {
    hatSX = 200;
  } else if (n % 12 === 0) {
    hatSX = 220;
  }

  if (n / 12 <= 1) {
    ShareHat = 0;
  } else if (n / 12 <= 2) {
    ShareHat = 1;
  } else if (n / 12 <= 3) {
    ShareHat = 2;
  } else if (n / 12 <= 4) {
    ShareHat = 3;
  } else if (n / 12 <= 5) {
    ShareHat = 4;
  } else if (n / 12 <= 6) {
    ShareHat = 5;
  } else if (n / 12 <= 7) {
    ShareHat = 6;
  } else if (n / 12 <= 8) {
    ShareHat = 7;
  } 
  
  hatSY = hatSYwithI(i) + (ShareHat * 80);
  hatimg.onload = function() {
    hatcontext.drawImage(hatimg, hatSX, hatSY, 20, 20, 60, 24 + hatheight, 190, 60);    
  }
  hatimg.src='https://raw.githubusercontent.com/ihyeon908/StardewDressUp/main/hat/hats.png';
  }
}

var shirtcanvas = document.getElementById('shirt');
var shirtcontext = shirtcanvas.getContext('2d');


var shirtImages = [
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/tops/top1.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/tops/top2.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/tops/top3.png',
  "https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/tops/top4.png",
];

var shirtImage = new Image();
var shirtIndex = -1; // Track the current shirt index
var shirtVisible = false; // Flag to track shirt visibility

function shirtbtn(index) {
  if (index === shirtIndex) {
    // Same button clicked again
    if (shirtVisible) {
      shirtcontext.clearRect(0, 0, shirtcanvas.width, shirtcanvas.height);
      shirtVisible = false;
    } else {
      shirtcontext.drawImage(shirtImage, 0, 0, shirtcanvas.width, shirtcanvas.height);
      shirtVisible = true;
    }
  } else {
    // Different button clicked, update the current index and display the shirt
    shirtIndex = index;
    shirtImage.onload = function() {
      shirtcontext.clearRect(0, 0, shirtcanvas.width, shirtcanvas.height);
      shirtcontext.drawImage(shirtImage, 0, 0, shirtcanvas.width, shirtcanvas.height);
      shirtVisible = true;
    };
    shirtImage.src = shirtImages[index];
  }
}

/* function shirtbtn(n, shirtIndex) {
  shirtnumrepeat++;
  shirtnum.push(n);
  if (shirtnum.length > 10) {
    shirtnum.splice(0, shirtnum.length - 10);
  }

  if (samebutton(shirtnum, shirtnumrepeat) === true) {
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);
    shirtbasedraw(n, shirtIndex);
  } else {
    shirtcontext.clearRect(0, 0, canvas.width, canvas.height);

    shirtimg.onload = function() {
      shirtcontext.drawImage(shirtimg, 0, 0); 
    }

    shirtimg.src = shirtImages[shirtIndex];

    shirtbasedraw(n, shirtIndex);
  }
} 
function shirtbasedraw(n, shirtIndex) {
  shirtbasenumrepeat++;
  shirtbasenum.push(n);
  if (shirtbasenum.length > 10) {
    shirtbasenum.splice(0, shirtbasenum.length - 10);
  }

  if (samebutton(shirtbasenum, shirtbasenumrepeat) === true) {
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  } else {
    shirtbasecontext.clearRect(0, 0, canvas.width, canvas.height);
  
    shirtbaseimg.onload = function() {
      shirtbasecontext.drawImage(shirtbaseimg, 0, 0);
    }

    shirtbaseimg.src = shirtImages[shirtIndex];
  }
} */

//bottoms

var pantscanvas = document.getElementById('pants');
var pantscontext = pantscanvas.getContext('2d');
var pantsImages = [
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/bottoms/bottom1.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/bottoms/bottom2.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/bottoms/bottom3.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/bottoms/bottom4.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/bottoms/bottom5.png',
  'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/bottoms/bottom6.png',
];
var pantsImage = new Image();
var pantsIndex = -1; // Track the current shirt index
var pantsVisible = false; // Flag to track shirt visibility

function pantsbtn(index) {
  if (index === pantsIndex) {
    // Same button clicked again
    if (pantsVisible) {
      pantscontext.clearRect(0, 0, pantscanvas.width, pantscanvas.height);
      pantsVisible = false;
    } else {
      pantscontext.drawImage(pantsImage, 0, 0, pantscanvas.width, pantscanvas.height);
      pantsVisible = true;
    }
  } else {
    // Different button clicked, update the current index and display the shirt
    pantsIndex = index;
    pantsImage.onload = function() {
      pantscontext.clearRect(0, 0, pantscanvas.width, pantscanvas.height);
      pantscontext.drawImage(pantsImage, 0, 0, pantscanvas.width, pantscanvas.height);
      pantsVisible = true;
    };
    pantsImage.src = pantsImages[index];
  }
}

//캔버스 

//캔버스에 사진 붙일 때는 onload를 이용 -> 배열이용, 애니메이션 이용(프레임마다 캔버스 지워짐)일때는 다른 방법 사용
//함수(onload)보다 onload(이미지 함수) 사용하면 여러 이미지 등록 가능
//파일명 입력할때 파일 포함하는 파일명까지 써줘야 함

//밑그림

var canvas = document.getElementById('base');
var context = canvas.getContext('2d');

var baseimg = new Image();

baseimg.src='https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/base/base1.png';
baseimg.crossOrigin = "Anonymous";
var baseimgSX = 0;
var baseimgSY = 1;

baseimg.onload = function() {
  context.drawImage(baseimg, 0, 0, canvas.width, canvas.height);
}

//신발 버튼 클릭시
//이미지 데이터로 저장

var shoescanvas = document.getElementById('shoes');
var shoescontext = shoescanvas.getContext('2d');
var shoesImages = [
'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/shoes/shoe1.png',
'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/shoes/shoe2.png',
'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/shoes/shoe3.png',
'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/shoes/shoe4.png',
'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/shoes/shoe5.png',
'https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/shoes/shoe6.png',
];
var shoesImage = new Image();
var shoesIndex = -1; // Track the current shoe index
var shoesVisible = false; // Flag to track shoe visibility

function shoesbtn(index) {
if (index === shoesIndex) {
// Same button clicked again
if (shoesVisible) {
shoescontext.clearRect(0, 0, shoescanvas.width, shoescanvas.height);
shoesVisible = false;
} else {
shoescontext.drawImage(shoesImage, 0, 0, shoescanvas.width, shoescanvas.height);
shoesVisible = true;
}
} else {
// Different button clicked, update the current index and display the shoe
shoesIndex = index;
shoesImage.onload = function() {
shoescontext.clearRect(0, 0, shoescanvas.width, shoescanvas.height);
shoescontext.drawImage(shoesImage, 0, 0, shoescanvas.width, shoescanvas.height);
shoesVisible = true;
};
shoesImage.src = shoesImages[index];
}
}

//화살표 작동

var i = 0;
var backheight = 0;

//성별 클릭했을 때

function medskin() {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/base/base1.png';
  baseimg.onload = function() {
    context.drawImage(baseimg, 0, 0, canvas.width, canvas.height);
  }

}

function lightskin() {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/base/base2.png';
  baseimg.onload = function() {
    context.drawImage(baseimg, 0, 0, canvas.width, canvas.height);
  }
}

function darkskin() {
  
  context.clearRect(0, 0, canvas.width, canvas.height);
  baseimg.src='https://raw.githubusercontent.com/codecouturebaddies/codec/gh-pages/images/base/base3.png';
  baseimg.onload = function() {
    context.drawImage(baseimg, 0, 0, canvas.width, canvas.height);
  }

}
