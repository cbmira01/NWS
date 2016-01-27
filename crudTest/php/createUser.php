<?php

  require_once('config.php');

  // JSON string has been posted from Angular app.
  $jsonString = file_get_contents("php://input");
  // $jsonString = '{"uname": "cbmira01", "email": "cbmira01@gmail.com"}' ;
  $data = json_decode($jsonString);

  // Extract field values.
  $userName = $data->uname;
  $userEmail = $data->email;

  // This is the right way to extract a row count from MySQL via SELECT.
  $sql = 'SELECT COUNT(*) as rowCount FROM users_t WHERE email = :email_p';
  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(':email_p', $userEmail);   
  $stmt->execute();
  $result = $stmt->fetchAll();
  $rowCount = $result[0]['rowCount'];

  // Attempt to insert the record, emit result messages for the Angular app.
  if ($rowCount == 0) {
      $sql = 'INSERT INTO users_t (name, email) VALUES (:name_p, :email_p)';
      $stmt = $pdo->prepare($sql);
      $stmt->bindParam(':name_p', $userName); 
      $stmt->bindParam(':email_p', $userEmail); 
      $success = $stmt->execute();
    
      if ($success) {
          $json = json_encode(array('msg' => "User has been created successfully.", 'error' => ''));
      } else {
          $json = json_encode(array('msg' => "", 'error' => 'Error inserting record.'));
      }
  } else {
      $json = json_encode(array('msg' => "", 'error' => 'User already exists with same email.'));
  }
  print_r($json);
  
?>