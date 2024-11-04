var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
var jumps = 0;

function jump() {
    if (jumps < 2) {
        character.classList.add("animate");
        setTimeout(function() {
            character.classList.remove("animate");
        }, 300);
        jumps++;
        setTimeout(() => jumps--, 300); // Allows double jump with a delay
    }
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1.5s infinite linear"; // Increased speed
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
