import Shape from './shape.js';
import { getRandomInt } from '../utils/math.js';


export default class Car extends Shape {
    constructor(x,y,layer,speed = 0.1,hitBoxWidth=100,hitBoxHeight=100){
        super(x,y,layer,speed,hitBoxWidth,hitBoxHeight);
        this.carImage = document.querySelector('#car'+getRandomInt(1,3));
    }
    draw(ctx) {
        const width = 256;
        const height = 256;
        const resizeFactor = 0.3;
        ctx.drawImage(this.carImage, this.x - width * resizeFactor/2, this.y  - height * resizeFactor/2, width * resizeFactor, height * resizeFactor);

        super.draw(ctx);
    }
}

//fait des voitures avec des id aléatoire 
