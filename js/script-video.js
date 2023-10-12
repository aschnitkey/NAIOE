// video selector

let videoSource = [
  'marketing/marketreports/2023/nai_ohio_equities_2023q3_office.mp4',
  'marketing/marketreports/2023/nai_ohio_equities_2023q3_industrial.mp4',
  'marketing/marketreports/2023/nai_ohio_equities_2023q3_retail.mp4',
  // 'marketing/marketreports/2023/nai_ohio_equities_2023q3_multifamily.mp4',
];

let videoTag = document.getElementById('videoSourceTag');

let randomNumber = Math.floor(Math.random() * videoSource.length);

videoTag.setAttribute('src', videoSource[randomNumber]);
