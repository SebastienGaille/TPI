import Shape from './shape.js';

export default class Player extends Shape {
  
  draw(ctx) {    
    const width = 512;
    const height = 512;
    const resizeFactor = 0.3;
    ctx.drawImage(document.querySelector('#player'), this.x - width * resizeFactor/2, this.y  - height * resizeFactor/2, width * resizeFactor, height * resizeFactor);
  }

  update(deltaT, dir, ctx) {
    const distX = this.speed * deltaT;
    if (dir === 'right') {      
      this.x += distX;
    } 
    else if (dir === 'left') {
      this.x -= distX;
    }
    
    if(this.x<10){
      this.x=10;
    }
    //collision des bord du canvas 
    if(this.x>ctx.canvas.width-10){
      this.x=ctx.canvas.width-10;
    }
  }

}