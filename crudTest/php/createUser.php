<?php
require_once('config.php');

// JSON string has been posted from Angular app.
$jsonString = file_get_contents("php://input");
// $jsonString = '{"uname": "cbmira01", "email": "cbmira01@gmail.com"}' ;
$data = json_decode(  $jsonString  );

// Extract field values.
$userName = $data->uname;
$userEmail = $data->email;

// This is the right way to extract a row count from MySQL via SELECT.
$sql = 'SELECT COUNT(*) as rowCount FROM users_t WHERE email = :email';
$stmt = $dbh->prepare($sql);
$stmt->execute( array(':email' => $userEmail) );
$result = $stmt->fetchAll();
$rowCount = $result[0]['rowCount'];

// Attempt to insert the record, emit result messages for the Angular app.
if ($rowCount == 0) {
    $sql = 'INSERT INTO users_t (name, email) VALUES (:uname, :email)';
    $stmt = $dbh->prepare($sql);
    $success = $stmt->execute( array(':uname' => $userName, ':email' => $userEmail) );
  
    if ($success) {
        $json = json_encode(array('msg' => "User has been created successfully.", 'error' => ''));
        print_r($json);
    } else {
        $json = json_encode(array('msg' => "", 'error' => 'Error inserting record.'));
        print_r($json);
    }
} else {
    $json = json_encode(array('msg' => "", 'error' => 'User already exists with same email.'));
    print_r($json);
}
?>