<?php

  require_once("config.php");

  switch ($_GET["table"]) {
    case "feature":
        $sql = "SELECT id, title, article, image1, image2, image3 FROM feature_t WHERE id = 1";
        break;
    case "articles":
        // hfso flag (T/F) indicates the image is to be hidden (not rendered) for small media only
        $sql = "SELECT id, uuid, hfso, title, image, text FROM articles_t";
        break;
    case "videos":
        $sql = "SELECT id, site, type, title, description, link FROM videos_t";
        break;
    case "ads":
        $sql = "SELECT id, link FROM ads_t";
        break;
    case "archives":
        $sql = "SELECT id, title, link FROM archives_t";
        break;
    case "officers":
        $sql = "SELECT id, name, email, description, photo FROM officers_t";
        break;
    case "services":
        $sql = "SELECT id, text FROM services_t";
        break;
    default:
        $json = json_encode(array("msg" => "", "error" => "No usable table name, in readAll.php."));
        print_r($json);
        exit;
  }
  
  $stmt = $pdo->prepare( $sql );
  $stmt->execute();
  $result = $stmt->fetchAll( PDO::FETCH_ASSOC );

  $json = json_encode( $result, JSON_PRETTY_PRINT );
  print_r($json);
  
?>

