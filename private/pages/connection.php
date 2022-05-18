<?php
/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier PHP connection.php
*/

$username = trim($_REQUEST['username']);

require_once __DIR__ . '/../myDB.php';

try{
    $request =$db->prepare("SELECT iduser,nickname FROM user WHERE nickname=? LIMIT 1");
    $request->execute([$username]);
    $row = $request -> fetch();
    
    $usernameDB =$row['nickname'];
}
catch(Exception $e){
    
    die("services momentanément indisponible. Merci de réessayer plus tard!!");
}

if($username != $usernameDB){
    header('location: index.php?page=login&msg=login_failed');
    die();
}


$_SESSION['username'] = $username;
$_SESSION['iduser'] = $row['iduser'];



header('location: index.php?page=menu');




die();