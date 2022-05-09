<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High-Way</title>
    <link rel="stylesheet" href="./css/game.css">
    <script type="module" src="./js/mainGame.js"></script>
    <link rel="icon" href="favicon.ico" />
</head>
<body>
    <canvas>
        
    </canvas>
    <div id="info">
    <h1>
    <?php echo $_SESSION['username'];?>
    </h1 >
    <h1 id="score">
    score : 0
    </h1>
    
    </div>

    <div class="game-menu" id="pauseMenu">
        <h1 id="pause">
            pause
        </h1>
        <div class="container">
            <div class="button-menu-game" id="exit" >
                <a href="index.php?page=menu">exit</a>
            </div>
            <div class="button-menu-game" id="back" onclick="btnBackToGame()">
                Retour au jeu
            </div>
        </div>  
    </div>

    <div class="game-Over" id="gameOverMenu">
        <h1 id="gameOverTitle">
            pause
        </h1>
        <div class="container">
            <div class="button-menu-game" id="exit" >
                <a href="index.php?page=menu">exit</a>
            </div>
            <div class="button-menu-game" id="back" onclick="btnBackToGame()">
               Restart
            </div>
        </div>  
    </div>
    <img src="./sprites/spritesCar/Car1.gif" class="sprite" id="car1">
    <img src="./sprites/spritesCar/Car2.gif" class="sprite" id="car2">
    <img src="./sprites/spritesCar/Car3.gif" class="sprite" id="car3">
    <img src="./sprites/spritesTruck/Truck1.gif" class="sprite" id="truck1">
    <img src="./sprites/spritesTruck/Truck2.gif" class="sprite" id="truck2">
    <img src="./sprites/spritesTruck/Truck3.gif" class="sprite" id="truck3">
    <img src="./sprites/spritesPlayer/Tank.gif" class="sprite" id="player">
    <img src="./sprites/spritesMoto/Moto1.gif" class="sprite" id="moto1">
    <img src="./sprites/spritesMoto/Moto2.gif" class="sprite" id="moto2">
    <img src="./sprites/spritesMoto/Moto3.gif" class="sprite" id="moto3">

    
</body>
</html>