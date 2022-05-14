const canvas=document.getElementById("my-canvas")
const ctx =canvas.getContext("2d")

let frames = 0;
let requestId;
let arr=[]

let audio=new Audio()
audio.src="../audio/supermarket-sound-effects.mp3"
audio.loop=true

const personImg=["../images/img1.png","../images/img2.png"]