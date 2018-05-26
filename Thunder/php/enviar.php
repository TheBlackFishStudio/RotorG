<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title></title>
	<link rel="stylesheet" href="">
</head>
<body style="background-color: #000000">
	<?php
	date_default_timezone_set('Etc/UTC');
	require 'class.smtp.php';
	require 'class.phpmailer.php';
	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->SMTPDebug = 2;
	$mail->Debugoutput = 'html';
	$mail->Host = 'smtp.gmail.com';
	$mail->Port = 465;
	$mail->SMTPSecure = 'ssl';
	$mail->SMTPAuth = true;
	$mail->Username = "besingular.tec@gmail.com";
	$mail->Password = "bemedia2018";

	$mail->From='besingular.tec@gmail.com';
	$mail->FromName =$_POST["nombre"];
	$mail->addReplyTo("besingular.tec@gmail.com");

	$mail->AddAddress("juan.fernandezymayan@besingular.com.ar");

	$mail->WordWrap = 50;
	$mail->IsHTML(true);
	$mail->ContentType = "text/html";
	$mail->CharSet = "UTF-8";
	$mail->Subject = "Consulta de ".$_POST["nombre"] . " enviada desde beSingular.com.ar";
	$mail->Body    = "<font face=Verdana, Arial, Helvetica, sans-serif color=#666666 size=2>
	<strong>Nombre: </strong>"  .$_POST["nombre"] ."<br>
	<strong>Apellido: </strong>" . $_POST["apellido"] . "<br>
	<strong>Asunto: </strong>" . $_POST["asunto"] . "<br>
	<strong>Consulta: </strong>" . $_POST["mensaje"] . "<br>
	</font>";

	if(!$mail->Send()) { echo "NOK";
	} else { echo "<script>location.href='../gracias.html'</script>";}
	?>
</body>
</html>
