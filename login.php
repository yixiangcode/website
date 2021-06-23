<?PHP
	$email = $_POST['email'];
	$password = $_POST['password'];

	$servername = "localhost";
	$username = "id17019361_data";
	$passw = "Data7654321.";
	$dbname = "id17019361_database";
	$con = mysqli_connect($servername,$username,$passw,$dbname);

	//to prevent from mysqli injection  
	$email = stripcslashes($email);  
	$password = stripcslashes($password);  
	$email = mysqli_real_escape_string($con, $email);  
	$password = mysqli_real_escape_string($con, $password);  
  
	$sql = "SELECT * FROM `Registration` WHERE `email`='$email' and `password`='$password';";  
	//echo $email;
	$result = mysqli_query($con, $sql);  
	$row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
	$count = mysqli_num_rows($result);  
	  
	if($count == 1){  
		//echo "<h1><center> Login successful </center></h1>";  
		//file_get_contents("comment.php");
		header("location: comment.php");
	}  
	else{  
		echo "<h1> Login failed. Invalid username or password.</h1>";  
		header("location: chat.php?error=1");
	}     
?>