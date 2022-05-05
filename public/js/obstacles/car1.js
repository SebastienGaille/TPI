import Shape from './shape.js';


export default class Car1 extends Shape {
    draw(ctx) {
        const width = 256;
        const height = 256;
        const resizeFactor = 0.3;
        ctx.drawImage(document.querySelector('#car1')/*+ getRandomInt(4))*/, this.x - width * resizeFactor/2, this.y  - height * resizeFactor/2, width * resizeFactor, height * resizeFactor);

        super.draw(ctx);
    }
}

//fait des voitures avec des id aléatoire 
// function getRandomInt(max) {
//     let random = Math.floor(Math.random() * max)
//     if(random < 1){
//         random = 1;
//     }
//     return random ;
//   }
  