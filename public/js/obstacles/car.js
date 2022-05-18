/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier script car.js
est un fichier de la classe Car 
*/

import Shape from './shape.js';
import { getRandomInt } from '../utils/math.js';

//on exporte la classe
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