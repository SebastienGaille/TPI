import Keyboard from "./utils/keyboardEvent.js";
import Player from "./obstacles/player.js";
import Car1 from "./obstacles/car1.js";

const ctx = document.querySelector('canvas').getContext('2d');

// place la taille du canvas sur la taille du DOM
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;


const keyboard = new Keyboard();
const pauseMenu = document.getElementById('pauseMenu');
const backToGame = document.getElementById('back');
const speedPlayer = 0.5;
let pauseIsTrue =0;
let lastTime = 0;
let score=0;
let dir = 0.5 * Math.PI;

let player = new Player(ctx.canvas.width / 2, ctx.canvas.height - 200, 0, speedPlayer);
let entities = [];

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
   
    let x = getRandomInt(0, ctx.canvas.width);
    let y = -100;    
    entities.push(new Car1(x, y, 2, 0.1, 60, 60));
    console.log(entities);
}, 1000);




//la fonction backToGame sert au bouton back de fermer l'écran de pause
function btnBackToGame(){

pauseMenu.style.display="none";
pauseIsTrue=0;
player.speed=speedPlayer;

}


function pause(){

    
//ferme le menu avec le bouton
    backToGame.onclick=btnBackToGame;



    //active le menu
    if(keyboard.isKeyDown('Escape') && pauseIsTrue < 10){
        pauseIsTrue--;
       
        player.speed=speedPlayer;
        if(pauseIsTrue < 0){
            pauseIsTrue=15;
        }
        pauseMenu.style.display="none";
        console.log("on active le menu");
    }

    //désactive le menu
    if(keyboard.isKeyDown('Escape') && pauseIsTrue > 10){
        pauseIsTrue++;
        
        player.speed=0;
        if(pauseIsTrue > 20){
            pauseIsTrue=5;
        }
        
        pauseMenu.style.display="block";
        console.log("on desactive le menu");
    }

}

// const timerScore = setInterval(() => {
//     score +=1;
//     document.querySelector("#score").textContent = score;
// }, 1000);


function tick(time ){
   
    const dt = time - lastTime;
    lastTime = time; 

    
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
    player.update(dt,dirPlayer,ctx);

   
    // B) Dessine le WORLD
    // B1) On efface le canvas
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight

    entities.sort((e1, e2) => e1.layer - e2.layer);
    for (const entity of entities) entity.draw(ctx);


    player.draw(ctx);
    pause();

    requestAnimationFrame(tick);
}


requestAnimationFrame(tick);