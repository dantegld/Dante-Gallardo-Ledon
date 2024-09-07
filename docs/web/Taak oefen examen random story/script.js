document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav ul');


    document.getElementById("startButton").addEventListener("click", function () {
        document.getElementById("gameForm").classList.add("verborgen");
        document.getElementById("enemy").classList.remove("verborgen");
        document.getElementById("hero").classList.remove("verborgen");

        //hero name
        let heroName = document.getElementById("heroName").value;
        document.getElementById("heroName1").innerHTML = heroName;

        //hero class
        let heroClass = document.querySelector('input[name="class"]:checked').value;
        console.log(heroClass);
        document.getElementById("heroClass").innerHTML = heroClass;

        //hero health
        if (heroClass == "Barbarian") {
            document.getElementById("heroHealth").innerHTML = 60;
            document.getElementById("heroAttack").innerHTML = 70;
        }else if (heroClass == "Paladin") {
            document.getElementById("heroHealth").innerHTML = 130;
            document.getElementById("heroAttack").innerHTML = 30;
        }else if (heroClass == "Medic") {
            document.getElementById("heroHealth").innerHTML = 100;
            document.getElementById("heroAttack").innerHTML = 50;
        }


    });

    //Random Enemy Name
    var randomEnemy = ["Jamal Smith", "Henry Debakker", "Noureddine Tahrioui", "Nick Diddens", "Mnr. Maes"];
    var chosenEnemy = Math.floor(Math.random() * randomEnemy.length);
    document.getElementById("enemyName").innerHTML = randomEnemy[chosenEnemy];

    //Random Enemy image
    var enemyImages = {
        "Jamal Smith": "img/jamal.jpg",
        "Henry Debakker": "img/henry.jpg",
        "Noureddine Tahrioui": "img/tahrioui.png",
        "Nick Diddens": "img/diddens.jpg",
        "Mnr. Maes": "img/maes.png"
    };

    var enemyImage = enemyImages[randomEnemy[chosenEnemy]];
    document.getElementById("enemyImage").src = enemyImage;

    //Random Enemy Health
    var randomHealth = Math.floor(Math.random() * 100);
    document.getElementById("health").innerHTML = randomHealth;

    //Random Enemy Damage
    var randomDamage = Math.floor(Math.random() * 10);
    document.getElementById("attack").innerHTML = randomDamage;

    //Enemy Height
    var enemyHeight = 0;
    switch (randomEnemy[chosenEnemy]) {
        case "Jamal Smith":
            enemyHeight = 200;
            break;
        case "Henry Debakker":
            enemyHeight = 170;
            break;
        case "Noureddine Tahrioui":
            enemyHeight = 150;
            break;
        case "Nick Diddens":
            enemyHeight = 180;
            break;
        case "Mnr. Maes":
            enemyHeight = 189;
            break;
        default:
            enemyHeight = 0;
            break;
    }
    document.getElementById("height").innerHTML = enemyHeight;


  



});