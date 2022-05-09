import Keyboard from "./utils/keyboardEvent.js";
import Player from "./obstacles/player.js";
import Car from "./obstacles/car.js";
import Truck from "./obstacles/truck.js";
import Moto from "./obstacles/moto.js";
import { getRandomSpeed } from './utils/math.js';

const ctx = document.querySelector('canvas').getContext('2d');

// place la taille du canvas sur la taille du DOM
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;


const keyboard = new Keyboard();
const pauseMenu = document.getElementById('pauseMenu');
const backToGame = document.getElementById('back');
const speedPlayer = 0.5;
const restartGame = document.getElementById('gameOverMenu')
let score = document.getElementById('score');
let gameOver =false;
let pause = false;
let lastTime = 0;
let timerAddScore = 0;
let btnRestart = document.getElementById('restart');
let scoreGameOver = document.getElementById('scoreGameOver');

let numQuestionRespond;
let numQuestionRespondTrue;
let numQuestionRespondFalse;


let player = new Player(ctx.canvas.width / 2, ctx.canvas.height - 200, 0, speedPlayer,60,100);
let entities = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//interval qui fait apparaitre une voiture toutes les 2 secondes 
setInterval(() => {
    if(gameOver){
        return;
    }
    if(pause){
        return;
    }
    let x = getRandomInt((ctx.canvas.width / 100) * 21, (ctx.canvas.width / 100) * 99);
    let y = -100;
    entities.push(new Car(x, y, 2, getRandomSpeed(5,7), 60, 100));
    console.log(entities);
}, 200);

setInterval(() => {
    if(gameOver){
        return;
    }
    if(pause){
        return;
    }
    let x = getRandomInt((ctx.canvas.width / 100) * 21, (ctx.canvas.width / 100) * 99);
    let y = -100;
    entities.push(new Moto(x, y, 2, getRandomSpeed(7,10), 60, 100));
    console.log(entities);
}, 1500);
//interval qui fait apparaitre un camion toutes les 4 secondes 
setInterval(() => {
    if(gameOver){
        return;
    }
    if(pause){
        return;
    }
    let x = getRandomInt(0, (ctx.canvas.width / 100) * 20);
    let y = -100;
    entities.push(new Truck(x, y, 2, getRandomSpeed(5,7), 60, 100));
    console.log(entities);
}, 1000);

//interval du timer en fonction du temps 
const timerScore =setInterval(() => {
    if(gameOver){
        return;
    }
    if(pause){
        return;
    }
    timerAddScore +=1;
    console.log(score);
    score.textContent = "score  : "+timerAddScore;
    
    
 
}, 100);

//la fonction backToGame sert au bouton back de fermer l'écran de pause
if(!gameOver){
    keyboard.onKeyDown('Escape',menuPause);
    backToGame.onclick=menuPause;
}

keyboard.onKeyDown('KeyR',restart);
btnRestart.onclick=restart;



function menuPause() {

    pause = !pause;
    if(pause){
        pauseMenu.style.display ="block";
        ctx.canvas.style.filter="blur("+5+"px)";
    }
    else{
        pauseMenu.style.display="none";
        ctx.canvas.style.filter="blur("+0+"px)";
    }
}
function restart(){
    console.log("restart")
    while(entities.length > 0){
        entities.pop();
    }
    score.style.display="block";
    restartGame.style.display="none";
    ctx.canvas.style.filter="blur("+0+"px)";
    ctx.canvas.style['background-color']="white";
    timerAddScore = 0;
    player.x = ctx.canvas.width / 2;
    player.y= ctx.canvas.height - 200;
    gameOver=false;
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight

}
function menuGameOver(){

        if(gameOver){
            ctx.canvas.style.filter="blur("+5+"px)";
            restartGame.style.display="block";
            score.style.display="none";
            ctx.canvas.style['background-color']="black";
            scoreGameOver.innerHTML = "Votre score est de : "+timerAddScore;
            if(pause){
                pause=false;
                pauseMenu.style.display="none";
                return;
            }
        } 
        
        
}

// const timerScore = setInterval(() => {
//     score +=1;
//     document.querySelector("#score").textContent = score;
// }, 1000);


function tick(time) {
    
    const dt = time - lastTime;
    lastTime = time;
    
    requestAnimationFrame(tick);
    if(gameOver){
        menuGameOver();
        return;
    }
    if(pause){
        return;
    }
    let dir = 0.5 * Math.PI;
    for (let entity of entities) {
        entity.update(dt, dir);
    }

    let dirPlayer = false;
    if (keyboard.isKeyDown('KeyA')) {
        dirPlayer = 'left';
    }
    if (keyboard.isKeyDown('KeyD')) {
        dirPlayer = 'right';
    }
    player.update(dt, dirPlayer, ctx);

    //collision 
    for(const entity of entities){
        
        if (entity.isInCollision(player.x, player.y)) {            
                console.log("is in colision")
                gameOver=true;
                console.log(gameOver);
                
            
         }        
    }
    // B) Dessine le WORLD
    // B1) On efface le canvas
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight

    entities.sort((e1, e2) => e1.layer - e2.layer);
    for (const entity of entities) entity.draw(ctx);


    player.draw(ctx);
    // pause();

   
}

requestAnimationFrame(tick);


//ma premiere méthode de menu
// //ferme le menu avec le bouton
    // backToGame.onclick = btnBackToGame;



    // //active le menu
    // if (keyboard.isKeyDown('Escape') && pauseIsTrue < 10) {
    //     pauseIsTrue--;

    //     player.speed = speedPlayer;
    //     if (pauseIsTrue < 0) {
    //         pauseIsTrue = 15;
    //     }
    //     pauseMenu.style.display = "none";
    //     console.log("on active le menu");
    // }

    // //désactive le menu
    // if (keyboard.isKeyDown('Escape') && pauseIsTrue > 10) {
    //     pauseIsTrue++;

    //     player.speed = 0;
    //     if (pauseIsTrue > 20) {
    //         pauseIsTrue = 5;
    //     }

    //     pauseMenu.style.display = "block";
    //     console.log("on desactive le menu");
    // }