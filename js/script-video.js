// video selector

let videoSource = [
  'marketing/marketreports/2024/nai_ohio_equities_2024q2_office.mp4',
  'marketing/marketreports/2024/nai_ohio_equities_2024q2_industrial.mp4',
  'marketing/marketreports/2024/nai_ohio_equities_2024q2_retail.mp4',
  // 'marketing/marketreports/2023/nai_ohio_equities_2024q2_multifamily.mp4',
];

let videoTag = document.getElementById('videoSourceTag');

let randomNumber = Math.floor(Math.random() * videoSource.length);

videoTag.setAttribute('src', videoSource[randomNumber]);
