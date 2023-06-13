<?php
if (isset($_POST["message"])){
    $message = "Ce message vous a été envoyé via la page contact du portfolio
    Nom: " . $_POST["nom"] . "
    Prénom: " . $_POST["prenom"] . "
    Email: " . $_POST["email"] . "
    numéro de téléphone: " . $_POST["numero"] . "
    A but: " . $_POST["A but"] . "
    Objet:" . $_POST["objet"] . "
    Message: " . $_POST["message"];
$retour = mail("vipe.entreprise@gmail.com", $_POST["objet"], $_message, "From:contact@exemplesite.fr" . "\r\n" . "Reply-to:" . $_POST["email"]);
if ($retour) {
    echo " <p> l'email a bien été envoyé. ";
    }
}