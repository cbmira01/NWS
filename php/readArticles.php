<?php

  require_once("config.php");

  // hfso field (T/F) indicates the image is to be hidden (not rendered) for small media only
  $sql = "SELECT id, uuid, hfso, title, image, text FROM articles_t";
  $stmt = $pdo->prepare( $sql );
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

  $json = json_encode( $result, JSON_PRETTY_PRINT );
  print_r($json);
  
?>

