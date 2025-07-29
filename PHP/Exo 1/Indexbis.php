<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="#" method="GET">
        <label for="nb">Prix</label>
        <input type="number" name="nb" step="any" id="nb">
        <label for="nbTwo">Quantité</label>
        <input type="number" name="nbTwo" id="nbTwo">
        <label for="nbThree">TVA</label>
        <input type="number" name="nbThree" step="any" id="nbThree">
        <input type="submit" value="Envoyer" name="submit">
    </form>
</body>

</html>

<?php
if (isset($_GET["submit"]) && !is_numeric($_GET["nb"]) && !is_numeric($_GET["nbTwo"]) && !is_numeric($_GET["nbThree"])) {
    $ttc = $_GET["nb"] * $_GET["nbTwo"] * ($_GET["nbThree"] + 1);
    echo "Le format est incorrect";
}
if (isset($_GET["submit"]) && !empty($_GET["nb"]) && !empty($_GET["nbTwo"]) && !empty($_GET["nbThree"])) {
    $ttc = $_GET["nb"] * $_GET["nbTwo"] * ($_GET["nbThree"] + 1);
    echo "Le prix TTC est égal à : $ttc €";
}