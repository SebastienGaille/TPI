<?php 
require_once('../Model/media.php');
require_once('../Model/post.php');
header("Content-type: application/json");

if (filter_has_var(INPUT_POST, "idQuestion"))
    $nbPost = intval(filter_input(INPUT_POST, 'idQuestion', FILTER_SANITIZE_NUMBER_INT));
$reponse = getFivePostWithMedia($offset, $nbPost);
if($reponse != false){
  $data = json_encode($reponse);
  if ($data !== false)
  {
    echo $data;
    exit;
  }
}
echo '{"Result": "Error"}';