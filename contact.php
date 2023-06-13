<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacter</title>
    <link rel="stylesheet" href="./asset/css/contact.css">
    <link rel="stylesheet" href="./asset/css/media.css">
    <link rel="stylesheet" href="./asset/css/reset.css">
    <link rel="stylesheet" href="./asset/css/nav_footer.css">
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a href="./index.html">Accueil</a></li>
                <li><a href="#">Portfolio</a></li>
                <a href="#">
                    <img src="./asset/img/Logo.png" alt="Logo" class="logo">
                </a>
                <li><a href="./about.html">A propos</a></li>
                <li><a href="./contact.html">Contacter</a></li>
            </ul>
            <div class="burger&">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
    <main>
        <h1>Me contacter</h1>
        <form method="post">
            <div class="formContainer">
                <div class="formItem">
                    <input type="text" name="nom" placeholder="Entrez votre nom..." required pattern="[A-Za-z-]{3,30}">
                    <label>Nom</label>
                </div>
                <div class="formItem">
                    <input type="text" name="prenom" placeholder="Entrez votre prénom..." required
                        pattern="[A-Za-z-]{3,30}">
                    <label>Prénom</label>
                </div>
                <div class="formItem">
                    <input type="email" name="email" placeholder="Entrez votre email..." required
                        pattern="[A-Za-z0-9-._]+@[A-Za-z]+\.[A-Za-z]{2,}">
                    <label>Email</label>
                </div>
                <div class="formItem">
                    <input type="number" name="numero" placeholder="Entrez votre numéro de téléphone...">
                    <label>Numéro de téléphone</label>
                </div>
                <div class="formItem">
                    <input type="text" name="objet" placeholder="Entrez l'objet de votre message..." required>
                    <label>Objet</label>
                </div>
                <div class="formItem radio">
                    <div class="radioContainer">
                        <label for="firstRadio" class="radioLabel">Personnel</label>
                        <input type="radio" name="A but" class="radioButton" id="firstRadio">
                    </div>

                    <div class="radioContainer">
                        <label for="secondRadio" class="radioLabel">Professionnel</label>
                        <input type="radio" name="A but" class="radioButton" id="secondRadio">
                    </div>

                </div>
            </div>
            <div class="formItem textareaContainer">
                <label>Message</label>
                <textarea name="message" cols="30" rows="3" placeholder="Ecrivez votre message..." required
                    class="textarea"></textarea>
            </div>

            <button type="submit">Envoyer</button>
        </form>

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

    $retour = mail("vipe.entreprise@gmail.com", $_POST["objet"], $message, "From:contact@exemplesite.fr" . "\r\n" . "Reply-to:" . $_POST["email"]);
    if ($retour) {
        echo "<p> l'email a bien été envoyé.</p>";
        }
    }
?>

    </main>
    <footer>
        <div class="footerLinks">
            <a href="https://github.com/EnzoVescovali" target="blank"><i class="fa-brands fa-github-alt"></i></a>
            <a href="https://www.behance.net/vipedzn" target="blank"><i class="fa-brands fa-behance"></i></a>
            <a href="https://www.linkedin.com/in/enzovescovali/" target="_blank"><i
                    class="fa-brands fa-linkedin-in"></i></a>
        </div>
        <div class="copyright">Copyright &copy; 2023 Vipe | All Rights Reserved</div>
    </footer>

    <script src="https://kit.fontawesome.com/891e7b3be6.js" crossorigin="anonymous"></script>
</body>

</html>