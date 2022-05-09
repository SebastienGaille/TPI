const collisionVisible = false;


export default class Shape{

    constructor(x,y,layer,speed = 0.1,hitBoxWidth=80,hitBoxHeight=80){
        this.x=x;
        this.y=y;
        this.layer = layer;
        this.speed=speed;
        this.hitBoxWidth=hitBoxWidth
        this.hitBoxHeight=hitBoxHeight;
    }

    draw(ctx){
        if (!collisionVisible) return;
        ctx.fillStyle="red";
        ctx.fillRect(this.x - this.hitBoxWidth/2,this.y-this.hitBoxHeight+50,this.hitBoxWidth,this.hitBoxHeight);
    }

    update(deltaT,dir){
        const distX = this.speed*deltaT*Math.cos(dir);
        const distY = this.speed*deltaT*Math.sin(dir);
        this.x+=distX;
        this.y+=distY;
    }
    //détecte si l'objet est en collision
    isInCollision(x, y,) {        
        return (x > this.x - this.hitBoxWidth/2 
             && x < this.x + this.hitBoxWidth/2 
             && y > this.y - this.hitBoxHeight/2
             && y < this.y + this.hitBoxHeight/2);
      }
    }