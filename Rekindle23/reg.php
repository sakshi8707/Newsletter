<?php
include("dbconnection.php");

if($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST['submit'])) {
    $code = $_POST['code'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $meal = $_POST['meal'];
    $stream = $_POST['stream'];
    $year = $_POST['year'];
    $registrar = $_POST['registrar'];

    date_default_timezone_set('Asia/Kolkata');
    $time = date('Y-m-d H:i:s');

    $query = "INSERT INTO `users` (`code`,`meal`, `stream`, `year`, `fname`,`lname`,`email`,`time`,`present`,`registrar`)
              VALUES ('$code','$meal', '$stream', '$year', '$fname', '$lname', '$email', '$time', true, '$registrar')"
    ;

    if (mysqli_query($db, $query)) {
      echo 'added';
    } else {
      echo mysqli_error($db);
    }
  }
}
?>