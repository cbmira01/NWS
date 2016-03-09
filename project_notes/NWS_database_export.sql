CREATE DATABASE  IF NOT EXISTS `nws_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nws_db`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: nws_db
-- ------------------------------------------------------
-- Server version	5.6.17

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
-- Table structure for table `articles_t`
--

DROP TABLE IF EXISTS `articles_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articles_t` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uuid` tinytext,
  `hfso` char(1) DEFAULT NULL,
  `title` mediumtext,
  `image` mediumtext,
  `text` mediumtext,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles_t`
--

LOCK TABLES `articles_t` WRITE;
/*!40000 ALTER TABLE `articles_t` DISABLE KEYS */;
INSERT INTO `articles_t` VALUES (1,'4a60c1a5-036f-4ea9-b94c-4d72be6d3aa2','T','People Article','img/people1.jpg','People article lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elit libero, tincidunt sit amet placerat non, finibus vitae orci. Aliquam felis arcu, mattis in volutpat sit amet, volutpat a diam. Pellentesque pharetra nisl luctus purus venenatis tempor ut vitae magna. Donec ac tellus libero. Morbi ultricies arcu nec pretium maximus. Vivamus congue dolor sed libero lobortis, in ullamcorper elit vestibulum. Aenean pellentesque est non elementum vehicula. Vivamus ac lectus dolor. Integer risus arcu, sollicitudin sed vulputate nec, molestie eu odio. Quisque quam diam, viverra non leo eu, mattis semper ante. Duis sed lectus fermentum, dignissim turpis ut, feugiat elit. Vivamus sit amet neque risus.'),(2,'411a0890-723c-4fb0-b574-82aef5e1b64a','T','Nature Article','img/nature1.jpg','Nature article phasellus commodo tortor a imperdiet volutpat. Nam dapibus sodales velit eget accumsan. Etiam accumsan rhoncus aliquet. Integer quis auctor mi, in condimentum eros. In eleifend, lacus vel suscipit facilisis, felis libero consequat mi, commodo porta tellus mi eu neque. Fusce in elit sed sapien pulvinar dictum. Pellentesque nec aliquam diam, eget suscipit leo. Curabitur eleifend augue vitae libero tincidunt sagittis. Pellentesque vestibulum nec sapien quis rutrum. Mauris erat ex, ullamcorper a tortor vitae, iaculis tincidunt mauris. Ut in diam orci. In et neque imperdiet, gravida odio in, dictum odio.'),(3,'66f30199-86f1-483c-b8fd-d1bf057ac6b2','F','Food Article','img/food1.jpg','Food article vivamus sed quam id ligula dictum posuere sed eget turpis. Suspendisse a metus at purus scelerisque condimentum eu vitae urna. Etiam sit amet viverra quam. Sed sagittis, dolor in cursus placerat, ex lacus faucibus erat, at imperdiet eros orci ac arcu. Pellentesque velit libero, bibendum ut dictum ac, pellentesque quis quam. Nam feugiat vel risus et fringilla. Vestibulum commodo arcu sem. Vivamus vel nisi lorem. Donec in cursus lorem, pellentesque porttitor dui. Cras sollicitudin metus nec euismod tempor. Pellentesque maximus, dui sit amet rutrum sagittis, mi sem maximus dui, eget consequat augue diam et nisi. Mauris accumsan libero in velit vestibulum, non scelerisque diam tristique. Morbi id congue mi, sit amet ullamcorper est.'),(4,'11084cf1-5abf-49e7-87f9-2c4a5d6f04ff','T','British Flag','https://pixabay.com/static/uploads/photo/2016/02/03/15/58/flag-1177326_960_720.png','British flag duis vitae interdum ex, in suscipit lacus. Sed mollis est scelerisque purus dapibus aliquam. Donec a elit ut urna pulvinar sollicitudin. Fusce et purus eget nisi vestibulum laoreet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus arcu mi, condimentum id lacinia sollicitudin, maximus ac lacus. Vestibulum vehicula vestibulum magna, tempor pretium sapien sagittis sit amet. Fusce sollicitudin feugiat efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum nisi ac nisi faucibus, fringilla elementum libero auctor. Donec ornare, velit nec malesuada tincidunt, est enim lobortis felis, in posuere lorem felis in leo. Praesent porttitor, felis eu ultrices blandit, est urna sodales sem, quis aliquam sapien felis ac lacus. Mauris sed condimentum ante, ac sollicitudin justo.'),(5,'d6303779-dfd9-4e09-bd0f-37502265cafd','F','American Flag','https://pixabay.com/static/uploads/photo/2016/01/11/17/04/usa-flag-1133963_960_720.jpg','American flag vestibulum sodales maximus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed sapien purus, aliquet iaculis augue congue, ornare mattis neque. Phasellus sit amet metus consequat, vulputate tortor nec, pretium mauris. In est nisi, dictum sit amet nunc vitae, egestas finibus dui. Curabitur dapibus, elit id interdum tincidunt, velit lacus gravida massa, et vestibulum arcu dui vel tortor. Quisque ornare cursus feugiat. Curabitur felis nunc, pellentesque ut augue eget, vestibulum commodo nisl. Cras imperdiet, lorem sed placerat eleifend, orci ipsum volutpat arcu, tristique dignissim turpis arcu ut turpis. Maecenas fermentum eros quis nulla tempor, sit amet scelerisque augue auctor. In posuere arcu at ante fringilla, imperdiet vehicula augue consectetur. Nam tincidunt volutpat lectus, blandit sagittis nunc mattis vitae. Aliquam non est justo. Vivamus interdum magna quis porttitor varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.');
/*!40000 ALTER TABLE `articles_t` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feature_t`
--

DROP TABLE IF EXISTS `feature_t`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feature_t` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article` mediumtext,
  `image1` mediumtext,
  `image2` mediumtext,
  `image3` mediumtext,
  `title` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feature_t`
--

LOCK TABLES `feature_t` WRITE;
/*!40000 ALTER TABLE `feature_t` DISABLE KEYS */;
INSERT INTO `feature_t` VALUES (1,'This is feature text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet ipsum id velit dapibus maximus. Maecenas non felis interdum, efficitur justo ut, maximus felis. \r\n\r\nUt mauris lorem, gravida vel metus et, pulvinar malesuada erat. Sed sem ex, ullamcorper id ornare eu, imperdiet faucibus nunc. Sed nec lobortis nunc, eu porta orci. \r\n\r\nDonec eget dignissim odio, ut sagittis neque. Pellentesque pharetra volutpat maximus. ','https://pixabay.com/static/uploads/photo/2016/01/16/22/53/buildings-1144192_960_720.jpg','https://pixabay.com/static/uploads/photo/2013/05/02/21/09/suffer-city-108621_960_720.jpg','https://pixabay.com/static/uploads/photo/2014/02/17/10/20/statue-of-liberty-267948_960_720.jpg','New Construction in Deer Park');
/*!40000 ALTER TABLE `feature_t` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-03-08 22:58:56
