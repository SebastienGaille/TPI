<?php
/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier PHP login.php
*/
//on crée la variable $msg qui affichera à l'utilisateur les indications pour la création de son compte
$msg =$_REQUEST['msg'] ?? 'none';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="../public/css/login.css">
</head>
<body>
    
</body>
</html>

<div class="centered-full-page">
<?php if($msg == "inscription_ok") : ?>
    <p>
    Ton pseudo a bien été créé, tu peux désormais te logger
    </p>
<?php endif; ?> 
<?php if ($msg == "login_failed") : ?>
<p>
    Erreur dans le nom d'utilisateur
</p>
<?php endif; ?>
<form method="post" action="index.php?page=connection">
    <label>Nom du joueur</label>
    <input type="text" placeholder="nom du joueur" name="username" required>
    <input type="submit" value="Jouer">

</form>
<a href="index.php?page=inscription">Créer un compte</a>


</div>
