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
require_once "../private/pages/{$page}.php"; 
   
