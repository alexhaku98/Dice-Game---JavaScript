var roll = document.querySelector(".roll");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".roll img");
roll.addEventListener("click", function () {
  img3.classList.add("rotate");
  rolling();
  img1.setAttribute("src", "images/dice"+ (Math.floor(Math.random() * 6) + 1) + ".png");
  img2.setAttribute("src", "images/dice"+ (Math.floor(Math.random() * 6) + 1) + ".png");
  var diceSound = new Audio("sounds/diceSound.mp3");
  diceSound.play();
})

function rolling() {
  img1.classList.add("rolling");
  img2.classList.add("rolling");
  roll.style.color = "red";
  setTimeout(function(){
    img1.classList.remove("rolling");
    img2.classList.remove("rolling");
    roll.style.color = "white";
  }, 650);
}

