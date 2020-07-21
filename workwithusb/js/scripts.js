//////////////////////////////////////////////////////////////////////
// Testimonial Content - Select random testimonial to display
//////////////////////////////////////////////////////////////////////

var quotes = [{quote: "Each and every prospective deal is always handled in a professional and compelling manner. Furthermore, the attention to detail and analysis provided with each RFP has greatly helped the partners in their decision making.", source: "Arthur Goldner, Owner | PNC Plaza", logo: "goldner.png"}, {quote: "Ohio Equities provided valuable and frequent updates on real estate market conditions, deals in play, whose word can be trusted, etc. Also, it was clear throughout our process that other persons and organizations hold Ohio Equities in high regard as knowledgeable and trustworthy counter-parties. Through their reputation, we gained a huge benefit in others assuming at the outset that we were a worthy, albeit small, organization.", source: "Alan Scantland, CEO | CoverMyMeds", logo: "covermymeds.png"}, {quote: "When we started our search for our new office, we knew that hiring NAI Ohio Equities was the right decision.  They were able to help us navigate the complexities of searching for and finding a great office space.  They were with us every step of the way and did a great job of educating us on the market, doing a thorough search process, and ultimately finding us a home that is an excellent reflection of our company’s culture. I would recommend their services to anyone who is considering new office space needs.", source: "Steve Weis, Vice President of Development | Cameron Mitchell Restaurants", logo: "mitchell.png"}, {quote: "The NAI Ohio Equities team went above and beyond to get everyone on board with the decision to move. They made us all feel comfortable and at ease throughout the entire process and were patient and helpful during this lengthy journey.", source: "Kari Kittrell Poole, Executive Director | Kappa Kappa Gamma", logo: "kkg.png"}]

function randomNumber(){
  var random = Math.floor(Math.random() * (quotes.length));
  return random;
}

function testimonialContent(){
  var quoteNum = randomNumber();
  var quote = document.querySelector('.quote');
  var source = document.querySelector('.source');
  var logo = document.querySelector('.testLogo');
  quote.innerHTML = quotes[quoteNum].quote;
  source.innerHTML = quotes[quoteNum].source;
  logo.setAttribute("src", "img/" + quotes[quoteNum].logo);
};

testimonialContent();


//////////////////////////////////////////////////////////////////////
// Fade in content on load
//////////////////////////////////////////////////////////////////////

window.addEventListener("load", function(e){
  const fadedContent = document.querySelectorAll(".fadeLoad");
  for (var i = 0; i < fadedContent.length; i++) {
    fadedContent[i].classList.remove("faded");
  }
});
