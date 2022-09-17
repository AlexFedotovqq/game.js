const ghost = document.getElementById("ghost");
const fire = document.getElementById("fire");

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if (ghost.classList != "jump") {
        ghost.classList.add("jump")
    }
    setTimeout(function() {
        ghost.classList.remove("jump")
    },300)
}

let isAlive = setInterval (function() {
     let ghostTop = parseInt(window.getComputedStyle(ghost).getPropertyValue("top"));
     let fireLeft = parseInt(window.getComputedStyle(fire).getPropertyValue("left"));

     if (fireLeft < 50 && fireLeft > 0 && ghostTop >= 140) {
        alert("GAME OVER!!!!")
     }
}, 10)