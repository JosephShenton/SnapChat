<?php 
	/**
	* PDO DB Class Written By Joseph Shenton!
	* DO NOT REMOVE THIS CREDIT OR A DMCA TAKEDOWN REQUEST WILL BE SENT
	* (https://twitter.com/JosephShenton or https://joejoe.me)
	*/
	class DB {
		private static function connect() {
			$pdo = new PDO('mysql:host=127.0.0.1;dbname=snapchat;charset=utf8', 'root', '');
			if (!$pdo) {
				echo "Failed";
			}
			$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			return $pdo;
		}
		public static function query($query, $params = array()) {
			$statement = self::connect()->prepare($query);
			$statement->execute($params);

			if (explode(' ', $query)[0] == 'SELECT') {
				$data = $statement->fetchAll();
				return $data;
			}
		}
	}
?>