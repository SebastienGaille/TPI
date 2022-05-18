<?php
/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier PHP login.php
*/
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
require_once "../private/pages/{$page}.php"; 
   
