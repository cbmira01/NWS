<?php

        // set up the connection variables
        $db_name  = 'application';
        $hostname = '127.0.0.1';
        $username = 'localhost';
        $password = 'password';

        // connect to the database
        $dbh = new PDO("mysql:host=$hostname;dbname=$db_name;charset=utf8", $username, $password);

?>