let pageType = document.querySelector('.services-sub-header h1');
let pageTypeStr = pageType.textContent.toLowerCase().toString();
let officeAgents = [
  {
    name: 'Matt Gregory SIOR, CCIM',
    title: 'Senior VP Office Brokerage',
    ext: '234',
    mobile: '(614) 937-6501',
    shortname: 'mgregory',
    education: 'The Ohio State University',
    exp: '2002',
  },
  {
    name: 'Andy Dutcher SIOR',
    title: 'Senior VP Office Brokerage',
    ext: '266',
    mobile: '(614) 425-2959',
    shortname: 'adutcher',
    education: 'Ohio Univeristy',
    exp: '2007',
  },
  {
    name: 'Philip Bird',
    title: 'VP Office Brokerage',
    ext: '296',
    mobile: '(614) 557-9967',
    shortname: 'pbird',
    education: 'The Ohio State University',
    exp: '2006',
  },
  {
    name: 'John Mally',
    title: 'Commercial Real Estate Agent',
    ext: '254',
    mobile: '(614) 570-7804',
    shortname: 'jmally',
    education: 'Bowling Green State University',
    exp: '2014',
  },
  {
    name: 'Jim Merkel',
    title: 'Senior Vice President',
    ext: '214',
    mobile: '(614) 937-0870',
    shortname: 'jmerkel',
    education: 'Miami University',
    exp: '1970',
  },
  {
    name: 'Peter Merkle',
    title: 'VP Office Brokerage',
    ext: '240',
    mobile: '(614) 218-3520',
    shortname: 'pmerkle',
    education: 'The Ohio State University',
    exp: '2002',
  },
  {
    name: 'Michael Simpson',
    title: 'President',
    ext: '236',
    mobile: '(614) 306-1722',
    shortname: 'msimpson',
    education: 'Capital University',
    exp: '1987',
  },
];
let retailAgents = [
  {
    name: 'Kim Benincasa',
    title: 'Commercial Real Estate Agent',
    ext: '280',
    mobile: '(740) 819-4619',
    shortname: 'kbenincasa',
    education: '',
    exp: '2008',
  },
  officeAgents.find(({ shortname }) => shortname == 'jmally'),
  {
    name: 'Bob Monahan',
    title: 'Commercial Real Estate Agent',
    ext: '222',
    mobile: '(614) 204-6907',
    shortname: 'bmonahan',
    education: 'The Ohio State University',
    exp: '1985',
  },
  {
    name: 'Michael Simpson',
    title: 'President',
    ext: '236',
    mobile: '(614) 306-1722',
    shortname: 'msimpson',
    education: 'Capital University',
    exp: '1987',
  },
];
let industrialAgents = [
  {
    name: 'Curt Berlin SIOR',
    title: 'Industrial Property Team',
    ext: '221',
    mobile: '(614) 296-3739',
    shortname: 'cberlin',
    education: 'The Ohio State University',
    exp: '1986',
  },
  {
    name: 'Blake DeCrane',
    title: 'Industrial Property Team',
    ext: '269',
    mobile: '(614) 905-0944',
    shortname: 'bdecrane',
    education: 'Arizona State University',
    exp: '2015',
  },
  officeAgents.find(({ shortname }) => shortname == 'mfrancescon'),
  {
    name: 'Ryan McGreevy',
    title: 'Commercial Real Estate Agent',
    ext: '282',
    mobile: '(614) 554-3417',
    shortname: 'rmcgreevy',
    education: 'The University of Dayton',
    exp: '2007',
  },
  {
    name: 'Joe Menninger CCIM',
    title: 'Commercial Broker',
    ext: '262',
    mobile: '(614) 778-1464',
    shortname: 'jmenninger',
    education: 'The Ohio State University',
    exp: '2003',
  },
  {
    name: 'Matt Osowski SIOR',
    title: 'Industrial Property Team',
    ext: '229',
    mobile: '(614) 397-4877',
    shortname: 'mosowski',
    education: '',
    exp: '2006',
  },
  {
    name: 'Michael Semon',
    title: 'Industrial Specialist',
    ext: '217',
    mobile: '(614) 657-2391',
    shortname: 'msemon',
    education: '',
    exp: '1996',
  },
  {
    name: 'Daniel P. Sheeran',
    title: 'Industrial Specialist',
    ext: '216',
    mobile: '(614) 581-2434',
    shortname: 'dsheeran',
    education: '',
    exp: '1971',
  },
  {
    name: 'Dan Sheeran, Jr',
    title: 'Industrial Specialist',
    ext: '228',
    mobile: '(513) 310-5497',
    shortname: 'djsheeran',
    education: 'Capital University',
    exp: '2017',
  },
  {
    name: 'Doug Shull',
    title: 'Industrial Specialist',
    ext: '218',
    mobile: '(614) 496-0048',
    shortname: 'dshull',
    education: 'Ashland University',
    exp: '1977',
  },
];

function updateAgentFrom(agentType) {
  const d = new Date();
  const n = d.getFullYear();
  let randomNumber = Math.floor(Math.random() * agentType.length);
  let cardAgent = document.querySelector('.card--agent');
  let agentExperience = n - agentType[randomNumber].exp;

  cardAgent
    .querySelector('img')
    .setAttribute(
      'src',
      `../img/brokers/${agentType[randomNumber].shortname}-portrait.jpg`
    );
  cardAgent.querySelector('.card--agent-name').textContent =
    agentType[randomNumber].name;
  cardAgent.querySelector('.card--agent-title strong').textContent =
    agentType[randomNumber].title;
  cardAgent.querySelector(
    '.card--agent-phone'
  ).innerHTML = `<span class="glyphicon glyphicon-earphone"></span>
    (614) 629-5${agentType[randomNumber].ext} (office)`;
  cardAgent.querySelector(
    '.card--agent-mobile'
  ).innerHTML = `<span class="glyphicon glyphicon-phone"></span> ${agentType[randomNumber].mobile} (mobile)`;
  cardAgent.querySelector(
    '.card--agent-email a'
  ).textContent = `${agentType[randomNumber].shortname}@ohioequities.com`;
  cardAgent
    .querySelector('.card--agent-email a')
    .setAttribute(
      'href',
      `mailto:${agentType[randomNumber].shortname}@ohioequities.com`
    );

  //Check if Education is listed and remove line if none is listed
  if (agentType[randomNumber].education) {
    cardAgent.querySelector(
      '.card--agent-education'
    ).innerHTML = `<strong>Education:</strong> ${agentType[randomNumber].education}`;
  } else {
    cardAgent.querySelector('.card--agent-education').remove();
  }

  // Check if experience is < 3 years and remove if so
  if (agentExperience < 3) {
    cardAgent.querySelector('.card--agent-exp').remove();
  } else {
    cardAgent.querySelector(
      '.card--agent-exp'
    ).innerHTML = `<strong>Years Experience:</strong> ${agentExperience}`;
  }

  cardAgent
    .querySelector('.card--agent-bio a')
    .setAttribute(
      'href',
      `../brokers/${agentType[randomNumber].shortname}.html`
    );
}

if (pageTypeStr.includes('office')) {
  updateAgentFrom(officeAgents);
} else if (pageTypeStr.includes('retail')) {
  updateAgentFrom(retailAgents);
} else if (pageTypeStr.includes('industrial')) {
  updateAgentFrom(industrialAgents);
}
