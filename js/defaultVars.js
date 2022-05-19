const canvas=document.getElementById("my-canvas")
const ctx =canvas.getContext("2d")

let frames = 0;
let requestId;
let arr=[];
let lives= 3;
let arrV=[];
let score=0;
let speed= 1;
let start=true;
let stopIn=62000;
let stopTime=1;
let stop=false;
let timeTillStop=1;
let time=60;

let audio=new Audio()
audio.src="../audio/supermarket-sound-effects.mp3"
audio.loop=true
audio.level= 0.3;

let audioLives= new Audio()
audioLives.src="../audio/incorrecto.mp3"
audio.loop=true





const personImg=["../images/img1.png","../images/img2.png"]
const reverseImg=["../images/reverse1.png","../images/reverse2.png"]