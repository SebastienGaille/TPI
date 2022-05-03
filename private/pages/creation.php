<?php 


$username = trim($_REQUEST['username']);


//si l'username est trop court 
if(strlen($username) < 3){
    header('location: index.php?page=inscription&error=username_too_short');
    die();
} 
//si l'username est trop long
if(strlen($username) > 30){
    header('location: index.php?page=inscription&error=username_too_long');
    die();
} 
//si les caractere son interdit 
//
// //!str_contains($username,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
// if(!str_contains($username,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'))
// {
//     header('location: index.php?page=inscription&error=username_forbidden_char');
//     die();
// }
//si la taille de username est différents de $result signifie que des caratere interdit sont a déploré 
$result = preg_replace("/[^a-zA-Z0-9]+/", "", $username);
if(strlen($result) == strlen($userName)) {
    header('location: index.php?page=inscription&error=username_forbidden_char');
    die(); 
}

require_once __DIR__ . '/../myDB.php';

  try {   
     
    $request = $db->prepare("INSERT INTO user(nickname,registration_date) VALUES(:NICKNAME,':RD')");
    
    $res = $request->execute(array(
      ':NICKNAME' => $username,
       ':RD'=> '2022-05-03'
    ));
    

  } catch (Exception $e) {
    die("services  momentanément indisponible. Merci de réessayer plus tard");
  }


//si tout ce passe bien 
header('location: index.php?page=login&msg=inscription_ok');
die();