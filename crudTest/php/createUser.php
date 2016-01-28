<?php

  require_once("config.php");

  // JSON string posted from Angular app.
  $jsonString = file_get_contents("php://input");
  $data = json_decode($jsonString);

  // Here is the right way to extract a row count from MySQL via SELECT.
  $sql = "SELECT COUNT(*) as rowCount FROM users_t WHERE email = :email";
  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(":email", $data->email);   
  $stmt->execute();
  $result = $stmt->fetchAll();
  $rowCount = $result[0]["rowCount"];

  // Attempt to insert the record, emit result messages for the Angular app.
  if ($rowCount == 0) {
      $sql = "INSERT INTO users_t (name, email) VALUES (:name, :email)";
      $stmt = $pdo->prepare($sql);
      $stmt->bindParam(":name", $data->name); 
      $stmt->bindParam(":email", $data->email); 
      $success = $stmt->execute();
    
      if ($success) {
          $json = json_encode(array("msg" => "User has been created successfully.", "error" => ""));
      } else {
          $json = json_encode(array("msg" => "", "error" => "Error inserting record."));
      }
  } else {
      $json = json_encode(array("msg" => "", "error" => "User already exists with same email."));
  }
  print_r($json);
  
?>