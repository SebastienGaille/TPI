<?php
//ouvre la session 
session_start();

$page = $_REQUEST['page'] ?? 'login';


//vérifie si la page existe
if(!file_exists("../private/pages/{$page}.php")){
    //si elle n'existe pas alors on redirige sur la page de login
    $page = "login";
}

//vérifie si il est authentifié, sinon le redirige sur le login
$isConnect = isset($_SESSION['username']);
if(!$isConnect&& $page !='inscription'  && $page !='creation' && $page !='connection'  ){
    $page ="login";
}

echo $page;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <?php require_once "../private/pages/{$page}.php"; ?>
   
</body>
</html>