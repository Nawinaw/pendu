const motEl = document.getElementById('mot');
const mauvaisesLettres = document.getElementById('mauvaises-lettres');
const rejouerBtn = document.getElementById('play-bouton');
const popup = document.getElementById('popup-contenant');
const notification = document.getElementById('notification-contenant');
const messageFinal = document.getElementById('message-final');

const figurePartie = document.querySelectorAll('.tentative');

const mots = ['policier', 'ecriture', 'developper', 'poulet', 'bresil', 'japon', 'formation', 'architecture', 'princier', 'agence'];


// Sélectionne un mot aléatoirement 

let motSelectionne = mots[Math.floor(Math.random() * mots.length)];

const bonnesLettresArr = [];
const mauvaisesLettresArr = [];
console.log (motSelectionne);

// Afficher le mot cacher 

function afficherMot() {
  motEl.innerHTML = `
  ${motSelectionne
.split('')
.map(
    lettre => `<span class="lettre">
    ${bonnesLettresArr.includes (lettre)
    ? lettre : ''} </span>`
)
.join('')}`;

const motCache = motEl.innerText.replace (/\n/g, '');

if (motCache === motSelectionne) {
    messageFinal.innerText = "BRAVO TU AS GANGE !";
    popup.style.display = 'flex';
}

}


// Mauvaises Lettres

function updateMauvaiseLettres() {
    mauvaisesLettres.innerHTML = `
    ${mauvaisesLettresArr.map (lettre => `<span> ${lettre} </span>`)}`




// Afficher le bonhomme 



figurePartie.forEach((partie, index) => {
     const erreurs = mauvaisesLettresArr.length;

    if (index < erreurs) {
        partie.style.display = 'block';
    } else {
        partie.style.display = 'none';
    }

    })


    // Vérifier si on a perdu 


if(mauvaisesLettresArr.length === figurePartie.length) {
    messageFinal.innerText = 'MALHEUREUSEMENT TU AS PERDU !'
    popup.style.display = 'flex';
}



}


// Afficher la notification 

function afficherNotification() {
    notification.classList.add('afficher');
    setTimeout (()=> {
        notification.classList.remove('afficher')
    }, 2000);
}


// EVENT LISTENERS

window.addEventListener('keydown', event => {
  

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        const lettre = event.key;


        if(motSelectionne.includes(lettre)) {

        if (!bonnesLettresArr.includes(lettre)) {
            bonnesLettresArr.push(lettre);

            afficherMot()


        } else {
            afficherNotification();
        }



        } else {
            if (!mauvaisesLettresArr.includes(lettre)) {
                mauvaisesLettresArr.push(lettre);

                updateMauvaiseLettres();

            } else {
                afficherNotification();
            }
        }
    }

  });
  

// REJOUER ET REDEMARRER


rejouerBtn.addEventListener('click', () =>{

    bonnesLettresArr.splice(0);
    mauvaisesLettresArr.splice(0);

    motSelectionne = mots[Math.floor(Math.random() * mots.length)];

    afficherMot();

    updateMauvaiseLettres();

    popup.style.display = 'none';

})

afficherMot();