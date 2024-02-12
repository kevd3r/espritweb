let footer = document.getElementById('footerId');

const menuFooterItems = [
  {
    href : './index.html',
    name: 'Accueil'
  },
  {
    href : './apropos.html',
    name: 'A propos'
  },
  {
    href : './realisations.html',
    name: 'Réalisations'
  },
  {
    href : './contact.html',
    name: 'Contact'
  },
  {
    href: './mentions.html',
    name : 'Mentions Légales'
  }
]

footer.innerHTML=`
  <div class="row col-10">
    <div class="desktop-content  col-12 d-none d-md-flex  m-auto border-bottom">
      <ul class="nav m-auto" id="footerMenu">
      </ul>
    </div>
    <div class="mobile-content  text-center mt-3 pb-4 d-flex justify-content-between col-md-6 mx-auto">
      <a href="tel:+33603738030"><i class="bi bi-telephone"></i></a>
      <a href="./index.html"><i class="bi bi-house"></i></a>
      <a href="mailto:kevin.derot@espritweb.io"><i class="bi bi-envelope"></i></a>
      <a href = "#" class="disabled"><i class="bi bi-linkedin"></i></a>
    </div>
  </div>
`
let footerNav = document.getElementById('footerMenu')

function displayMenuItems(){
  for (let i=0; i<menuFooterItems.length;i++){
    const navItem=
    `
    <li class="nav-item p-2 disabled">
      <a class="nav-link" href="${menuFooterItems[i].href}">${menuFooterItems[i].name}</a>
    </li> `
  footerNav.innerHTML+=navItem;
  }
}
displayMenuItems();
