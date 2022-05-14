const bg= new Background()

function upDate(){
    frames ++;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()

if(requestId){
    requestAnimationFrame(upDate)
}

}

function startGame(){
    audio.play()
    requestId=requestAnimationFrame(upDate)
}

startGame()