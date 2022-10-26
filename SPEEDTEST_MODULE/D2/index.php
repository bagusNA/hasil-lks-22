<?php
$file = file_get_contents('result.json');
$json = json_decode($file, true);

$wordCount = [];
$specialChars = ['.', ',', '?', '!'];
$totalMessageSent = 0;
$totalMessageReceived = 0;

foreach ($json['messages'] as $message) {
    if ($message['from'] === "Budi")
        $totalMessageSent++;
    else if ($message['from'] === "Bot")
        $totalMessageReceived++;

    $str = str_replace($specialChars, '', $message['text']);

    $words = explode(' ', $str);

    foreach ($words as $word) {
        if (!isset($wordCount[$word])) {
            $wordCount[$word] = 1;
        } else {
            $wordCount[$word]++;
        }
    }
}

var_dump($wordCount);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>Total messages sent: <?= $totalMessageSent ?></li>
        <li>Total messages received: <?= $totalMessageReceived ?></li>
    </ul>
</body>
</html>