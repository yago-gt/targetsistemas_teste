<?php
$in = readline();
$out = "";

for ($i = strlen($in) - 1; $i >= 0; --$i) {
    $out .= $in[$i];
}

echo("String original: '$in'\n");
echo("String invertida: '$out'\n");

?>