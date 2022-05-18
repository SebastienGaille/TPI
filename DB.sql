-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: DB_JDSR
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.31-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `answer`
--

DROP TABLE IF EXISTS `answer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `answer` (
  `status` tinyint(1) DEFAULT NULL,
  `idquestion` int(11) NOT NULL,
  `idanswer` int(11) NOT NULL AUTO_INCREMENT,
  `idgame` int(11) NOT NULL,
  PRIMARY KEY (`idanswer`),
  KEY `answer_FK` (`idgame`),
  KEY `answer_FK_1` (`idquestion`),
  CONSTRAINT `answer_FK` FOREIGN KEY (`idgame`) REFERENCES `game` (`idgame`),
  CONSTRAINT `answer_FK_1` FOREIGN KEY (`idquestion`) REFERENCES `question` (`idquestion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answer`
--

LOCK TABLES `answer` WRITE;
/*!40000 ALTER TABLE `answer` DISABLE KEYS */;
INSERT INTO `answer` VALUES (0,1,1,1);
/*!40000 ALTER TABLE `answer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game` (
  `date` date DEFAULT NULL,
  `score` int(11) NOT NULL,
  `duration` int(11) DEFAULT NULL,
  `idgame` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  PRIMARY KEY (`idgame`),
  KEY `game_FK` (`iduser`),
  CONSTRAINT `game_FK` FOREIGN KEY (`iduser`) REFERENCES `user` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
INSERT INTO `game` VALUES ('2022-05-10',555,10,1,1),('2022-05-16',666,1,4,1),('2022-05-16',227,1,5,1),('2022-05-16',613,1,6,2),('2022-05-16',33,1,7,1),('2022-05-16',997,1,8,10),('2022-05-16',710,1,9,11),('2022-05-16',15665,1,10,11),('2022-05-16',112,1,11,11),('2022-05-16',76681,1,12,11),('2022-05-16',60,1,13,12),('2022-05-16',1385,1,14,13),('2022-05-16',3257,1,15,13),('2022-05-16',33,1,16,13),('2022-05-16',53,1,17,13),('2022-05-16',160,1,18,13),('2022-05-17',277,1,19,1),('2022-05-17',33,1,20,14),('2022-05-17',8,1,21,1),('2022-05-17',96,1,22,1),('2022-05-17',7866,1,23,1),('2022-05-17',284,1,24,1),('2022-05-17',21,1,25,1),('2022-05-18',31,1,26,1);
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `idquestion` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(100) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `proposal_1` varchar(100) NOT NULL,
  `proposal_2` varchar(100) NOT NULL,
  `proposal_3` varchar(100) NOT NULL,
  `proposal_valid_index` varchar(100) NOT NULL,
  PRIMARY KEY (`idquestion`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question1.png','ATTENTION SANS INTERDIT','ATTENTION DEMI TOUR','ATTENTION SENS INTERDIT','ATTENTION SENS INTERDIT'),(2,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question2.png','ATTENTION OBLIGATION DE TOURNER A DROITE','ATTENTION DANGER','ATTENTION UN POINT D\'INTEROGATION','ATTENTION DANGER'),(3,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question3.png','ATTENTION BARRIERE','ATTENTION UN TRAIN','ATTENTION PASSAGE ','ATTENTION BARRIERE'),(4,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question4.png','ATTENTION CHAUSÉE GLISSANTE','ATTENTION DANGER','ATTENTION DEGATS','ATTENTION CHAUSÉE GLISSANTE'),(5,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question5.png','ATTENTION OBLIGATION DE TOURNER AU CENTRE','ATTENTION CHAUSÉE RÉTRÉCIE','ATTENTION PIED DE BICHE','ATTENTION CHAUSÉE RÉTRÉCIE'),(6,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question6.png','ATTENTION DESCENTE DANGEREUSE','ATTENTION MONTÉE DANGEREUSE','ATTENTION PENTE','ATTENTION DESCENTE DANGEREUSE'),(7,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question7.png','ATTENTION PENTE','ATTENTION DESCENTE DANGEREUSE','ATTENTION FORTE MONTÉE ','ATTENTION FORTE MONTÉE '),(8,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question8.png','ATTENTION INTERDICTION DE TOURNER A DROITE ','ATTENTION DE TOURNER A GAUCHE','ATTENTION INTERDICTION DE TOURNER A GAUCHE ','ATTENTION INTERDICTION DE TOURNER A GAUCHE '),(9,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question9.png','ATTENTION TRAVAUX','ATTENTION PASSAGE','ATTENTION OUVRIER ','ATTENTION TRAVAUX'),(10,'Que signifie ce panneau ?? ','sprites/spriteRoadSign/question10.png','ATTENTION HOMME MAL VEILLANT','ATTENTION PASSAGE PIÉTON','ATTENTION RÉPONSE MILLEU','ATTENTION PASSAGE PIÉTON');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `nickname` varchar(100) NOT NULL,
  `registration_date` date NOT NULL,
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('seb','2022-05-03',1),('ilidan','2022-05-04',2),('leotiste','2022-05-04',3),('bob','2022-05-04',4),('toto','2022-05-04',5),('stefan','2022-05-05',6),('DiscordMod3800','2022-05-09',7),('66666','2022-05-12',8),('idi','2022-05-12',9),('Bar','2022-05-16',10),('hrbl','2022-05-16',11),('tqt','2022-05-16',12),('mimoustique','2022-05-16',13),('le bg','2022-05-17',14),('sebb','2022-05-17',15),('test','2022-05-17',16);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'DB_JDSR'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-18 16:05:10
