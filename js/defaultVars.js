const canvas=document.getElementById("my-canvas")
const ctx =canvas.getContext("2d")

let frames = 0;
let requestId;

let audio=new Audio()
audio.src="../audio/audio.mp3"
audio.loop=true