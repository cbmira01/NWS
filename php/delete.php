<?php

  require_once("config.php");

  $jsonString = file_get_contents("php://input");
  $data = json_decode($jsonString);

  switch ($_GET["table"]) {
    case "articles":
        $sql = "DELETE FROM articles_t WHERE id = :id";
        break;
    case "videos":
        $sql = "DELETE FROM videos_t WHERE id = :id";
        break;
    case "ads":
        $sql = "DELETE FROM ads_t WHERE id = :id";
        break;
    case "archives":
        $sql = "DELETE FROM archives_t WHERE id = :id";
        break;
    case "officers":
        $sql = "DELETE FROM officers_t WHERE id = :id";
        break;
    case "services":
        $sql = "DELETE FROM services_t WHERE id = :id";
        break;
    default:
        $json = json_encode(array("msg" => "", "error" => "No usable table name, in delete.php."));
        print_r($json);
        exit;
  }

  $stmt = $pdo->prepare($sql);
  $stmt->bindParam(":id", $data->id);   
  $success = $stmt->execute();

  $sql = "SELECT ROW_COUNT()";
  $stmt = $pdo->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );
  $rowCount = $result[0]["ROW_COUNT()"];  
    
  if ($success) {
      $json = json_encode(array("msg" => $rowCount . " record(s) deleted.", "error" => ""));
  } else {
      $json = json_encode(array("msg" => "", "error" => "Error deleting record."));    
  }
  print_r($json);

?>

