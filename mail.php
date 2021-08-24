<?php 
	//Принимаем постовые данные	
	$name = $_POST['C_name'];
	$email = $_POST['C_email'];
	$message = $_POST['C_message'];
	//Тут указываем на какой ящик посылать письмо
	$to = "yyvan73@yandex.ru";
	//Далее идет тема и само сообщение
	// Тема письма
	$subject = "ЗАЯВКА";
	// Сообщение письма
	$message = "
	
	Имя: ".htmlspecialchars($C_name)."
	Почта: ".htmlspecialchars($C_email)."
	Сообщение: ".htmlspecialchars($C_message);
	// Отправляем письмо при помощи функции mail();
	$headers = "From: Set Iset <set-iset@set-iset.ru>\r\n Content-type: Request; charset=UTF-8 \r\n";
	mail ($to, $subject, $message, $headers);
	// Перенаправляем человека на страницу благодарности и завершаем скрипт
	exit();
 ?>