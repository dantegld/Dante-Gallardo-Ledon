<?php
session_start();

// Woordenschat array
$woorden = [
    'vierkant' => 'carré(e)',
    'met stippen' => 'à pois',
    'rechthoekig' => 'rectangulaire',
    'geruit' => 'à carreaux',
    'rond' => 'rond(e)',
    'gestreept' => 'à rayures',
    'ovaal' => 'ovale',
    'bedrukt' => 'imprimé(e)',
    'driehoekig' => 'triangulaire',
    'met bloemenmotief' => 'à fleurs',
    'effen' => 'uni(e)',
    'het zilver' => 'l’argent (m)',
    'modieus' => 'à la mode',
    'het hout' => 'le bois',
    'hip' => 'branché',
    'het karton' => 'le carton',
    'stijlvol' => 'chic (inv.)',
    'het katoen' => 'le coton',
    'comfortabel' => 'confortable',
    'het leer' => 'le cuir',
    'ouderwets' => 'démodé(e)',
    'het linnen' => 'le lin',
    'beschikbaar' => 'disponible',
    'het metaal' => 'le métal',
    'hard' => 'dur(e)',
    'het goud' => 'l’or (m)',
    'breekbaar' => 'fragile',
    'het papier' => 'le papier',
    'praktisch' => 'pratique',
    'het plastic' => 'le plastique',
    'nuttig' => 'utile',
    'de stof' => 'le tissu',
    'stevig' => 'solide',
    'het glas' => 'le verre',
    'de wol' => 'la laine',
    'de kunststof' => 'la matière synthétique',
    'de steen' => 'la pierre',
    'helder, levendig' => 'vif, vive',
    'de zijde' => 'la soie',
    'licht' => 'clair(e)',
    'donker' => 'foncé(e)',
];

// Kies een willekeurig woord als huidige oefening
if (!isset($_SESSION['huidig_woord'])) {
    $sleutels = array_keys($woorden);
    $_SESSION['huidig_woord'] = $sleutels[array_rand($sleutels)];
}

// Verwerk het ingediende antwoord
$feedback = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $antwoord = strtolower(trim($_POST['antwoord']));
    $correct_antwoord = strtolower($woorden[$_SESSION['huidig_woord']]);

    if ($antwoord === $correct_antwoord) {
        $feedback = 'Correct!';
        // Kies een nieuw woord
        $sleutels = array_keys($woorden);
        $_SESSION['huidig_woord'] = $sleutels[array_rand($sleutels)];
    } else {
        $feedback = 'Fout, het juiste antwoord was: ' . $woorden[$_SESSION['huidig_woord']];
    }
}
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Franse Woordenschat Oefenen</title>
</head>
<body>
    <h1>Franse Woordenschat Oefenen</h1>
    <p>Vertaal het volgende Nederlandse woord naar het Frans:</p>
    <h2><?php echo htmlspecialchars($_SESSION['huidig_woord']); ?></h2>
    <form method="post">
        <input type="text" name="antwoord" required>
        <button type="submit">Verzenden</button>
    </form>
    <p><?php echo $feedback; ?></p>
</body>
</html>