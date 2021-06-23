<?PHP
error_reporting(0);
	/*
	if(isset($_POST['submit'])){
	}
	*/
	$name = $_POST['name'];
	$comment = $_POST['comment'];
	$servername = "localhost";
	$username = "id13022081_comment";
	$passw = "Data7654321.";
	$dbname = "id13022081_chat";
    $con = mysqli_connect($servername,$username,$passw,$dbname);
	mysqli_connect($servername,$username,$passw,$dbname);
	if(!empty($name)){
		$sql = "INSERT INTO `Comment`(`name`, `comment`) VALUES('$name','$comment');";
	}
    $result = mysqli_query($con, $sql);  
    $comment_length = strlen($comment);

    if($comment_length > 100){
        header("location: comment.php?error=1");
    }else{
		header("location: comment.php");
        mysqli_query($con,"SELECT * FROM `Comment` WHERE `name`='$name' and `comment`='$comment';");
    }

    $records = mysqli_query($con,"SELECT * FROM `Comment`;");

    //$data = mysqli_fetch_array($records);

	if(!$con)
	{
		die("Error : ".mysqli_connect_error());
	}
	/*写入评论
	if(mysqli_query($con,$sql))
	{
		//echo "Registration Done Successfully...";
        //header("location: comment.php");
	}
	else
	{
		echo "Something went Wrong...";
	}
	*/
	mysqli_close($con);
?>