<?php
$data = json_decode(file_get_contents('data.json'), true);

// A beérkező adatok a POST kérésből
$amount = $_POST['amount'];
$description = $_POST['description'];

// Frissítsd a tranzakciók listáját
$data['transactions'][] = array(
    'amount' => $amount,
    'description' => $description
);

// Frissítsd az egyenleget
$data['balance'] += $amount;
echo "Hello, world!";

// Írd vissza a frissített adatokat a data.json fájlba
file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));

echo "Data updated successfully";
?>
