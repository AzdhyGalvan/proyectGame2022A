const audioIntruccion= new Audio()
audioIntruccion.src="../audio/nobody-like-u-instrumental.mp3"
audio.loop=true;


document.getElementById("begin").onclick =function(){
    audioIntruccion.play()
}

