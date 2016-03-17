<?php

  require_once("config.php");

  $jsonString = file_get_contents("php://input");
  $data = json_decode($jsonString);

  $sql = "INSERT INTO ads_t (link) VALUES (:link)";
  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(":link", $data->link); 
  $success = $stmt->execute();

  if ($success) {
      $json = json_encode(array("msg" => "Ad has been created successfully.", "error" => ""));
  } else {
      $json = json_encode(array("msg" => "", "error" => "Error inserting record."));
  }
  
  print_r($json);
  
?>