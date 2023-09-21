const motEl = document.getElementById('mot');
const mauvaiseslettres = document.getElementById('mauvaises-lettres');
const rejouerBtn = document.getElementById('play-bouton');
const popup = document.getElementById('popup-contenant');
const notification = document.getElementsByClassName('notification-contenant');
const messageFinal = document.getElementById('message-final');

const figurePartie =  document.querySelectorAll('.figure-partie');

const mots = ['policier', 'ecriture', 'developper', 'poulet', 'bresil', 'japon', 'formation', 'architecture', 'princier', 'agence'];

//selectionner un mot pour jouer 
let motSelectionne = mots[Math.floor(Math.random() * mots.length)];

const bonnesLettresArr = [];
const mauvaisesLettresArr = [];

console.log (motSelectionne);

// Fonction pour afficher le mot caché.
function afficherMot() {
    motEl.innerHTML = `${motSelectionne
      .split('')
      .map(lettre =>
        `<span class="lettre">
          ${bonnesLettresArr.includes(lettre) ? lettre : ''}
        </span>`
      )
      .join('')}`;

      const motInterne = motEl.innerText.replace(/\n/g, '');
 
    //console.log(motTrouver.innerText, motInterne);
  
    if (motInterne === motSelectionne) {
      messageFinal.innerText = 'Bravo tu as trouvé le mot!!';
      popup.style.display = 'flex';
    }
  }


// mauvaises Lettres
function updateMauvaisesLettresEl() {
    // Affichage des mauvaises lettres
    mauvaiseslettres.innerHTML = `
        ${mauvaisesLettresArr.map(lettre => `<span> ${lettre} </span>
        `)}
    `;

    //afficher le bonhomme


    figurePartie.forEach((partie, index) => {
        const erreurs = mauvaisesLettresArr.length; 
        if(index<erreurs){
            partie.style.display='block'; 
        } else {
            partie.style.display='none'; 
        }
    })


//Vérification si on a perdu
 if(mauvaisesLettresArr.length === figurePartie.length){
    messageFinal.innerText = "Tu as perdu ! :( ";
    popup.style.display='flex';
 }
  }

// gestion des notifications
function affichageNotification(){
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
        bonnesLettresArr.push(lettre);
        afficherMot();
      } else {
        if (!bonnesLettresArr.includes(lettre)) {
          bonnesLettresArr.push(lettre);
          updateMauvaisesLettresEl();
          //chancesRestantes--; 
          //verifSiPerdu(); 
        //   affichageBonhomme();
        }
      }
    } else {
      if (!mauvaisesLettresArr.includes(lettre)) {
        mauvaisesLettresArr.push(lettre);
        updateMauvaisesLettresEl(); 
      } else {
            affichageNotification(); 
      }
    }
  });


  //Rejouer et redémarrer le jeu : 

  rejouerBtn.addEventListener('click', () =>{
    //vider les arrays
    bonnesLettresArr.splice(0); 
    mauvaisesLettresArr.splice(0);
    motSelectionne = mots[Math.floor(Math.random() * mots.length)];

    afficherMot(); 
    updateMauvaisesLettresEl(); 
    popup.style.display='none'; 
  })
  afficherMot();