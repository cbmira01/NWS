<?php

  $dsn = "mysql:host=localhost;dbname=nws_db";
  $username = "nws_user";
  $password = "password";
  $options = array(
      PDO::ATTR_ERRMODE,
      PDO::ERRMODE_WARNING
  );

  $pdo = new PDO($dsn, $username, $password, $options);

?>
