<?php
$error = $_REQUEST['error'] ?? 'none';

?>
<div class="centered-full-page">
    <form  method="post" action="index.php?page=creation">
        <?php if($error == "username_too_short") : ?>
            <p>
                ton username est trop court ! C'est 3 le minimum
            </p>
        <?php endif; ?>
        <?php if($error == "username_too_long") : ?>
            <p>
                ton username est trop long ! C'est 30 le maximum
            </p>
        <?php endif; ?>
        <?php if($error == "username_forbidden_char") : //pas sur que sa marche!!!?>
            <p>
                ton username contient des charactères interdit !!!
        <?php endif; ?>
        <label >Pseudo</label>
        <input type="text" placeholder="pseudo du joueur" name="username" required>
        <input type="submit" value="create">
    </form>
</div>