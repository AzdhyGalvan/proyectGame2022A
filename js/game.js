const bg= new Background()
const personaje=new Personaje(personImg,reverseImg,100,250,200,450)



     
function upDate(){
    frames ++;
    ctx.clearRect(0,0,canvas.width,canvas.height)
    bg.draw()
    //audio.play()
    generateObstacules()
    drawObstacules()
    generateVinos()
    drawVinos()


if(requestId){
    requestAnimationFrame(upDate)
}

}

function startGame(){
 
    requestId=requestAnimationFrame(upDate)
}

function generateObstacules(){

if(frames %150 === 0 ){
    let x = Math.floor(Math.random()* (1100-50)) +10;
    

        const obs =new Despensa(x,50,80,90)
                arr.push(obs)
    

}

}
function generateVinos(){

    if(frames %500 === 0 ){
        let x = Math.floor(Math.random()* (1100-70)) +1;
        
    
            const obs =new Vinos (x,50,80,90)
                    arrV.push(obs)
        
    
    }
}

function drawVinos (){
    arrV.forEach((obs,index_obs)=>{
        obs.draw();
        console.log("que se dibuja")

       /* if(personaje.collision(obs)){
            console.log("Me esta tocando")
            requestId=undefined
        }*/



    })
}
function drawObstacules (){
    arr.forEach((obs,index_obs)=>{
        obs.draw();
        console.log("que se dibuja")

       /* if(personaje.collision(obs)){
            console.log("Me esta tocando")
            requestId=undefined
        }*/



    })
}



startGame()

addEventListener("keydown",(event)=>{
    event.preventDefault() 
   
   switch(event.keyCode){
       case 39:
           personaje.drawRigth();
           console.log("derecha")
           break;
        case 37:
            personaje.drawLeft();
            console.log("izq")
            break;

   }
    
    }  )
   