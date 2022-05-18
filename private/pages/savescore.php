
<?php
/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier PHP savescore.php
*/

require_once __DIR__ . '/../myDB.php';

  $score = $_REQUEST["score"] ?? '0';
  $duration = $_REQUEST["duration"] ?? '0';
  $id = $_SESSION['iduser'];

  if (!ctype_digit($score)) die();
  if (!ctype_digit($duration)) die();
  
 
  
  try {    
    $requete = $db->prepare("INSERT INTO game(score, iduser,duration,date) VALUES(:SCORE, :USERID,:DURATION,:DATE)");
    $result = $requete->execute(array(
      ':SCORE' => $score,
      ':USERID' => $id,
      ':DURATION' => $duration,   
      ':DATE' =>  date("Y/m/d"),         
    ));
  

  } catch (Exception $e) {
  var_dump($e->getMessage());
    die("services  momentanément indisponible. Merci de réessayer plus tard");
  }