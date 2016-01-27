<?php

  require_once('config.php');

  // JSON string has been posted from Angular app.
  // $jsonString = file_get_contents("php://input");
  $jsonString = '{"userId": "2"}' ;
  $data = json_decode($jsonString);

  $sql = "DELETE FROM users_t WHERE id = :id_p";
  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(':id_p', $data->userId);   
  $success = $stmt->execute();

  if ($success) {
      $json = json_encode(array('msg' => "User has been deleted successfully.", 'error' => ''));
  } else {
      $json = json_encode(array('msg' => "", 'error' => 'Error deleting record.'));    
  }
  print_r($json);

?>

