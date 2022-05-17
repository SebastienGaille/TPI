<?php
//cette page est inutile 
// $idquestion=$_SESSION['idquestion'];
// require_once __DIR__ . '/../myDB.php';

// try{
//     $request =$db->prepare("SELECT * FROM question WHERE idquestion=? LIMIT 1");
//     $request->execute([$idquestion]);
//     $row = $request -> fetch();
    
//     $textQuestionDB =$row['text'];
//     $pictureQuestionDB =$row['picture'];
//     $proposal1 =$row['proposal_1'];
//     $proposal2 =$row['proposal_2'];
//     $proposal3 =$row['proposal_3'];
//     $proposalValid =$row['proposal_valid_index'];
//     echo "question recup";
//     var_dump($textQuestionDB);

// }
// catch(Exception $e){
    
// die("services momentanément indisponible. Merci de réessayer plus tard!!");
// }

// if($idquestion != $usernameDB){
//     header('location: index.php?page=login&msg=login_failed');
//     die();
// }





// header('location: index.php?page=menu');
// die();