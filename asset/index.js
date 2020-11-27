//1. Récuperer l'element <canvas> du DOM 
let canvas = document.querySelector("#gameZone"); //ou document.getElementById("gameZone")

//2. Appeler le contexte(=les axes utilisés pour dessiner) de l'element <canvas> 
let contexte = canvas.getContext('2d');

//3. Initialiser un SetInterval (permet que la fonction principale soit toujours verifiée toutes les un certain nombre de millisecondes)
let RunTheGame = setInterval(game, 100);
const grid = 20;
const snake = {
    tete: {
        largeur: grid,
        hauteur: grid,
    },
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    deplacement: {
        x: 0,
        y: 0
    },

    corps: [],
    taille: 3,

    afficher: () => {
        contexte.clearRect(0, 0, canvas.width, canvas.height);
        contexte.fillStyle = "black"
        for(let i of snake.corps){
            contexte.fillRect(i.x, i.y, snake.tete.largeur, snake.tete.hauteur);
        }
    },

    deplacer: () => {
        snake.position.x += snake.deplacement.x * snake.tete.largeur;
        snake.position.y += snake.deplacement.y * snake.tete.hauteur;
        let coordonees = {
            x: snake.position.x,
            y: snake.position.y,
        };
        snake.corps.push(coordonees)

        while(snake.corps.length > snake.taille) {
            snake.corps.shift();
        };

        console.log(snake.corps)

    }
}

const pomme = {
    dimension: {
        rayon: grid / 2,
    },
    position: {
        x: (Math.trunc(Math.random() * (canvas.width / grid)) * grid), //trunc retire les virgules après le chiffre, sans l'arrondir.
        y: (Math.trunc(Math.random() * (canvas.height / grid)) * grid),
    },

    afficher: () => {
        contexte.beginPath();
        contexte.arc(pomme.position.x + pomme.dimension.rayon, pomme.position.y + pomme.dimension.rayon, pomme.dimension.rayon, 0, Math.PI * 2);
        contexte.fillStyle = "green";
        contexte.fill();
        contexte.closePath();
    }
}
//4. Créer la fonction principale du jeu: game()
function game() {
    //Déplacer le snake
    snake.afficher();

    snake.deplacer();
    // Afficher la pomme
    pomme.afficher();
}
const clavier = (touche) => {
    switch (touche.key) {
        case "ArrowRight":
            if (snake.deplacement.x === -1) {
                break;
            }
            snake.deplacement.x = 1,
                snake.deplacement.y = 0
            break;
        case "ArrowLeft":
            if (snake.deplacement.x === 1) {
                break;
            }
            snake.deplacement.x = -1,
                snake.deplacement.y = 0
            break;
        case "ArrowUp":
            if (snake.deplacement.y === 1) {
                break;
            }
            snake.deplacement.x = 0,
                snake.deplacement.y = -1
            break;
        case "ArrowDown":
            if (snake.deplacement.y === -1) {
                break;
            }
            snake.deplacement.x = 0,
                snake.deplacement.y = 1
            break;
        case " ":
            snake.deplacement.x = 0,
                snake.deplacement.y = 0
            break;
            //Si une de ces touches est utilisée, appliquer
    };
}
window.addEventListener("keydown", clavier);
//5. Définir l'object Snake: const snake={}

//6. Afficher notre Snake dans le <canvas>: contexte.fillRect(x,y, width, height) & contexte.fillStyle="color"

//7. Faire bouger le Snake: snake.position.x++ 

//8. Effacer sa trace: contexte.clearRect(x,y, width, height)

//9. Manipuler le Snake avec les touches du clavier (keycode)

//10. Empecher le Snake de faire demi-tour

//11. Définir le corps du Snake: const Snake={corps:[]} 

//12. Changer le mode de déplacement du Snake

//13. Adapter la vitesse du Snake: setInterval(game, snake.vitesse)

//14. Diviser le corps du Snake en section

//15. Définir l'object pomme: const pomme={}

//16. Dans la fnction game définit plus haut, vérifier s'il y a des collisions entre la pomme et le Snake

//17. Adapter le comportement du Snake et de la pomme s'il y a collisions

//18. Afficher un score.