<?php

  $dsn = "mysql:host=127.0.0.1;dbname=crudtest_db";
  $username = "crud_user";
  $password = "password";  
  $options = array(
      PDO::ATTR_ERRMODE, 
      PDO::ERRMODE_WARNING
  ); 
  
  $pdo = new PDO($dsn, $username, $password, $options);

?>
