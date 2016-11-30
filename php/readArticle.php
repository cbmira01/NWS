<?php

  require_once("config.php");

  $uuid = $_GET["uuid"];

  $sql = "SELECT hfso, title, image, text FROM articles_t WHERE uuid = :uuid";
  $stmt = $pdo->prepare( $sql );
  $stmt->bindParam(":uuid", $uuid);
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

  $json = json_encode( $result, JSON_PRETTY_PRINT );
  print_r($json);

?>

