const bg= new Background()
const personaje=new Personaje(personImg,reverseImg,100,420,150,250)
const imgOver = new Image()
imgOver.src="../images/Game Over.png"

const imgWon= new Image()
imgWon.src="../images/youwon.png"


     
function upDate(timer){
    frames ++;
    time --;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    //audio.play()
    personaje.draw()
    generateObstacules()
    drawObstacules()
    generateVinos()
    drawVinos()
    ctx.font="40px Arial "  
    ctx.fillText(`Score: ${score}`,170,40)
    ctx.fillText(`Lives: ${lives}`,870,40)
    ctx.fillText(`Time: ${time}`,470,40)
console.log("que es timer",timer)


if(start){
    stopTime = timer + stopIn;
    start = false;
}else{
    
    if(timer >= stopTime){
        stop = true;
    }
}

if(time <= 15){
    speed =5;
}

timeTillStop = stopTime - timer;
time=Math.floor(timeTillStop/1000)


if (time === 0){
    gameOver()
}


if (lives <= 0){
    gameOver()
}


if (score === 500){
    winGame()
}

if(requestId){
    requestAnimationFrame(upDate)

}

}

function startGame(){
 
    requestId=requestAnimationFrame(upDate)
}

function gameOver(){
    

    ctx.drawImage(imgOver,400,200,600,400)
    ctx.font="60px italic"
    ctx.fillText(`Score:${score}`,400,570)

    audio.pause()
    requestId=undefined


}

function winGame(){
ctx.drawImage(imgWon,300,200,600,400)
requestId=undefined
}

function reset(){

}




function generateObstacules(){

if(frames %120 === 0 ){
    let x = Math.floor(Math.random()* (1100-50)) +10;
    

        const obs =new Despensa(x,50,60,80)
                arr.push(obs)
    

}

}
function generateVinos(){

    if(frames %450 === 0 ){
        let x = Math.floor(Math.random()* (1100-70)) +1;
        
    
            const vinos =new Vinos (x,50,80,90)
                    arrV.push(vinos)
        
    
    }
}

function drawVinos (){
    arrV.forEach((vinos,index_obs)=>{
        vinos.draw(speed);
      

       if(personaje.collision(vinos)){
            arrV.splice(index_obs,1)
            lives -=1;
           audioLives.play()
        }



    })
}
function drawObstacules (){
    arr.forEach((obs,index_obs)=>{


        obs.draw(speed);
    
        if(personaje.collision(obs)){
            arr.splice(index_obs,1)
           score += 20
           audio.play()
           
        }
  


    })
}






startGame()

addEventListener("keydown",(event)=>{
    event.preventDefault() 
   
   switch(event.keyCode){
       case 39:
           personaje.direction="der";
           personaje.x +=20;
           console.log("derecha")
           break;
        case 37:
            personaje.direction="izq";
            personaje.x -=20;
            console.log("izq")
            break;

   }
    
    }  )
   