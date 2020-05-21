<?php
  $host = "localhost";
  $userName = "dylandil_main_user";
  $password = "qWE-are135";
  $dbName = "dylandil_portfolio";
  // Create database connection
  $conn = new mysqli($host, $userName, $password, $dbName);
  // Check connection
  if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
  }
?>
