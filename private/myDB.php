<?php

    require_once 'conf.php';
    try {
        
        $serveur = HOST;
        $pseudo = USER;
        $pwd = PWD;
        $dbname = DBNAME;

        static $db = null;

        if ($db === null) {
           
            $pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
            $db = new PDO("mysql:host=$serveur;dbname=$dbname", $pseudo, $pwd, $pdo_options);
            $db->exec('SET CHARACTER SET utf8');
        }        
    } catch (Exception $e) {
        //echo 'Exception reçue : ',  $e->getMessage(), "\n";
        die("services  momentanément indisponible. Merci de réessayer plus tard");
    } 
    
    define('DB_CON', $db);    
