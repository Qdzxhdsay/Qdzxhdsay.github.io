<?php
if (isset($_POST['submit'])){
    $name =  $_POST['name'];
    $phone =  $_POST['phone'];
    $message =  $_POST['message'];

    $headerMail = "neworder@icecubes.ru";

    $subject = "Заказ с сайта IceCube";
    $mailTo = "lebedevegor.ekb@mail.ru, IceCubescomp@mail.ru";
    $headers = "From: ". $headerMail;
    $txt = 
    "
    Имя: $name
    
    Телефон: $phone
    
    Сообщение: $message";
    
    mail($mailTo,$subject,$txt,$headers);
    header("Location: succcess.html");
}


?>