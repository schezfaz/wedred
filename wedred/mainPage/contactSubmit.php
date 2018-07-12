<?php
	include 'connect.php';
	if(isset($_POST["submitContact"])){
		$name = $_POST['cname'];
		$email = $_POST['cemail'];
		$phone = $_POST['cphone'];
		$message = $_POST['cmessage'];

		$sql = "INSERT into contactform (cname, cemail, cphone, cmessage) VALUES ('$name', '$email','$phone','$message')";
        $result = mysqli_query($con,$sql);
        
        header("refresh:0.3;url=index.php");

	}
?>