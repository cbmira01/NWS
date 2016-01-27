<?php

  require_once('config.php');

  // JSON string has been posted from Angular app.
  $jsonString = file_get_contents("php://input");
      // $jsonString = '{"id": "4"}' ;
  $data = json_decode($jsonString);

  $sql = "DELETE FROM users_t WHERE id = :id_p";
  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(':id_p', $data->id);   
  $success = $stmt->execute();

  $sql = "SELECT ROW_COUNT()";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
  $rowCount = $result[0]['ROW_COUNT()'];  
    
  if ($success) {
      $json = json_encode(array('msg' => $rowCount . " record(s) deleted.", 'error' => ''));
  } else {
      $json = json_encode(array('msg' => "", 'error' => 'Error deleting record.'));    
  }
  print_r($json);

?>

