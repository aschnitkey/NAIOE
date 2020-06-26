let pageType = document.querySelector('.services-sub-header h1');
let pageTypeStr = pageType.textContent.toLowerCase().toString();
let officeAgents = [
    {name: "Matt Gregory SIOR, CCIM", title: "Senior VP Office Brokerage", ext: "234", shortname: "mgregory"}, 
    {name: "Andy Dutcher SIOR", title: "Senior VP Office Brokerage", ext: "266", shortname: "adutcher"},
    {name: "Philip Bird", title: "VP Office Brokerage", ext: "296", shortname: "pbird"},
    {name: "Conor David CCIIR", title: "Commercial Real Estate Agent", ext: "298", shortname: "cdavid"},
    {name: "Mark Francescon", title: "Commercial Real Estate Sales", ext: "264", shortname: "mfrancescon"},
    {name: "John Mally", title: "Commercial Real Estate Agent", ext: "254", shortname: "jmally"},
    {name: "Jim Merkel", title: "Senior Vice President", ext: "214", shortname: "jmerkel"},
    {name: "Peter Merkle", title: "VP Office Brokerage", ext: "240", shortname: "pmerkle"},
    {name: "Michael Simpson", title: "President", ext: "236", shortname: "msimpson"}
];
let retailAgents = [
    {name: "Kim Benincasa", title: "Commercial Real Estate Agent", ext: "280", shortname: "kbenincasa"},
    {name: "John Mally", title: "Commercial Real Estate Agent", ext: "254", shortname: "jmally"},
    {name: "Bob Monahan", title: "Commercial Real Estate Agent", ext: "222", shortname: "bmonahan"},
    {name: "Michael Simpson", title: "President", ext: "236", shortname: "msimpson"}
];
let industrialAgents = [
    {name: "Curt Berlin SIOR", title: "Industrial Property Team", ext: "221", shortname: "cberlin"},
    {name: "Blake DeCrane", title: "Industrial Property Team", ext: "269", shortname: "bdecrane"},
    {name: "Mark Franceson", title: "Commercial Real Estate Sales", ext: "264", shortname: "mfrancescon"},
    {name: "Ryan McGreevy", title: "Commercial Real Estate Agent", ext: "282", shortname: "rmcgreevy"},
    {name: "Joe Menninger CCIM", title: "Commercial Broker", ext: "262", shortname: "jmenninger"},
    {name: "Matt Osowski SIOR", title: "Industrial Property Team", ext: "229", shortname: "mosowski"},
    {name: "Michael Semon", title: "Industrial Specialist", ext: "217", shortname: "msemon"},
    {name: "Daniel P. Sheeran", title: "Industrial Specialist", ext: "216", shortname: "dsheeran"},
    {name: "Dan Sheeran, Jr", title: "Industrial Specialist", ext: "228", shortname: "djsheeran"}
];

function updateAgentFrom(agentType) {
    let randomNumber = Math.floor(Math.random() * agentType.length);
    let cardAgent = document.querySelector('.card--agent');

    cardAgent.querySelector('img').setAttribute('src', `../img/brokers/${agentType[randomNumber].shortname}-portrait.jpg`);
    cardAgent.querySelector('.card--agent-name').textContent = agentType[randomNumber].name;
    cardAgent.querySelector('.card--agent-title strong').textContent = agentType[randomNumber].title;
    cardAgent.querySelector('.card--agent-phone').textContent = `(614) 629-5${agentType[randomNumber].ext}`;
    cardAgent.querySelector('.card--agent-bio a').setAttribute('href', `../brokers/${agentType[randomNumber].shortname}.html`);
}

if (pageTypeStr.includes("office")) {
    updateAgentFrom(officeAgents);
} else if (pageTypeStr.includes("retail")) {
    updateAgentFrom(retailAgents); 
} else if (pageTypeStr.includes("industrial")) {
    updateAgentFrom(industrialAgents);
}