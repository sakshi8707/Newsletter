<?php
include ("dbconnection.php");

if($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['submit'])) {
        $code = $_POST['code'];
        $registrar = $_POST['registrar'];

        date_default_timezone_set("Asia/Kolkata");
        $time = date('Y-m-d H:i:s');
        
        $query = "SELECT `srno`, `fname`, `lname`, `year`, `stream` from `users` where code='$code'";
        if ($result = mysqli_query($db, $query)) {
            $row = mysqli_fetch_row($result);
            print_r($row[0]);
            foreach($row as $col) {
                echo $col."<br>";
            }
        }

        $query = "UPDATE `users` set `present`= true, `time` = '$time',`registrar`= '$registrar' where code='$code'";
        if ($result = mysqli_query($db, $query)) {
            echo $code." marked present";
        } else {
            echo mysqli_error($db);
            echo "no user with event code ".$code;
        }
    }
    else if (isset($_POST['revert'])) {
        $code = $_POST['code'];

        date_default_timezone_set("Asia/Kolkata");
        $time = date('Y-m-d H:i:s');
        
        $query = "UPDATE `users` set `present`= false, `time` = '$time' where code='$code'";
        
        if ($result = mysqli_query($db, $query)) {
            echo $code." marked absent";
        } else {
            echo mysqli_error($db);
            echo "no user with event code ".$code;
        }
    }
}
?>