<?php

function evenOrOdd($number) {
    if ($number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Menguji fungsi
echo evenOrOdd(1) . PHP_EOL;
echo evenOrOdd(2) . PHP_EOL;

?>
