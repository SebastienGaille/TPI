/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier script truck.js
est le fichier de la classe Truck 
*/

import Shape from './shape.js';
import { getRandomInt } from '../utils/math.js';


export default class Truck extends Shape {
    constructor(x,y,layer,speed = 0.1,hitBoxWidth=100,hitBoxHeight=200){
        super(x,y,layer,speed,hitBoxWidth,hitBoxHeight);
        this.truckImage = document.querySelector('#truck'+getRandomInt(1,3));
    }
    draw(ctx) {
        const width = 512;
        const height = 512;
        const resizeFactor = 0.3;
        ctx.drawImage(this.truckImage, this.x - width * resizeFactor/2, this.y  - height * resizeFactor/2, width * resizeFactor, height * resizeFactor);

        super.draw(ctx);
    }
}

//fait des voitures avec des id aléatoire 
