<?php
$con = mysqli_connect("localhost","id13022081_comment","Data7654321.","id13022081_chat");
mysqli_query($con, "DELETE FROM `Comment`;");
header("location: comment.php");
?>