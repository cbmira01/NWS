<?php

  require_once("config.php");

  $jsonString = file_get_contents("php://input");
  $data = json_decode($jsonString);

  switch ($_GET["table"]) {
    case "articles":
        $sql = "INSERT INTO articles_t (uuid, hfso, title, image, text) VALUES (:uuid, :hfso, :title, :image, :text)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":uuid", $data->uuid); 
        $stmt->bindParam(":hfso", $data->hfso);
        $stmt->bindParam(":title", $data->title);
        $stmt->bindParam(":image", $data->image);
        $stmt->bindParam(":text", $data->text);
        break;
    case "videos":
        $sql = "INSERT INTO videos_t (site, type, title, description, link) VALUES (:site, :type, :title, :description, :link)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":site", $data->site);
        $stmt->bindParam(":type", $data->type); 
        $stmt->bindParam(":title", $data->title); 
        $stmt->bindParam(":description", $data->description); 
        $stmt->bindParam(":link", $data->link);  
        break;
    case "ads":
        $sql = "INSERT INTO ads_t (link) VALUES (:link)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":link", $data->link); 
        break;
    case "archives":
        $sql = "INSERT INTO archives_t (title, link) VALUES (:title, :link)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":title", $data->title); 
        $stmt->bindParam(":link", $data->link); 
        break;
    case "officers":
        $sql = "INSERT INTO officers_t (name, email, description, photo) VALUES (:name, :email, :description, :photo)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":name", $data->name); 
        $stmt->bindParam(":email", $data->email); 
        $stmt->bindParam(":description", $data->description); 
        $stmt->bindParam(":photo", $data->photo); 
        break;
    case "services":
        $sql = "INSERT INTO services_t (text) VALUES (:text)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":text", $data->text); 
        break;
    default:
        $json = json_encode(array("msg" => "", "error" => "No usable table name '" . $_GET["table"] . "' in create.php."));
        print_r($json);
        exit;
  }

  $success = $stmt->execute();

  if ($success) {
      $json = json_encode(array("msg" => "Ad has been created successfully.", "error" => ""));
  } else {
      $json = json_encode(array("msg" => "", "error" => "Error inserting record."));
  }
  print_r($json);
  
?>