
$myfile = fopen("t.txt", "w") or die("Unable to open file!");
$txt = $_POST["name"];
echo "$txt";
fwrite($myfile, $txt);
fclose($myfile);
