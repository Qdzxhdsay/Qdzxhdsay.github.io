<?
       $mydate = $_POST['deadline'];
    $mydate = date('Y-m-d H:i:s', strtotime(str_replace('-', '/', $mydate)));
    $todaydate = date("y.m.d");


    $db = new mysqli('localhost', 'u8787', 'yURTVNHV3LHPf9E', 'u8787_gsemHelp');
    $db->set_charset("utf8");
    $orderStmt = $db->prepare('INSERT INTO newOrders (name, phone, message, priority, deadline, todaydate) VALUES (?, ?, ?, ?, ?, ?)');
    $orderStmt->bind_param('sdsdss', $_POST['name'], $_POST['phone'], $_POST['message'], $_POST['priority'], $mydate, $todaydate);
    $orderStmt->execute();


    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $priority = $_POST['priority'];


    $headerMail = "neworder@gsem.info";

    $subject = "Заявка на техническое обслуживание";
    $mailTo = "arefev.anton.mailbox@gmail.com, devgsem@gmail.com";
    $headers = "From: " . $headerMail;
    $txt =
        "
    Имя: $name
    
    Телефон: $phone 
    
    Сообщение: $message
    
    Приоритет: $priority
    
    Дедлайн: $mydate
    
    Дата отправки: $todaydate";

    mail($mailTo, $subject, $txt, $headers);
?>