<?php
require_once("includes/a_config.inc.php");

  if((isset($_POST['your_name'])&& $_POST['your_name'] !='') && (isset($_POST['your_email'])&& $_POST['your_email'] !='')) {

    require_once("contact_mail.php");

   $yourName = $conn->real_escape_string($_POST['your_name']);
   $yourEmail = $conn->real_escape_string($_POST['your_email']);
   $message = $conn->real_escape_string($_POST['message']);

   $sql="INSERT INTO contact_form_info (name, email, message) VALUES ('".$yourName."','".$yourEmail."', '".$message."')";

   if(!$result = $conn->query($sql)){
     die('There was an error running the query [' . $conn->error . ']');
    } else {
     echo "Thank you! We will contact you soon";
    }
 } else {
   echo "Please fill Name and Email";
 }
?>
