<?php
error_reporting(0);
// $data = json_decode(file_get_contents("php://input"));
$jsonString = '{"uname": "c5", "email": "c5"}' ;
$data = json_decode(  $jsonString  );
print_r($jsonString);
 var_dump($data);


$userName = mysql_real_escape_string($data->uname);
$userEmail = mysql_real_escape_string($data->email);

$con = mysql_connect('localhost', 'root', '');
mysql_select_db('application', $con);

$qry_em = 'select count(*) as cnt from users where email ="' . $userEmail . '"';
$qry_res = mysql_query($qry_em);
$res = mysql_fetch_assoc($qry_res);

if ($res['cnt'] == 0) {
    $qry = 'INSERT INTO users (name,email) values ("' . $userName . '","' . $userEmail . '")';
    $qry_res = mysql_query($qry);
    if ($qry_res) {
        $arr = array('msg' => "User Created Successfully!!!", 'error' => '');
        $jsn = json_encode($arr);
        print_r($jsn);
    } else {
        $arr = array('msg' => "", 'error' => 'Error In inserting record');
        $jsn = json_encode($arr);
        print_r($jsn);
    }
} else {
    $arr = array('msg' => "", 'error' => 'User Already exists with same email');
    $jsn = json_encode($arr);
    print_r($jsn);
}
?>