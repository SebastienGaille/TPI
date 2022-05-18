/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier script player.js
est un fichier de la classe Player 
*/

import Shape from './shape.js';

export default class Player extends Shape {
  
  draw(ctx) {    
    const width = 400;
    const height = 400;
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
    
    if(this.x<250){
      this.x=250;
    }
    //collision des bord du canvas 
    if(this.x>ctx.canvas.width-250){
      this.x=ctx.canvas.width-250;
    }
  }

}