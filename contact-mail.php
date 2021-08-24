<?php 
	//Принимаем постовые данные	
	$name = $_POST['R_name'];
	$email = $_POST['R_email'];
	//Тут указываем на какой ящик посылать письмо
	$to = "yyvan73@yandex.ru";
	//Далее идет тема и само сообщение
	// Тема письма
	$subject = "ЗАЯВКА";
	// Сообщение письма
	$message = "
	
	Имя: ".htmlspecialchars($R_name)."
	Почта: ".htmlspecialchars($R_email);
	// Отправляем письмо при помощи функции mail();
	$headers = "From: Set Iset <set-iset@set-iset.ru>\r\n Content-type: Request; charset=UTF-8 \r\n";
	mail ($to, $subject, $message, $headers);
	// Перенаправляем человека на страницу благодарности и завершаем скрипт
	exit();
 ?>