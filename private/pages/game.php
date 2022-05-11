<?php
require_once __DIR__ . '/../myDB.php';

//  $request =$db->prepare("SELECT * FROM question");
$request =$db->prepare("SELECT text,proposal_1, proposal_2,proposal_3,proposal_valid_index  FROM question"); //mets tout les champs
 $request->execute();
 $questions = $request -> fetchAll();
//  $result = $sth->fetchAll(PDO::FETCH_CLASS, 'question');

 $questionsArray = [];
 foreach ($questions as $question) {
   $questionsArray[] = $question;
 };

//  //print_r($questionsArray);
//  die(json_encode($questionsArray));




?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High-Way</title>
    <link rel="stylesheet" href="./css/game.css">

    <link rel="icon" href="favicon.ico" />
    <!-- jquery librairie javascript -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        
         window.questions = <?php echo json_encode($questionsArray);?>;
        
    </script>
    <script type="module" src="./js/mainGame.js"></script>
</head>
<body>
    <canvas class="wrapper">

    </canvas>
    <div id="info">
    <h1 id="pseudoGame">
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
            Game Over
        </h1>
        <h2>
            Dommage <?php echo $_SESSION['username'];?> vous avez malheureusement perdu :(
        </h2>
        <h2 id="scoreGameOver">
            Votre score est de : 0
        </h2>
        <div class="container">
            <div class="button-menu-game" id="exit" >
                <a href="index.php?page=menu">exit</a>
            </div>
            <div class="button-menu-game" id="restart" onclick="restart()">
               Restart
            </div>
        </div>
    </div>

    <div class="question-menu-game" id="menu-question">
                <img src="./sprites/spriteRoadSign/otherWarning.png" alt="" id="img-question" >
                <p class="question-text" id="question-text-id">
                   
                </p>
                <div class="proposition-menu">
                    <p  class="question-selection" id="proposition1">

                    </p>
                    <p class="question-selection" id="proposition2" >

                    </p>
                    <p  class="question-selection" id="proposition3">

                    </p>
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