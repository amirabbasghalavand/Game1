let rocket = document.getElementById("rocket");

window.onload = function () {
    setInterval(changeRocketAsset, 50);
    document.onmousemove = function (e) {
        if (e.clientX <= window.innerWidth - 100) {
            rocket.style.left = e.clientX + "px";
        }
        if (e.clientY <= window.innerHeight - 180) {
            rocket.style.top = e.clientY + "px";

        }
    }
    createEnemy();
}

function changeRocketAsset() {
    rocket.src = RocketHandler.getRocketAsset();
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let enemyInterval = null;

function createEnemy() {
    let enemy = document.createElement("img");
    enemy.src = `src/assets/enemy${getRandom(1,5)}.png`;
    enemy.className = "enemy";
    enemy.style.left = getRandom(0, window.innerWidth - 150) + "px";
    enemy.style.top = "-150px";
    document.body.appendChild(enemy);
    enemyInterval = setInterval(moveEnemy, 1, enemy);
}

function moveEnemy(enemy) {
    let position = Number(enemy.style.top.replace('px', ''));
    if (position > window.innerHeight + 100) {
        clearInterval(enemyInterval);
        enemy.remove();
        createEnemy();
    }
    enemy.style.top = (position + 2) + "px";
}