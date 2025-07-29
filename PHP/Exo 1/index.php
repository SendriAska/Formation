<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="GET">
        <input type="number" name="nb" id="nb">
        <input type="number" name="nbTwo" id="nbTwo">
        <input type="submit" value="Envoyer" name="submit">
    </form>
</body>
</html>

<?php
    if (isset($_GET["submit"]) && !empty($_GET["nb"]) && !empty($_GET["nbTwo"])) {
        $somme = $_GET["nb"] + $_GET["nbTwo"];
        echo "La somme des deux valeurs est de $somme";
    }
    
