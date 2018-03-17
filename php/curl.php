<?php

$url = 'http://miner.cryptobara.com/14dC1sgEgHzUshMhTP4hzVPEdpf4Twh79L/stats/';
$timeout = 10;

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);

if (preg_match('`^https://`i', $url))
{
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
}

curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Récupération du contenu retourné par la requête
$page_content = curl_exec($ch);

curl_close($ch);
$balance = explode('"',$page_content);
echo $balance[3];
?> 