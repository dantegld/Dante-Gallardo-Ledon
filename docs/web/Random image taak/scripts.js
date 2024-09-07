document.addEventListener("DOMContentLoaded", function () {


  // voer code uit als je op de knop klikt
  document.getElementById("toonVerhaal").addEventListener("click", function () {

    // test of de knop werkt
    console.log('Toon verhaal');

    // verwijder en voeg de .verborgen class toe  
    document.getElementById("formulier").classList.add("verborgen");
    document.getElementById("toonVerhaal").classList.add("verborgen");
    document.getElementById("verhaal").classList.remove("verborgen");
    document.getElementById("randomImage").classList.remove("verborgen");

    let name1 = document.getElementById("name2").value;
    console.log(name);
    document.getElementById("name").innerHTML = name1;


    let animalName = document.querySelector('input[name="enemy"]:checked').value;
    console.log(animalName);
    document.getElementById("animalName").innerHTML = animalName;

    // welke checkbox button opties zijn er gekozen?
    let check1V = document.getElementById('characteristic1').value
    let check1 = document.getElementById('characteristic1').checked
    let check2V = document.getElementById('characteristic2').value
    let check2 = document.getElementById('characteristic2').checked



    if (check1 && check2) {
      document.getElementById("vibrant").innerHTML = check1V + " and " + check2V + ", ";
    }else if (check1) {
      document.getElementById("vibrant").innerHTML = check1V + ", ";
    }else if (check2){
      document.getElementById("vibrant").innerHTML = check2V + ", ";
    }
        
        
    });





  var randomWords = ["warm", "cold", "snowy", "cozy", "small"];

  var chosenWord = Math.floor(Math.random() * randomWords.length);

  document.getElementById("warmth").innerHTML = randomWords[chosenWord];




  var randomWords = ["sparkling crystals", "a waterfall", "a lake", "a river"];

  var chosenWord = Math.floor(Math.random() * randomWords.length);

  document.getElementById("clearing").innerHTML = randomWords[chosenWord];


  var randomWords = ["owl", "turtle", "cat", "dog", "rat"];

  var chosenWord = Math.floor(Math.random() * randomWords.length);

  document.getElementById("animal").innerHTML = randomWords[chosenWord];



  var imgs = [
    "img/img1.png",
    "img/img2.jpg",
    "img/img3.png"];

  var randomNumber = Math.floor(Math.random() * imgs.length);
  var randomImage = imgs[randomNumber];

  document.getElementById("randomImage").src = randomImage;

  const colors1 = ['red', 'blue', 'green', 'purple'];
  const element1 = document.querySelector('.random-styling1');
  const randomColor1 = colors1[Math.floor(Math.random() * colors1.length)];

  element1.style.color = randomColor1;

  const colors2 = ['red', 'blue', 'green', 'purple'];
  const element2 = document.querySelector('.random-styling2');
  const randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];

  element2.style.color = randomColor2;




  let number = Math.floor(Math.random() * 10);

  while (number == 0 || number == 1) {
    number = Math.floor(Math.random() * 10);
  }

  document.getElementById("number").innerHTML = number

  let place = "forest";
  document.getElementById("place").innerHTML = place

  console.log('Script werkt!');
})


