<?php

  require_once("config.php");

  $sql = "SELECT id, title, article, image1, image2, image3 FROM feature_t WHERE id = 1";
  $stmt = $pdo->prepare( $sql );
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

  $json = json_encode( $result, JSON_PRETTY_PRINT );
  print_r($json);
  
?>

