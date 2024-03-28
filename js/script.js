// $('.ftr-image01').contenthover({
// 	overlay_background: '#000',
// 	overlay_opacity: 0.8
// });

// $('.ftr-image02').contenthover({
// 	overlay_background: '#000',
// 	overlay_opacity: 0.8
// });

// $('.featured-wrap').mouseover(function () {
// 	('.contents-hover').show();
// }).mouseout(function() {
// 	('.contents-hover').hide();
// });

///////////////////////////////////////////////////////
// Display Logos Section
///////////////////////////////////////////////////////

const allLogos = [
  { source: 'alvis.png', alt: 'Alvis logo' },
  { source: 'bark.png', alt: 'Bark logo' },
  {
    source: 'cameronmitchellrestaurants.png',
    alt: 'Cameron Mitchell logo',
  },
  {
    source: 'columbusschoolforgirls.png',
    alt: 'Columbus School For Girls logo',
  },
  { source: 'covermymeds.png', alt: 'Cover My Meds logo' },
  { source: 'daimler.png', alt: 'Daimler Group logo' },
  { source: 'fstlogistics.png', alt: 'FST Logistics logo' },
  { source: 'furniturebank.png', alt: 'Furniture Bank logo' },
  { source: 'grange.png', alt: 'Grange Insurance logo' },
  { source: 'healthcarerealtytrust.png', alt: 'Healthcare Realty Trust logo' },
  { source: 'kaufman.png', alt: 'Kaufman Development logo' },
  { source: 'lox.png', alt: 'The Lox logo' },
  { source: 'meritex.png', alt: 'Meritex logo' },
  { source: 'mountcarmel.png', alt: 'Mount Carmel logo' },
  {
    source: 'nationwidechildrens.png',
    alt: "Nationwide Children's Hospital logo",
  },
  { source: 'newalbanycompany.png', alt: 'New Albany Company logo' },
  { source: 'ohioent.png', alt: 'Ohio ENT logo' },
  { source: 'ohiohealth.png', alt: 'OhioHealth logo' },
  { source: 'ohiostate.png', alt: 'The Ohio State University logo' },
  { source: 'rockbridge.png', alt: 'Rockbridge Capital logo' },
  { source: 'wasserstrom.png', alt: 'Wasserstrom logo' },
];
let dispLogos = document.querySelectorAll('.logos-list img');
let logoContainer = [];

while (logoContainer.length < 8) {
  const randomNum = Math.floor(Math.random() * allLogos.length);
  if (logoContainer.indexOf(randomNum) === -1) {
    logoContainer.push(randomNum);
  }
}

dispLogos.forEach((logo, i) => {
  let randomValue = logoContainer[i];
  logo.setAttribute('src', `img/logos/${allLogos[randomValue].source}`);
  logo.setAttribute('alt', `${allLogos[randomValue].alt}`);
});
