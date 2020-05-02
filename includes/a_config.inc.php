<?php
try
{
  $pdo = new PDO('mysql:host=localhost;dbname=dylandil_portfolio', 'dylandil_main_user', 'qWE-are135');
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
  $error = 'Unable to connect to the database server.';
  include 'includes/error.html.php';
  exit();
}
