<?php

  require_once('config.php');

  // JSON string has been posted from Angular app.
  $jsonString = file_get_contents("php://input");
      // $jsonString = '{"id": "4", "name": "NewName" , "email": "BrandNewEmail.com"}' ;
  $data = json_decode($jsonString);
  
  $sql = "UPDATE users_t SET name = :name_p, email = :email_p WHERE id = :id_p";
  $stmt = $pdo->prepare($sql);                                  
  $stmt->bindParam(':id_p', $data->id);       
  $stmt->bindParam(':name_p', $data->name);    
  $stmt->bindParam(':email_p', $data->email);
  $success = $stmt->execute(); 

  $sql = "SELECT ROW_COUNT()";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
  $rowCount = $result[0]['ROW_COUNT()'];  
    
  if ($success) {
      $json = json_encode(array('msg' => $rowCount . " record(s) updated.", 'error' => ''));
  } else {
      $json = json_encode(array('msg' => "", 'error' => 'Error updating record.'));    
  }
  print_r($json);

?>

