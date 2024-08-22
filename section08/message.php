<?php

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $username = $_POST['username'];
    $comment = $_POST['comment'];
    if (!empty($username) && !empty($comment)) {
        echo "<p>Hi, $username.</p>";

    } else {
        echo "<p>Fill out the form!</p>";
    }
}


?>