<?php
require_once('config.php');

// $data = json_decode(file_get_contents("php://input"));
$jsonString = '{"uname": "d3", "email": "d3"}' ;
$data = json_decode(  $jsonString  );

$userName = $data->uname;
$userEmail = $data->email;

$sql = 'SELECT COUNT(*) as rowCount FROM users WHERE email = :email';
$stmt = $dbh->prepare($sql);
$stmt->execute( array(':email' => $userEmail) );
$result = $stmt->fetchAll();
$rowCount = $result[0]['rowCount'];

if ($rowCount == 0) {
    $sql = 'INSERT INTO users (name, email) VALUES (:uname, :email)';
    $stmt = $dbh->prepare($sql);
    $success = $stmt->execute( array(':uname' => $userName, ':email' => $userEmail) );
  
    if ($success) {
        $json = json_encode(array('msg' => "User Created Successfully!", 'error' => ''));
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