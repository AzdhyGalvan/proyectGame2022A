class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image()
        this.image.src = "https://img.freepik.com/vector-gratis/interior-supermercado-supermercado-tienda-grande-muchos-productos-frutas-verduras-interior-centro-comercial-estilo-dibujos-animados-plana_212168-625.jpg?w=2000"
    }  
   
  
    draw(){
       /* this.x --; 
        if(this.x < -canvas.width){ 
            this.x=0
        }*/
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
      ctx.drawImage(
          this.image,
          this.x + this.width,
          this.y,
          this.width,
          this.height
      )
   
   
      }
    }

    class Personaje{
        constructor(arrImg,arrImg2,x,y,w,h){
            this.x=x;
            this.y=y;
            this.width=w;
            this.height=h;
            this.direction="der"
            this.img1=new Image()
            this.img1.src=arrImg[0];
            this.img2=new Image()
            this.img2.src=arrImg[1]
            this.imgOfficial=this.img1

            this.img3=new Image()
            this.img3.src=arrImg2[0]
            this.img4=new Image()
            this.img4.src=arrImg2[1]
          

        }
        draw(){
            if (this.x <= 0){
                this.x=2
            }
            if (this.x >= canvas.width){
                this.x= canvas.width
            }

            //ctx.fillRect(this.x,this.y,this.width,this.height)
            
            switch(this.direction){
                case "izq":
                    if(frames % 40 ===0){
                        this.imgOfficial=this.imgOfficial=== this.img3 ? this.img4 : this.img3;
                    }

                    ctx.drawImage(this.imgOfficial,this.x,this.y,this.width,this.height)

                break;


                default:
                    if(frames % 40 ===0){
                        this.imgOfficial=this.imgOfficial=== this.img1 ? this.img2 : this.img1;
                    }
                    ctx.drawImage(this.imgOfficial,this.x,this.y,this.width,this.height)
                break;
               
            }
    
        }
       
        collision(item){
           
            return (
                this.x < item.x + item.width &&
                this.x + this.width > item.x &&
                this.y < item.y + item.height &&
                this.y + this.height > item.y
            )
            
        }
    }



    class Despensa {
        constructor(x,y,w,h){
            this.x=x;
            this.y=y;
            this.width=w;
            this.height=h;
            this.image=new Image()
            this.image.src="../images/despensa.png"
        }
        draw(){
            this.y +=1;
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
            
        }
    }
  
    class Vinos {
        constructor(x,y,w,h){
            this.x=x;
            this.y=y;
            this.width=w;
            this.height=h;
            this.image=new Image()
            this.image.src="../images/vinos.png"
        }
        draw(){
            this.y +=1;
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        
        }
    }