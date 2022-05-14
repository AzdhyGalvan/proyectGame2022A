const bg= new Background()
const personaje=new Personaje(personImg,100,250,200,450)
     
function upDate(){
    frames ++;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    personaje.draw()
    generateObstacules()
    drawObstacules()
if(requestId){
    requestAnimationFrame(upDate)
}

}

function startGame(){
 
    requestId=requestAnimationFrame(upDate)
}

function generateObstacules(){

if(frames %170 === 0 || frames %60 === 0){
    let y = Math.floor(Math.random()* (750-10)) +10;
    let h = Math.floor(Math.random()* (750-10)) +10;

    if(h<250 && y >=65 && y <250){
        const obs =new Despensa(0,y,0,h);
        arr.push(obs)
    }

}
}

function drawObstacules (){
    arr.forEach((obs,index_obs)=>{
        obs.draw();
        console.log("que se dibuja")
    })
}













startGame()
addEventListener("keydown",(event)=>{
    event.preventDefault() 
    //izq
    if(event.keyCode ===38){
        personaje.y -=20;
    }
    //derecha
    if(event.keyCode=== 40){
        personaje.y += 20;
    }
    
    }  )