<?php

if (isset($_POST['submit'])){
    $phone =  $_POST['phone'];
    $headerMail = "podgotovka@ege.sitsh.ru";

    $subject = "Заявка с сайта подготовка к ЕГЭ-СИТШ";
    $mailTo = "testsitsh@mail.ru";
    $headers = "From: ". $headerMail;
    $txt = "Телефон: ".$phone;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: succcess.html");
}

?>
