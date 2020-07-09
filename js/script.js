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
	{source: "alvis.png", alt: "Alvis logo"},
	{source: "cameronmitchellrestaurants.png", alt: "Cameron Mitchell Restaurants logo"},
	{source: "campuspartners.png", alt: "Campus Partners logo"},
	{source: "covermymeds.png", alt: "Cover My Meds logo"},
	{source: "duke.png", alt: "Duke Realty logo"},
	{source: "farmersinsurance.png", alt: "Farmers Insurance logo"},
	{source: "furniturebank.png", alt: "Furniture Bank logo"},
	{source: "hackman.png", alt: "Hackman Capital Partners logo"},
	{source: "kaufman.png", alt: "Kaufman Development logo"},
	{source: "lox.png", alt: "The Lox logo"},
	{source: "meritex.png", alt: "Meritex logo"},
	{source: "mountcarmel.png", alt: "Mount Carmel logo"},
	{source: "nationwidechildrens.png", alt: "Nationwide Children's Hospital logo"},
	{source: "officedepot.png", alt: "Office Depot logo"},
	{source: "ohiohealth.png", alt: "OhioHealth logo"},
	{source: "ohiostate.png", alt: "The Ohio State University logo"},
	{source: "pioneer.png", alt: "Pioneer logo"},
	{source: "pnc.png", alt: "PNC Bank logo"},
	{source: "scotts.png", alt: "Scotts logo"},
	{source: "wasserstrom.png", alt: "Wasserstrom logo"},
	{source: "wendys.png", alt: "Wendy's logo"},
	{source: "whitehall.png", alt: "City of Whitehall logo"}
];
let dispLogos = document.querySelectorAll('.logos-list img');

let logoContainer = [];

while(logoContainer.length < 8) {
	const randomNum = Math.floor(Math.random() * allLogos.length);
	if(logoContainer.indexOf(randomNum) === -1) { logoContainer.push(randomNum) }
}

dispLogos.forEach((logo, i) => {
	let randomValue = logoContainer[i];
	logo.setAttribute('src', `img/logos/${allLogos[randomValue].source}`);
	logo.setAttribute('alt', `${allLogos[randomValue].alt}`);
});
