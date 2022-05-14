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
        this.x --; 
        if(this.x < -canvas.width){ 
            this.x=0
        }
  
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
        constructor(arrImg,x,y,w,h){
            this.x=x;
            this.y=y;
            this.width=w;
            this.height=h;
            this.img1=new Image()
            this.img1.src=arrImg[0];
            this.img2=new Image()
            this.img2.src=arrImg[1]

            this.imgOfficial=this.img1
        }
        draw(){
            if(frames % 40 ===0){
                this.imgOfficial=this.imgOfficial=== this.img1 ? this.img2 : this.img1;
            }
            ctx.drawImage(this.imgOfficial,this.x,this.y,this.width,this.height)
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

    class Enemy {
        constructor(x,y,w,h){
            this.x=x
            this.y=y
            this.width=w
            this.height=h
                
        }
    }

    class Despensa extends Enemy{
        constructor(w,h,y){
            super(canvas.width,y,w,h)
            this.image=new Image()
            this.image.src="../images/despensa.png"
        }
        draw(){
            this.y -=4;
            ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        }
    }
  
  