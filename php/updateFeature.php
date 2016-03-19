<?php

  require_once("config.php");

  $jsonString = file_get_contents("php://input");
  $data = json_decode($jsonString);
  
  $sql = "UPDATE feature_t SET ";
  $sql = $sql . " article = :article, ";
  $sql = $sql . " image1 = :image1, ";
  $sql = $sql . " image2 = :image2, ";
  $sql = $sql . " image3 = :image3, ";
  $sql = $sql . " title = :title ";
  $sql = $sql . " WHERE id = :id ";

  $stmt = $pdo->prepare($sql);                                  
  $stmt->bindParam(":id", $data->id);       
  $stmt->bindParam(":article", $data->article);   
  $stmt->bindParam(":image1", $data->image1); 
  $stmt->bindParam(":image2", $data->image2); 
  $stmt->bindParam(":image3", $data->image3); 
  $stmt->bindParam(":title", $data->title);  
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

