// bouton de retour en haut
// Afficher ou masquer le bouton de retour en haut en fonction du défilement
window.addEventListener('scroll', function() {
  const btnScrollToTop = document.getElementById('btnScrollToTop');
  if (window.scrollY > 200 && window.innerWidth>767) { // Ajustez cette valeur selon votre préférence
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
});

// Faire défiler vers le haut lorsque le bouton est cliqué
document.getElementById('btnScrollToTop').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// fonction qui permet de dire si on est sur la page active ou pas
let footerActive = document.getElementById('footerId')
let navLinkFooter = footer.getElementsByClassName('nav-link');
let currentUri = window.location.pathname;


// fonction pour toute nav active
function navLinkActive(arr){
  let currentPage = window.location.pathname;
  for (let i=0; i<arr.length;i++){
    arr[i].getAttribute('href') === '.'+currentPage?(arr[i].classList.add('active')):(arr[i].classList.remove('active'));
  }
}
navLinkActive(navLinkFooter);

// classe active sur les nav-links du header
let navbar= document.getElementById('navbar');
let navLinkHeader = navbar.getElementsByClassName('nav-link');
navLinkActive(navLinkHeader);


// fonction qui ajoute une classe bs de bordure inférieure sur les grands écrans
function addBorder(){
  const nav = document.querySelector('nav')
  window.innerWidth>991 ? (nav.classList.add('border-bottom')):(nav.classList.remove('border-bottom'));
}
addBorder();

// const form= document.querySelector('form');
// const submitBtn = document.getElementById('submitBtn')
// submitBtn.addEventListener('click', function(){
//   event.preventDefault();
//   // let formData= new FormData(this);
//   let firstName = document.getElementById('firstname').value
//   let lastName = document.getElementById('lastname').value
//   let email = document.getElementById('email').value
//   let message = document.getElementById('message').value
//   console.log(firstName, lastName, email, message);
//    // Validation des données du formulaire
 




