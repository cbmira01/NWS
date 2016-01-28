<?php

  $db_name  = "crudtest_db";
  $hostname = "127.0.0.1";
  $username = "localhost";
  $password = "password";

  $pdo = new PDO("mysql: host=$hostname; dbname=$db_name; charset=utf8", $username, $password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

?>