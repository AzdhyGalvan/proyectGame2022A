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
  
  