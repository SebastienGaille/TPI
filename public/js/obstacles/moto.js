import Shape from './shape.js';
import { getRandomInt } from '../utils/math.js';


export default class Moto extends Shape {
    constructor(x,y,layer,speed = 0.1,hitBoxWidth=100,hitBoxHeight=100){
        super(x,y,layer,speed,hitBoxWidth,hitBoxHeight);
        this.motoImage = document.querySelector('#moto'+getRandomInt(1,3));
    }
    draw(ctx) {
        const width = 200;
        const height = 200;
        const resizeFactor = 0.3;
        ctx.drawImage(this.motoImage, this.x - width * resizeFactor/2, this.y  - height * resizeFactor/2, width * resizeFactor, height * resizeFactor);

        super.draw(ctx);
    }
}

//fait des voitures avec des id aléatoire 
