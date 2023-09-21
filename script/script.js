const mots = ['policier', 'ecriture', 'developper', 'poulet', 'bresil', 'japon', 'formation', 'architecture', 'princier', 'agence'];

const motTrouver = document.getElementById('motAtrouver');
const nouveauMot = document.getElementById('newMot');
const messageKo = document.getElementById('motPerdu');
const messageTrouver = document.getElementById('motTrouver');
const mauvaisLettres = document.getElementById('historique');
const notification = document.getElementById('notification');
const messageFinal = document.getElementById('messageBravo');

const figurePartie =  document.querySelectorAll('.tentative');

let chancesRestantes = 6;
let jeuTermine = false; 

// selection du mot
let motSelectionne = mots[Math.floor(Math.random() * mots.length)];
const bonnesLettresTab = [];
const mauvaisesLettresTab = [];
console.log(motEl);

// Fonction pour afficher le mot caché.
function affichageMot() {
  motTrouver.innerHTML = motSelectionne
    .split('')
    .map(lettre =>
      `<span class="lettre">
        ${bonnesLettresTab.includes(lettre) ? lettre : '_'}
      </span>`
    )
    .join('');

  const motInterne = motTrouver.innerText.replace(/\n/g, '');

  console.log(motTrouver.innerText, motInterne);

  if (motInterne === motSelectionne) {
    messageFinal.innerText = 'Bravo tu as trouvé le mot!!';
    popup.style.display = 'flex';
  }
}

// mauvaises Lettres
function chargementMauvaisesLettres() {
  // Affichage des mauvaises lettres
  mauvaisLettres.innerHTML = `
      ${mauvaisesLettresTab.map(lettre => `<span> ${lettre} </span>`)}
  `;
}

// afficher le bonhomme
function affichageBonhomme() {
  figurePartie.forEach((partie, index) => {
    if (index < (6 - chancesRestantes)) {
      partie.style.display = 'block'; 
    } else {
      partie.style.display = 'none';
    }
  });
}
// figurePartie.forEach(
//     (partie)
// )

// verif si perdu


// gestion des notifications
 function affichageNotif(){
    notification.classList.add('afficher')

    setTimeout(() => {
        notification.classList.remove('afficher')
 }, 2000);
}
  
//event listener
window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const lettre = e.key;


    if (motSelectionne.includes(lettre)) {
      bonnesLettresTab.push(lettre);
      affichageMot();
    } else {
      if (!mauvaisesLettresTab.includes(lettre)) {
        mauvaisesLettresTab.push(lettre);
        chargementMauvaisesLettres();
        chancesRestantes--; 
        verifSiPerdu(); 
        affichageBonhomme();
      }
    }
  } 
  else {
    if (!mauvaisesLettresTab.includes(lettre)) {
      mauvaisesLettresTab.push(lettre);
      chargementMauvaisesLettres(); 
    }
  }
});

