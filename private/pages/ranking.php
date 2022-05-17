<?php
$score = $_SESSION["score"] ?? '0';

$id = $_SESSION['iduser'];

require_once __DIR__ . '/../myDB.php';

//   //classement général
try {
    $requete = $db->prepare("SELECT nickname, score,duration,date FROM game LEFT JOIN user ON (game.iduser = user.iduser)  ORDER BY score DESC LIMIT 10 ");
    $requete->execute();
    $scores = $requete->fetchAll();

  } catch (Exception $e) {
    die("services  momentanément indisponible. Merci de réessayer plus tard");
  }
try {
    $requete = $db->prepare('SELECT nickname, score,duration,date FROM game LEFT JOIN user ON (game.iduser = user.iduser)   WHERE user.iduser = ? ORDER BY score DESC LIMIT 100');
    $requete->execute(array($id));
    $gameHistory = $requete->fetchAll();
    
  } catch (Exception $e) {
    
    die("services  momentanément indisponible. Merci de réessayer plus tard");
  }
   


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
  <h2>
    historique des parties
    
  </h2>
  <ol>
    <?php foreach ($gameHistory as $score) : ?>
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








