<?php

require_once('config.php');

// a query get all the records from the users table
$sql = 'SELECT id, name, email FROM users';

// use prepared statements, even if not strictly required is good practice
$stmt = $dbh->prepare( $sql );

// execute the query
$stmt->execute();

// fetch the results into an array
$result = $stmt->fetchAll( PDO::FETCH_ASSOC );

// convert to json
$json = json_encode( $result, JSON_PRETTY_PRINT );

// echo the json string
echo $json;
?>

