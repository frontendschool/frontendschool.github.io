<?php 
	
	ini_set('error_reporting', E_ALL);
	$token = '205541776:AAFUWR__WEzx7NIh2J7B0vIH6tcsIaiGpvU';
	$site = 'https://api.telegram.org/bot'.$token;
	$update = file_get_contents('php://input');
	$update = json_decode($update, TRUE);
	$chat_id = $update["message"]["chat"]["id"];
	$message = $update["message"]["text"];

	switch($message) {
		case "/hi": 
			sendMessage($chat_id, "Hi!");
			break;
		default: 
			sendMessage($chat_id, "Unknown command");
	}

	function send_message($chat_id, $message) {
		$url = $GLOBALS[site]."/sendMessage?chat_id=".$chat_id."&text=".urlencode($message);
		file_get_contents($url);
	}


 ?>
