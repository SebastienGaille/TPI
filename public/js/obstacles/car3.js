export default class Car3 extends Shape {
    draw(ctx) {
        const width = 256;
        const height = 256;
        const resizeFactor = 0.3;
        ctx.drawImage(document.querySelector('#car3')/*+ getRandomInt(4))*/, this.x - width * resizeFactor/2, this.y  - height * resizeFactor/2, width * resizeFactor, height * resizeFactor);

        super.draw(ctx);
    }
}
