<?php
$score = $_SESSION["score"] ?? '0';

$id = $_SESSION['iduser'];

require_once __DIR__ . '/../myDB.php';
// try {
//     $requete = $db->prepare("SELECT * FROM game WHERE iduser = ?");
//     // $requete->execute(array(
//     //        ':USERID' => $id,
//     //      ));
//     $requete->execute([$id]);
    
//     $row = $requete->fetch();
//   } catch (Exception $e) {
//     die("services  momentanément indisponible. Merci de réessayer plus tard");
    
//   }
  
//   //classement général
try {
    $requete = $db->prepare("SELECT nickname, score,duration,date FROM game LEFT JOIN user ON (game.iduser = user.iduser) ORDER BY score DESC LIMIT 1");
    $requete->execute();
    $scores = $requete->fetchAll();

  } catch (Exception $e) {
    die("services  momentanément indisponible. Merci de réessayer plus tard");
  }
   
//   $scoreEtat = 'normal';
//     // si l'utilisateur n'a pas encore eu de score ou qu'il a battu son record
//     if (!$row) {        
//         $scoreEtat = 'nouveau';
//         try {    
//           $requete = $db->prepare("INSERT INTO game(score, iduser,duration,date) VALUES(:SCORE, :USERID,:DURATION,:DATE)");
//           $result = $requete->execute(array(
//             ':SCORE' => $score,
//             ':USERID' => $id,
//             ':DURATION' => 1,   
//             ':DATE' =>  date("Y/m/d"),         
//           ));
        
      
//         } catch (Exception $e) {
//         var_dump($e->getMessage());
//           die("services  momentanément indisponible. Merci de réessayer plus tard");
//         }
//       } else if ($score > $row['score']) {
//         $scoreEtat = 'record perso';
//         if ($score > $scores[0]['score']) {
//           $scoreEtat = 'record';
//         }
//         try {    
//           $requete = $db->prepare("UPDATE game SET score = :SCORE WHERE iduser = :USERID");
//           $result = $requete->execute(array(
//             ':SCORE' => $score,
//             ':USERID' => $id,                
//           ));

//         } catch (Exception $e) {
//           die("services  momentanément indisponible. Merci de réessayer plus tard");
//         }
//     } 
//     else if ($score == $row['score']) {
//         $scoreEtat = 'record idem';
//       } 
//       try {    
//         $requete = $db->prepare("SELECT nickname, score, duration,date FROM game LEFT JOIN user ON (game.iduser = user.iduser) ORDER BY score DESC"); 
//         $requete->execute();
//         $scores = $requete->fetchAll();        
//       } catch (Exception $e) {
//         die("services  momentanément indisponible. Merci de réessayer plus tard");
//     } 
    

?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="icon" href="favicon.ico"/> -->
    <title>Rules</title>

    
</head>
<body>

<header>
<div>
    <h1>
        High-Way
    </h1>
</header>
<main>
  <h2>classement général</h2>
  <ol>
    <?php foreach ($scores as $score) : ?>
      <li>
        <?php echo $score['nickname']; ?> : <?php echo $score['score']; ?> : <?php echo $score['duration']; ?> : <?php echo $score['date']; ?>
      </li>
    <?php endforeach; ?>
  </ol>
</main>
<footer>
<a href="index.php?page=menu"> back to menu</a>
</footer>

</body>
</html>








