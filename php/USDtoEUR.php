$fichier = 'http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';

$xml = simplexml_load_file($fichier);

print_r($xml);
