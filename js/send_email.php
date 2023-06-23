<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  // Send email
  $to = "jason.torres.j2@gmail.com";
  $subject = "New Contact Form Submission";
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
  
  // Add any desired email headers or additional processing

  if (mail($to, $subject, $body)) {
    echo "Thank you for your message. We will be in touch shortly.";
  } else {
    echo "Sorry, an error occurred. Please try again later.";
  }
}
?>
