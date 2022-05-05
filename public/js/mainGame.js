import Keyboard from "./utils/keyboardEvent.js";

const ctx = document.querySelector('canvas').getContext('2d');

// place la taille du canvas sur la taille du DOM
ctx.canvas.width = ctx.canvas.clientWidth;
ctx.canvas.height = ctx.canvas.clientHeight;


const keyboard = new Keyboard();
const pauseMenu = document.getElementById('pauseMenu');
const backToGame = document.getElementById('back');

let pauseIsTrue =0;
let lastTime = 0;

//la fonction backToGame sert au bouton back de fermer l'écran de pause
function btnBackToGame(){

pauseMenu.style.display="none";
pauseIsTrue=0;

}


function pause(){


//ferme le menu avec le bouton
    backToGame.onclick=btnBackToGame;



    //active le menu
    if(keyboard.isKeyDown('Escape') && pauseIsTrue < 10){
        pauseIsTrue--;
        if(pauseIsTrue < 0){
            pauseIsTrue=15;
        }
        pauseMenu.style.display="none";
        console.log("on active le menu");
    }

    //désactive le menu
    if(keyboard.isKeyDown('Escape') && pauseIsTrue > 10){
        pauseIsTrue++;
        if(pauseIsTrue > 20){
            pauseIsTrue=5;
        }
        pauseMenu.style.display="block";
        console.log("on desactive le menu");
    }

}
    

function tick(time ){
    const dt = time - lastTime;
    lastTime = time; 
   
    pause();

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);