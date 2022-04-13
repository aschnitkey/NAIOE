// video selector

let videoSource = [
  'marketing/marketreports/2022/nai_ohio_equities_2022q1_office.mp4',
  'marketing/marketreports/2022/nai_ohio_equities_2022q1_industrial.mp4',
  'marketing/marketreports/2022/nai_ohio_equities_2022q1_retail.mp4',
  'marketing/marketreports/2022/nai_ohio_equities_2022q1_multifamily.mp4',
];

let videoTag = document.getElementById('videoSourceTag');

let randomNumber = Math.floor(Math.random() * videoSource.length);

videoTag.setAttribute('src', videoSource[randomNumber]);
