<!DOCTYPE html>
<html>
<head>
    <title>About | YX无名网</title>
    <link rel="shortcut icon" href="./Image/Logo.png">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Geo&display=swap" rel="stylesheet">
    <div class="mainImage">
        <br>
        <h2>Comment</h2>
        <form action="chat.php" method="POST">
            <input type="text" name="name" placeholder="Enter Your Name"><br><!-- value="" 是真正写在格子内-->
            <textarea name="comment" cols="50" rows="5" placeholder="Enter Your Comment"></textarea>
            <br>
            <input type="submit" value="Comment"><!--onclick='return false'-->
        </form>
        
        <!--
        <br>
        <a href="dlt.php" target="_black" class="effectFrame">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Clear
        </a>
        -->
        <br>

        <?php
        include 'chat.php';
        while($data = mysqli_fetch_array($records)){
            $n = $data['name'];
            $d = $data['comment'];
            echo "$n : $d<br>";
        }
        ?>
        <div style="padding-bottom:1000px"></div>
    </div>
    

</head>


</html>
