const mots = ['policier', 'ecriture', 'developper', 'poulet', 'bresil', 'japon', 'formation', 'architecture', 'princier', 'agence'];

const motTrouver = document.getElementById('motAtrouver');
const nouveauMot = document.getElementById('newMot');
const messageKo = document.getElementById('motPerdu');
const messageTrouver = document.getElementById('motTrouver');

// selection du mot aléatoire
let motSelectionne = mots[Math.floor(Math.random() * mots.length)];
console.log (motSelectionne);
const bonnesLettresTab = [];
const mauvaisesLettresTab = [];

function affichageMot(){
    mots.innerText = `
        ${motSelectionne}
    `
}

// function affichageMot()




// creation d'une zone de lettre 
// const lettres 
// nombre de tenative initiale
let tentatative = 11;
// mots 


// verification des lettres
lettre = '';
alphabet = 'abcdefghijklmnopqrstuvwxyz';
function underscore(mots) {
    let underScore = [];
    for (let i = 0; i < mot.length; i++) {
        underScore[i] = '_';
    }
    return underScore;
}
input
