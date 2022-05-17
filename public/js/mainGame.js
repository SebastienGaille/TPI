import Keyboard from "./utils/keyboardEvent.js";
import Player from "./obstacles/player.js";
import Car from "./obstacles/car.js";
import Truck from "./obstacles/truck.js";
import Moto from "./obstacles/moto.js";
import { getRandomSpeed } from './utils/math.js';
import { getRandomQuestionId } from './utils/math.js';
import { getRandomQuestionInTime } from './utils/math.js';

console.log(window.questions[0].proposal_1)
const ctx = document.querySelector('canvas').getContext('2d');

// place la taille du canvas sur la taille du DOM
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;


const keyboard = new Keyboard();
const pauseMenu = document.getElementById('pauseMenu');
const backToGame = document.getElementById('back');
const speedPlayer = 0.5;
const restartGame = document.getElementById('gameOverMenu');

const carGenerate=400;
const motoGenerate=1500;
const truckGenerate=1000;

const menuQuestion = document.getElementById('menu-question');
const textQuestion = document.getElementById('question-text-id');
const imgQuestion = document.getElementById('img-question');
const p1LabelQuestion = document.getElementById('proposition1');
const p2LabelQuestion = document.getElementById('proposition2');
const p3LabelQuestion = document.getElementById('proposition3');
let duration=0;
let timeSpan=0;
let isQuestion = false;
let correctQuestion;
let proposition1;
let proposition2;
let proposition3;

let score = document.getElementById('score');
let gameOver = false;
let pause = false;
let lastTime = 0;
let timerAddScore = 0;
let btnRestart = document.getElementById('restart');
let scoreGameOver = document.getElementById('scoreGameOver');


let numQuestionRespond;
let numQuestionRespondTrue;
let numQuestionRespondFalse;



let player = new Player(ctx.canvas.width / 2, ctx.canvas.height - 200, 0, speedPlayer, 60, 100);
let entities = [];





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//interval qui fait apparaitre une voiture toutes les 2 secondes 
setInterval(() => {
    if (gameOver) {
        return;
    }
    if (pause) {
        return;
    }
    let x = getRandomInt((ctx.canvas.width / 100) * 30, (ctx.canvas.width / 100) * 90);
    let y = -100;
    entities.push(new Car(x, y, 2, getRandomSpeed(4, 5), 60, 100));
    console.log(entities);
}, carGenerate);

setInterval(() => {
    if (gameOver) {
        return;
    }
    if (pause) {
        return;
    }
    let x = getRandomInt((ctx.canvas.width / 100) * 21, (ctx.canvas.width / 100) * 99);
    let y = -100;
    entities.push(new Moto(x, y, 2, getRandomSpeed(3, 5), 60, 100));
    console.log(entities);
}, motoGenerate);
//interval qui fait apparaitre un camion toutes les 4 secondes 
setInterval(() => {
    if (gameOver) {
        return;
    }
    if (pause) {
        return;
    }
    let x = getRandomInt((ctx.canvas.width / 100) * 10, (ctx.canvas.width / 100) * 40);
    let y = -100;
    entities.push(new Truck(x, y, 2, getRandomSpeed(3, 4), 60, 100));
    console.log(entities);
}, truckGenerate);

//interval du timer en fonction du temps 
const timerScore = setInterval(() => {
    if (gameOver) {
        return;
    }
    if (pause) {
        return;
    }
    timerAddScore += 1;
    console.log(score);
    score.textContent = "score  : " + timerAddScore;



}, 100);

//interval pour l'apparitions des questions 
setInterval(() => {
    isQuestion = true;
    if (gameOver) {

        return;

    }
    if (pause) {

        return;
    }
    console.log(window.questions);
    let x = getRandomQuestionId(0, window.questions.length - 1);
    correctQuestion = window.questions[x].proposal_valid_index;
    proposition1 = window.questions[x].proposal_1;
    proposition2 = window.questions[x].proposal_2;
    proposition3 = window.questions[x].proposal_3;
    textQuestion.textContent = window.questions[x].text;
    p1LabelQuestion.textContent = proposition1;
    p2LabelQuestion.textContent = proposition2;
    p3LabelQuestion.textContent = proposition3;
    menuQuestion.style.display = "block";
    ctx.canvas.style.filter = "blur(" + 20 + "px)";
    //prends le lien de l'image dans la base de données 
    imgQuestion.setAttribute('src', window.questions[x].picture)

}, /* interval aléatoire  de 8 à 30 secondes*/getRandomQuestionInTime(10, 15));


//la fonction backToGame sert au bouton back de fermer l'écran de pause
if (!gameOver) {
    
    keyboard.onKeyDown('Digit1', selectQuestion1)
    keyboard.onKeyDown('Digit2', selectQuestion2)
    keyboard.onKeyDown('Digit3', selectQuestion3)
    if(!isQuestion){
        backToGame.onclick = menuPause;
        keyboard.onKeyDown('Escape', menuPause);
    }
    
}

keyboard.onKeyDown('KeyR', restart);
btnRestart.onclick = restart;


function selectQuestion1() {
    isQuestion=false;
    if (p1LabelQuestion.textContent == correctQuestion) {

        timerAddScore += 100;
        menuQuestion.style.display = "none";
        ctx.canvas.style.filter = "blur(" + 0 + "px)";
    }
    else {
        timerAddScore -= 100;
        ctx.canvas.style.filter = "blur(" + 10 + "px)";
        menuQuestion.style.display = "none";
        if(timerAddScore<0){
            timerAddScore=0;
        }
        setTimeout(blur2sec, 2000);
    }
}
function selectQuestion2() {
    isQuestion=false;
    if (p2LabelQuestion.textContent == correctQuestion) {

        timerAddScore += 100;
        menuQuestion.style.display = "none";
        ctx.canvas.style.filter = "blur(" + 0 + "px)";
    }
    else{
        timerAddScore -= 100;
        ctx.canvas.style.filter = "blur(" + 10 + "px)";
        menuQuestion.style.display = "none";
        if(timerAddScore<0){
            timerAddScore=0;
        }
        setTimeout(blur2sec, 2000);
    }
}
function selectQuestion3() {
    isQuestion=false;
    if (p3LabelQuestion.textContent == correctQuestion) {

        timerAddScore += 100;
        menuQuestion.style.display = "none";
        ctx.canvas.style.filter = "blur(" + 0 + "px)";
    }
    else{
        timerAddScore -= 100;
        ctx.canvas.style.filter = "blur(" + 10 + "px)";
        menuQuestion.style.display = "none";
        if(timerAddScore<0){
            timerAddScore=0;
        }
        setTimeout(blur2sec, 2000);
    }
}
function blur2sec() {
    ctx.canvas.style.filter = "blur(" + 0 + "px)";


}
function menuPause() {

    pause = !pause;
    if (pause && isQuestion == false) {
        pauseMenu.style.display = "block";
        ctx.canvas.style.filter = "blur(" + 5 + "px)";
    }
    else {
        pauseMenu.style.display = "none";
        ctx.canvas.style.filter = "blur(" + 0 + "px)";
    }
}
function restart() {
    console.log("restart")
    while (entities.length > 0) {
        entities.pop();
    }
    score.style.display = "block";
    restartGame.style.display = "none";
    ctx.canvas.style.filter = "blur(" + 0 + "px)";
    timerAddScore = 0;
    player.x = ctx.canvas.width / 2;
    player.y = ctx.canvas.height - 200;
    gameOver = false;
    ctx.canvas.width = ctx.canvas.clientWidth;
    ctx.canvas.height = ctx.canvas.clientHeight

}
function menuGameOver() {

    if (gameOver) {
        ctx.canvas.style.filter = "blur(" + 5 + "px)";
        restartGame.style.display = "block";
        score.style.display = "none";
        ctx.canvas.style.filter = "blur(" + 30 + "px)";
        menuQuestion.style.display = "none";

        scoreGameOver.innerHTML = "Votre score est de : " + timerAddScore;
        if (pause) {
            pause = false;
            pauseMenu.style.display = "none";
            return;
        }
    }


}
setInterval(() => {
    backgroundMoving();
}, 1);


function backgroundMoving() {
    if (gameOver) {
        return;
    }
    if (pause) {
        ctx.canvas.style.animation = "none";
        return;
    }
    ctx.canvas.style['background-image'] = "url('./sprites/background/road6.png')";
    ctx.canvas.style.animation = "scroll 40s linear infinite";

}

// const timerScore = setInterval(() => {
//     score +=1;
//     document.querySelector("#score").textContent = score;
// }, 1000);


function tick(time) {
    console.log(window.questions + "WORKING!");
    const dt = time - lastTime;
    lastTime = time;

    requestAnimationFrame(tick);
    if (gameOver) {
        menuGameOver();
        return;
    }
    if (pause) {
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
    for (const entity of entities) {

        if (entity.isInCollision(player.x, player.y)) {
            console.log("is in colision")
            console.log('index.php?page=savescore&score=' + timerAddScore + ' &duration=' + duration);
            fetch('index.php?page=savescore&score=' + timerAddScore + '&duration=1');
            gameOver = true;
            

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