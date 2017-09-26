<?php 
	include 'db.php';
	if (isset($_POST)) {
		if (isset($_POST['username']) && !empty($_POST['username'])) {
			$username = htmlspecialchars($_POST['username'], ENT_QUOTES);
			if (DB::query('SELECT * FROM users WHERE username=:username', array(':username' => $username))) {
				if (isset($_POST['password']) && !empty($_POST['password'])) {
					$hash = DB::query('SELECT * FROM users WHERE username=:username', array(':username' => $username))[0]['password'];
					if (password_verify($_POST['password'], $hash)) {
						echo "Logged In.";
					} else {
						echo "Password Incorrect.";
					}
				} else {
					echo "Please fill out password field.";
				}
			} else {
				echo "Username not registered.";
			}
		} else {
			echo "Please fill out username field.";
		}
	} else {
		echo "Unauthorized";
	}
?>