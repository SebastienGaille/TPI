<?php
/*
Nom : Gaille
Prénom: Sébastien
date de réalisation du projet: 02.05.2022-18.05.2022
temps à disposition: 90 heures 

description: le fichier PHP logout.php
*/
    unset($_SESSION['username']);
    session_destroy();

    header('location: index.php');
    die();
    