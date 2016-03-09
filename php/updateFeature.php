<?php

  require_once("config.php");

  $jsonString = file_get_contents("php://input");
  $data = json_decode($jsonString);
  
  $sql = "UPDATE feature_t SET ";
  $sql = $sql . "name = :name, ";
  $sql = $sql . "email = :email ";
  $sql = $sql . "WHERE id = :id";

  $stmt = $pdo->prepare($sql);                                  
  $stmt->bindParam(":id", $data->id);       
  $stmt->bindParam(":name", $data->name);    
  $stmt->bindParam(":email", $data->email);
  $success = $stmt->execute(); 

  $sql = "SELECT ROW_COUNT()";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
  $rowCount = $result[0]["ROW_COUNT()"];  
    
  if ($success) {
      $json = json_encode(array("msg" => $rowCount . " record(s) updated.", "error" => ""));
  } else {
      $json = json_encode(array("msg" => "", "error" => "Error updating record."));    
  }
  
  print_r($json);

?>

