<?php

  require_once("config.php");

  $sql = "SELECT id, site, type, title, description, link FROM videos_t";
  $stmt = $pdo->prepare( $sql );
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

  $json = json_encode( $result, JSON_PRETTY_PRINT );
  print_r($json);
  
?>

