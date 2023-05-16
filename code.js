import "nes.css/css/nes.min.css";

var myMusic;
var mySound;

function startGame() {
    mySound = new sound("bounce.mp3");
    myMusic = new sound("gametheme.mp3");
    myMusic.play();
}